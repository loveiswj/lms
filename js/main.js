/* =========================================
   main.js — 비아이매트릭스 아카데미
   메인 페이지: 일정 / 영상 / 커뮤니티 Supabase 연동
   ========================================= */

(function () {
  "use strict";

  /* ────────────────────────────────────────
     샘플 데이터
  ──────────────────────────────────────── */
  var SAMPLE_SCHEDULES = [
    { date: '2026-11-05', dow: 'WED', title: 'AUD 기초 과정 — 데이터 연결과 네비게이션', instructor: '김지현 강사', time_start: '10:00', time_end: '17:00', mode: 'online', status: 'open' },
    { date: '2026-11-12', dow: 'WED', title: 'G-MATRIX 모바일 활용 실무', instructor: '이상현 강사', time_start: '10:00', time_end: '17:00', mode: 'online', status: 'closing' },
    { date: '2026-11-18', dow: 'WED', title: 'TRINITY 실전 데이터 분석', instructor: '박성현 강사', time_start: '10:00', time_end: '17:00', mode: 'offline', status: 'closed' },
    { date: '2026-11-26', dow: 'WED', title: 'BI 데이터 모델링 기초', instructor: '지관수 강사', time_start: '10:00', time_end: '17:00', mode: 'offline', status: 'open' },
  ];

  var SAMPLE_VIDEOS = [
    { title: 'AUD 대시보드 실전 질문', duration: '29:16', thumbnail_url: 'assets/images/thumb-dashboard.jpg', youtube_url: '#' },
    { title: 'G-MATRIX 콘텐츠 작성팁', duration: '15:52', thumbnail_url: 'assets/images/thumb-epa.jpg', youtube_url: '#' },
    { title: 'TRINITY 실전 판서', duration: '21:05', thumbnail_url: 'assets/images/thumb-olap.jpg', youtube_url: '#' },
    { title: 'BI 데이터 파이프라인', duration: '30:11', thumbnail_url: 'assets/images/thumb-report.jpg', youtube_url: '#' },
  ];

  /* ────────────────────────────────────────
     일정 렌더링
  ──────────────────────────────────────── */
  function renderSchedules(list) {
    var el = document.getElementById('scheduleCard');
    if (!el) return;

    var DOWS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var statusMap = {
      open:     { cls: 'schedule-status--open',     label: '신청중' },
      closing:  { cls: 'schedule-status--closing',  label: '마감임박' },
      closed:   { cls: 'schedule-status--closed',   label: '마감' },
      upcoming: { cls: 'schedule-status--upcoming', label: '예정' }
    };

    var rows = list.map(function (s) {
      var d = new Date(s.date + 'T00:00:00');
      var mm = String(d.getMonth() + 1).padStart(2, '0');
      var dd = String(d.getDate()).padStart(2, '0');
      var dow = s.dow || DOWS[d.getDay()];
      var modeIcon = s.mode === 'online' ? '🖥' : '📍';
      var modeText = s.mode === 'online' ? '온라인' : s.mode === 'hybrid' ? '하이브리드' : '오프라인';
      var st = statusMap[s.status] || statusMap['open'];
      var ts = (s.time_start || '10:00').slice(0, 5);
      var te = (s.time_end   || '17:00').slice(0, 5);

      return '<tr>' +
        '<td><div class="schedule-date">' +
          '<span class="schedule-date__day">' + mm + '.' + dd + '</span>' +
          '<span class="schedule-date__dow">' + dow + '</span>' +
        '</div></td>' +
        '<td class="schedule-title-cell">' + s.title + '</td>' +
        '<td class="schedule-instructor">' + (s.instructor || '') + '</td>' +
        '<td class="schedule-time">' + ts + ' – ' + te + '</td>' +
        '<td><div class="schedule-mode"><span>' + modeIcon + '</span><span>' + modeText + '</span></div></td>' +
        '<td><span class="schedule-status ' + st.cls + '">' + st.label + '</span></td>' +
        '</tr>';
    }).join('');

    el.innerHTML = '<table class="schedule-table"><tbody>' + rows + '</tbody></table>';
  }

  /* ────────────────────────────────────────
     영상 렌더링
  ──────────────────────────────────────── */
  function renderVideos(list) {
    var el = document.getElementById('videosGrid');
    if (!el) return;

    el.innerHTML = list.map(function (v) {
      var thumb  = v.thumbnail_url || 'assets/images/thumb-dashboard.jpg';
      var url    = v.youtube_url   || '#';
      var target = url !== '#' ? 'target="_blank" rel="noopener"' : '';
      return '<a href="' + url + '" ' + target + ' class="video-card">' +
        '<div class="video-card__thumb">' +
          '<img src="' + thumb + '" alt="' + v.title + '" loading="lazy">' +
          '<div class="video-card__play">' +
            '<svg viewBox="0 0 44 44" fill="none">' +
              '<circle cx="22" cy="22" r="22" fill="rgba(0,0,0,0.5)"/>' +
              '<polygon points="17,13 33,22 17,31" fill="white"/>' +
            '</svg>' +
          '</div>' +
          (v.duration ? '<span class="video-card__duration">' + v.duration + '</span>' : '') +
        '</div>' +
        '<div class="video-card__body"><p class="video-card__title">' + v.title + '</p></div>' +
        '</a>';
    }).join('');
  }

  /* ────────────────────────────────────────
     Supabase에서 실제 데이터 업데이트
  ──────────────────────────────────────── */
  function updateFromSupabase() {
    var sb;
    try { sb = _supabase; } catch (e) { return; }
    if (!sb) return;

    // 일정 업데이트
    var today = new Date().toISOString().split('T')[0];
    sb.from('schedules')
      .select('*')
      .gte('date', today)
      .order('date', { ascending: true })
      .limit(5)
      .then(function (res) {
        if (!res.error && res.data && res.data.length > 0) {
          renderSchedules(res.data);
        }
      })
      .catch(function () {});

    // 영상 업데이트
    sb.from('videos')
      .select('*')
      .order('view_count', { ascending: false })
      .limit(4)
      .then(function (res) {
        if (!res.error && res.data && res.data.length > 0) {
          renderVideos(res.data);
        }
      })
      .catch(function () {});

    // 커뮤니티 미리보기
    sb.from('community_posts')
      .select('id, category, title')
      .order('created_at', { ascending: false })
      .limit(8)
      .then(function (res) {
        if (!res.error && res.data) {
          var map = { notice: 'noticePreview', qa: 'qaPreview', review: 'reviewPreview', ai: 'aiPreview' };
          var bycat = {};
          res.data.forEach(function (p) {
            if (!bycat[p.category]) bycat[p.category] = p;
          });
          Object.keys(map).forEach(function (cat) {
            if (bycat[cat]) {
              var el = document.getElementById(map[cat]);
              if (el) el.textContent = bycat[cat].title;
            }
          });
        }
      })
      .catch(function () {});

    // 오프라인 이벤트
    sb.from('offline_events')
      .select('*')
      .eq('is_active', true)
      .order('date', { ascending: true })
      .limit(1)
      .then(function (res) {
        if (!res.error && res.data && res.data.length > 0) {
          var data = res.data[0];
          var el = document.getElementById('offlineEventCard');
          if (!el) return;
          var d = new Date(data.date);
          var pad = function (n) { return String(n).padStart(2, '0'); };
          var dateStr = d.getFullYear() + '.' + pad(d.getMonth() + 1) + '.' + pad(d.getDate());
          var timeStr = pad(d.getHours()) + ':' + pad(d.getMinutes());
          el.innerHTML =
            '<div class="offline-event-card__content">' +
            '<p class="offline-event-card__tag">오프라인 모임 신청</p>' +
            '<h3 class="offline-event-card__title">' + data.title + '</h3>' +
            '<p class="offline-event-card__info">📅 ' + dateStr + ' &nbsp;' + timeStr + '</p>' +
            '<p class="offline-event-card__info">📍 ' + (data.location || '') + '</p>' +
            '<a href="' + (data.apply_url || '#') + '" class="offline-event-card__btn">모임 참여하기 →</a>' +
            '</div>';
        }
      })
      .catch(function () {});
  }

  /* ────────────────────────────────────────
     검색 오버레이
  ──────────────────────────────────────── */
  function initSearch() {
    var toggle  = document.getElementById('searchToggle');
    var overlay = document.getElementById('searchOverlay');
    var input   = document.getElementById('searchInput');
    var close   = document.getElementById('searchClose');
    if (!toggle || !overlay) return;

    function open() {
      overlay.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      setTimeout(function () { if (input) input.focus(); }, 50);
    }
    function shut() {
      overlay.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    toggle.addEventListener('click', open);
    close.addEventListener('click', shut);
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) shut();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') shut();
    });
  }

  /* ────────────────────────────────────────
     모바일 메뉴
  ──────────────────────────────────────── */
  function initMobileNav() {
    var ham = document.getElementById('hamburger');
    var nav = document.getElementById('mobileNav');
    var cls = document.getElementById('mobileNavClose');
    if (!ham || !nav) return;

    ham.addEventListener('click', function () {
      nav.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    });
    if (cls) {
      cls.addEventListener('click', function () {
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    }
    nav.addEventListener('click', function (e) {
      if (e.target === nav) {
        nav.classList.remove('is-open');
        document.body.style.overflow = '';
      }
    });
  }

  /* ────────────────────────────────────────
     오프라인 카드 높이 = FAQ 리스트 높이에 맞춤
  ──────────────────────────────────────── */
  function syncOfflineCardHeight() {
    var faqList    = document.querySelector('.faq-list-new');
    var offlineCard = document.getElementById('offlineEventCard');
    if (!faqList || !offlineCard) return;
    offlineCard.style.minHeight = faqList.offsetHeight + 'px';
  }

  /* ────────────────────────────────────────
     초기화 — 샘플 즉시 렌더 후 Supabase 업데이트
  ──────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    renderSchedules(SAMPLE_SCHEDULES);
    renderVideos(SAMPLE_VIDEOS);
    updateFromSupabase();
    initSearch();
    initMobileNav();
    syncOfflineCardHeight();
    window.addEventListener('resize', syncOfflineCardHeight);
  });

})();
