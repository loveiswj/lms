-- ============================================================
-- 비아이매트릭스 아카데미 LMS — Supabase 테이블 설정
-- Supabase Dashboard > SQL Editor 에서 실행하세요
-- ============================================================

-- ────────────────────────────────────────────────────────────
-- 1. profiles (사용자 프로필)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id          UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name        TEXT,
  phone       TEXT,
  company     TEXT,
  job_title   TEXT,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "본인 프로필 조회" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "본인 프로필 수정" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "회원가입 시 프로필 생성" ON public.profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

-- 회원가입 시 자동으로 profiles 행 생성
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  INSERT INTO public.profiles (id, name)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'name', split_part(NEW.email, '@', 1))
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();


-- ────────────────────────────────────────────────────────────
-- 2. enrollments (수강 신청 / 결제 완료)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.enrollments (
  id              BIGSERIAL PRIMARY KEY,
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id       INTEGER NOT NULL,
  payment_key     TEXT,
  order_id        TEXT UNIQUE,
  amount          INTEGER DEFAULT 0,
  status          TEXT DEFAULT 'active' CHECK (status IN ('active', 'refunded', 'expired')),
  enrolled_at     TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  expires_at      TIMESTAMPTZ,
  UNIQUE (user_id, course_id)
);

ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "본인 수강 목록 조회" ON public.enrollments
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "결제 완료 시 수강 등록" ON public.enrollments
  FOR INSERT WITH CHECK (auth.uid() = user_id);


-- ────────────────────────────────────────────────────────────
-- 3. progress (강의 진도율)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.progress (
  id              BIGSERIAL PRIMARY KEY,
  user_id         UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id       INTEGER NOT NULL,
  progress_pct    INTEGER DEFAULT 0 CHECK (progress_pct BETWEEN 0 AND 100),
  last_watched_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE (user_id, course_id)
);

ALTER TABLE public.progress ENABLE ROW LEVEL SECURITY;

CREATE POLICY "본인 진도 조회" ON public.progress
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "본인 진도 저장" ON public.progress
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "본인 진도 업데이트" ON public.progress
  FOR UPDATE USING (auth.uid() = user_id);


-- ────────────────────────────────────────────────────────────
-- 4. certificates (수료증)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.certificates (
  id          BIGSERIAL PRIMARY KEY,
  user_id     UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id   INTEGER NOT NULL,
  issued_at   TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  cert_number TEXT UNIQUE DEFAULT ('CERT-' || to_char(NOW(), 'YYYYMMDD') || '-' || floor(random()*90000+10000)::TEXT),
  UNIQUE (user_id, course_id)
);

ALTER TABLE public.certificates ENABLE ROW LEVEL SECURITY;

CREATE POLICY "본인 수료증 조회" ON public.certificates
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "시스템이 수료증 발급" ON public.certificates
  FOR INSERT WITH CHECK (auth.uid() = user_id);


-- ────────────────────────────────────────────────────────────
-- 5. community_posts (커뮤니티 게시글)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.community_posts (
  id            BIGSERIAL PRIMARY KEY,
  author_id     UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name   TEXT NOT NULL,
  category      TEXT NOT NULL DEFAULT 'free'
                CHECK (category IN ('notice', 'qa', 'free', 'review')),
  title         TEXT NOT NULL,
  content       TEXT NOT NULL,
  views         INTEGER DEFAULT 0,
  likes         INTEGER DEFAULT 0,
  comment_count INTEGER DEFAULT 0,
  is_pinned     BOOLEAN DEFAULT FALSE,
  created_at    TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at    TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;

-- 전체 공개 조회
CREATE POLICY "게시글 전체 조회" ON public.community_posts
  FOR SELECT USING (TRUE);

-- 로그인한 사용자만 작성 (공지는 관리자만 - 추후 role 체크)
CREATE POLICY "로그인 사용자 게시글 작성" ON public.community_posts
  FOR INSERT WITH CHECK (auth.uid() = author_id AND category != 'notice');

-- 본인 글만 수정
CREATE POLICY "본인 게시글 수정" ON public.community_posts
  FOR UPDATE USING (auth.uid() = author_id);

-- 본인 글만 삭제
CREATE POLICY "본인 게시글 삭제" ON public.community_posts
  FOR DELETE USING (auth.uid() = author_id);

-- 공지 인덱스 (카테고리 + 생성일)
CREATE INDEX IF NOT EXISTS idx_community_posts_category ON public.community_posts(category, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_community_posts_author ON public.community_posts(author_id);


-- ────────────────────────────────────────────────────────────
-- 6. community_comments (댓글)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.community_comments (
  id          BIGSERIAL PRIMARY KEY,
  post_id     BIGINT NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  author_id   UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  author_name TEXT NOT NULL,
  content     TEXT NOT NULL,
  created_at  TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE public.community_comments ENABLE ROW LEVEL SECURITY;

CREATE POLICY "댓글 전체 조회" ON public.community_comments
  FOR SELECT USING (TRUE);

CREATE POLICY "로그인 사용자 댓글 작성" ON public.community_comments
  FOR INSERT WITH CHECK (auth.uid() = author_id);

CREATE POLICY "본인 댓글 삭제" ON public.community_comments
  FOR DELETE USING (auth.uid() = author_id);

-- 댓글 등록 시 community_posts.comment_count 자동 증가
CREATE OR REPLACE FUNCTION public.increment_comment_count()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.community_posts
  SET comment_count = comment_count + 1
  WHERE id = NEW.post_id;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.decrement_comment_count()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.community_posts
  SET comment_count = GREATEST(0, comment_count - 1)
  WHERE id = OLD.post_id;
  RETURN OLD;
END;
$$;

DROP TRIGGER IF EXISTS on_comment_insert ON public.community_comments;
CREATE TRIGGER on_comment_insert
  AFTER INSERT ON public.community_comments
  FOR EACH ROW EXECUTE FUNCTION public.increment_comment_count();

DROP TRIGGER IF EXISTS on_comment_delete ON public.community_comments;
CREATE TRIGGER on_comment_delete
  AFTER DELETE ON public.community_comments
  FOR EACH ROW EXECUTE FUNCTION public.decrement_comment_count();


-- ────────────────────────────────────────────────────────────
-- 7. community_likes (좋아요)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.community_likes (
  post_id   BIGINT NOT NULL REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id   UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  PRIMARY KEY (post_id, user_id)
);

ALTER TABLE public.community_likes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "좋아요 조회" ON public.community_likes
  FOR SELECT USING (TRUE);

CREATE POLICY "좋아요 추가" ON public.community_likes
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "좋아요 취소" ON public.community_likes
  FOR DELETE USING (auth.uid() = user_id);

-- 좋아요 추가/취소 시 posts.likes 자동 업데이트
CREATE OR REPLACE FUNCTION public.update_post_likes_on_insert()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.community_posts SET likes = likes + 1 WHERE id = NEW.post_id;
  RETURN NEW;
END;
$$;

CREATE OR REPLACE FUNCTION public.update_post_likes_on_delete()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  UPDATE public.community_posts SET likes = GREATEST(0, likes - 1) WHERE id = OLD.post_id;
  RETURN OLD;
END;
$$;

DROP TRIGGER IF EXISTS on_like_insert ON public.community_likes;
CREATE TRIGGER on_like_insert AFTER INSERT ON public.community_likes
  FOR EACH ROW EXECUTE FUNCTION public.update_post_likes_on_insert();

DROP TRIGGER IF EXISTS on_like_delete ON public.community_likes;
CREATE TRIGGER on_like_delete AFTER DELETE ON public.community_likes
  FOR EACH ROW EXECUTE FUNCTION public.update_post_likes_on_delete();


-- ────────────────────────────────────────────────────────────
-- 8. offline_events (오프라인 행사 신청)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.offline_events (
  id           BIGSERIAL PRIMARY KEY,
  event_name   TEXT NOT NULL,
  event_date   DATE NOT NULL,
  applicant_name  TEXT NOT NULL,
  applicant_email TEXT NOT NULL,
  applicant_phone TEXT,
  company      TEXT,
  job_title    TEXT,
  memo         TEXT,
  user_id      UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  status       TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at   TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE public.offline_events ENABLE ROW LEVEL SECURITY;

-- 본인 신청 내역만 조회
CREATE POLICY "본인 행사 신청 조회" ON public.offline_events
  FOR SELECT USING (auth.uid() = user_id OR auth.uid() IS NULL);

-- 누구나 신청 가능 (비로그인 포함)
CREATE POLICY "행사 신청 가능" ON public.offline_events
  FOR INSERT WITH CHECK (TRUE);


-- ────────────────────────────────────────────────────────────
-- 9. schedules (교육 일정)
-- ────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.schedules (
  id           BIGSERIAL PRIMARY KEY,
  course_id    INTEGER NOT NULL,
  start_date   DATE NOT NULL,
  end_date     DATE,
  location     TEXT DEFAULT '온라인',
  seats_total  INTEGER DEFAULT 20,
  seats_left   INTEGER DEFAULT 20,
  instructor   TEXT,
  created_at   TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

ALTER TABLE public.schedules ENABLE ROW LEVEL SECURITY;
CREATE POLICY "일정 전체 조회" ON public.schedules FOR SELECT USING (TRUE);


-- ────────────────────────────────────────────────────────────
-- 샘플 데이터 (선택적 — 테스트용)
-- ────────────────────────────────────────────────────────────

-- 커뮤니티 공지 샘플
INSERT INTO public.community_posts (author_id, author_name, category, title, content, views, likes, comment_count, is_pinned)
VALUES
  (NULL, '운영팀', 'notice', '6월 비아이매트릭스 아카데미 정식 오픈 안내',
   E'안녕하세요, 비아이매트릭스 아카데미입니다.\n\n2026년 6월 25일, 비아이매트릭스 아카데미가 정식 오픈합니다.\n온·오프라인 통합 실무 BI 교육 플랫폼으로 여러분을 찾아갑니다.\n\n오픈 기념으로 선착순 100명에게 첫 달 수강료 20% 할인 혜택을 드립니다.',
   312, 24, 5, TRUE),
  (NULL, '운영팀', 'notice', '[필독] 커뮤니티 이용 규칙 안내',
   E'원활한 커뮤니티 운영을 위해 이용 규칙을 안내드립니다.\n\n1. 타인을 비방하거나 불쾌감을 주는 내용은 금지됩니다.\n2. 광고 및 홍보성 게시물은 삭제될 수 있습니다.\n3. 저작권을 침해하는 자료 공유는 금지됩니다.',
   198, 18, 2, TRUE)
ON CONFLICT DO NOTHING;


-- ────────────────────────────────────────────────────────────
-- 완료 메시지
-- ────────────────────────────────────────────────────────────
DO $$ BEGIN
  RAISE NOTICE '비아이매트릭스 아카데미 LMS 테이블 설정 완료!';
  RAISE NOTICE '생성된 테이블: profiles, enrollments, progress, certificates';
  RAISE NOTICE '            community_posts, community_comments, community_likes';
  RAISE NOTICE '            offline_events, schedules';
END $$;
