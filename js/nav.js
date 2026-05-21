/* =========================================
   nav.js — AUD Academy LMS
   네비게이션 (GNB 메가메뉴 + 모바일 햄버거)
   ========================================= */

(function () {
  "use strict";

  /* ────────────────────────────────────────
     GNB 메가메뉴
  ──────────────────────────────────────── */
  function initSimpleNav() {
    /* 같은 페이지 링크 클릭 시 페이지를 새로 로드해 상태를 초기화 (커리큘럼 등 리셋) */
    document.querySelectorAll(".gnb-simple__link").forEach(function(link) {
      link.addEventListener("click", function() {
        var href = this.getAttribute("href");
        var currentFile = location.pathname.split("/").pop() || "index.html";
        if (href === currentFile) {
          location.href = href;
        }
      });
    });
  }

  function initGnb() {
    const gnbItems = document.querySelectorAll(".gnb__item");
    if (!gnbItems.length) return;

    gnbItems.forEach(function (item) {
      const trigger = item.querySelector(".gnb__trigger");
      if (!trigger) return;

      trigger.addEventListener("click", function (e) {
        e.stopPropagation();

        const isOpen = item.classList.contains("is-open");

        // 모두 닫기
        gnbItems.forEach(function (i) {
          i.classList.remove("is-open");
        });

        // 클릭한 항목 토글
        if (!isOpen) {
          item.classList.add("is-open");
        }
      });
    });

    // 외부 클릭 시 닫기
    document.addEventListener("click", function () {
      gnbItems.forEach(function (i) {
        i.classList.remove("is-open");
      });
    });

    // 메가메뉴 내부 클릭 전파 차단
    document.querySelectorAll(".mega-menu").forEach(function (menu) {
      menu.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    });

    // 메가메뉴 탭 (좌측 nav-item ↔ 우측 panel 연동)
    document.querySelectorAll(".mega-menu__nav-item").forEach(function (navItem) {
      navItem.addEventListener("click", function (e) {
        e.stopPropagation();
        const target = this.dataset.target;
        const megaMenu = this.closest(".mega-menu");
        if (!megaMenu) return;

        // nav-item 활성화 전환
        megaMenu.querySelectorAll(".mega-menu__nav-item").forEach(function (ni) {
          ni.classList.remove("is-active");
        });
        this.classList.add("is-active");

        // panel 전환
        megaMenu.querySelectorAll(".mega-menu__panel").forEach(function (panel) {
          panel.classList.remove("is-active");
        });
        const activePanel = megaMenu.querySelector('.mega-menu__panel[data-panel="' + target + '"]');
        if (activePanel) activePanel.classList.add("is-active");
      });
    });
  }

  /* ────────────────────────────────────────
     모바일 햄버거 메뉴
  ──────────────────────────────────────── */
  function initMobileNav() {
    const hamburger = document.getElementById("hamburger");
    const mobileNav = document.getElementById("mobileNav");
    const mobileClose = document.getElementById("mobileNavClose");

    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener("click", function () {
      mobileNav.classList.add("is-open");
      hamburger.classList.add("is-open");
      document.body.style.overflow = "hidden";
    });

    function closeNav() {
      mobileNav.classList.remove("is-open");
      hamburger.classList.remove("is-open");
      document.body.style.overflow = "";
    }

    if (mobileClose) {
      mobileClose.addEventListener("click", closeNav);
    }

    // 모바일 카테고리 아코디언
    document.querySelectorAll(".mobile-nav__category").forEach(function (cat) {
      cat.addEventListener("click", function () {
        const section = this.closest(".mobile-nav__section");
        if (!section) return;

        const isOpen = section.classList.contains("is-open");

        document.querySelectorAll(".mobile-nav__section").forEach(function (s) {
          s.classList.remove("is-open");
        });

        if (!isOpen) {
          section.classList.add("is-open");
        }
      });
    });
  }

  /* ────────────────────────────────────────
     검색창
  ──────────────────────────────────────── */
  function initSearch() {
    // 데스크톱 검색창
    const searchInput = document.querySelector(".header-main .header-search__input");
    if (searchInput) {
      searchInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          const query = this.value.trim();
          if (query) {
            window.location.href = "course-list.html?q=" + encodeURIComponent(query);
          }
        }
      });

      const searchContainer = searchInput.closest(".header-search");
      const searchBtn = searchContainer ? searchContainer.querySelector(".header-search__btn") : null;
      if (searchBtn) {
        searchBtn.addEventListener("click", function () {
          const query = searchInput.value.trim();
          if (query) {
            window.location.href = "course-list.html?q=" + encodeURIComponent(query);
          }
        });
      }
    }
  }

  /* ────────────────────────────────────────
     모바일 검색 패널
  ──────────────────────────────────────── */
  function initMobileSearch() {
    const toggle    = document.getElementById("mobileSearchToggle");
    const panel     = document.getElementById("mobileSearchPanel");
    const mInput    = document.getElementById("mobileSearchInput");
    const mSubmit   = document.getElementById("mobileSearchSubmit");

    if (!toggle || !panel) return;

    toggle.addEventListener("click", function () {
      const isOpen = panel.classList.contains("is-open");
      panel.classList.toggle("is-open");
      if (!isOpen && mInput) {
        mInput.focus();
      }
    });

    function doSearch() {
      const query = mInput ? mInput.value.trim() : "";
      if (query) {
        window.location.href = "course-list.html?q=" + encodeURIComponent(query);
      }
    }

    if (mInput) {
      mInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") doSearch();
      });
    }

    if (mSubmit) {
      mSubmit.addEventListener("click", doSearch);
    }
  }

  /* ────────────────────────────────────────
     로그인 상태 헤더 반영
  ──────────────────────────────────────── */

  /* localStorage에서 만료되지 않은 세션을 동기적으로 읽기 */
  function getLocalSession() {
    try {
      var raw = localStorage.getItem('bim-academy-auth');
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (data && data.access_token && data.user) {
        var exp = data.expires_at;
        if (exp && (Date.now() / 1000) > exp && !data.refresh_token) return null;
        return data;
      }
    } catch (e) {}
    return null;
  }

  function renderLoggedIn(actionsEl, name) {
    actionsEl.innerHTML =
      '<span class="header-actions__username" style="font-size:13px;color:var(--text-sub);font-weight:600;">' + name + '님</span>' +
      '<span class="header-actions__divider"></span>' +
      '<a href="mypage.html" class="btn btn--secondary btn--sm">마이페이지</a>' +
      '<button onclick="navLogout()" class="btn btn--primary btn--sm" style="border:none;cursor:pointer;font-family:var(--font);">로그아웃</button>';
  }

  function renderLoggedOut(actionsEl) {
    actionsEl.innerHTML =
      '<a href="login.html" class="header-actions__link">로그인</a>' +
      '<span class="header-actions__divider"></span>' +
      '<a href="signup.html" class="btn btn--secondary btn--sm">회원가입</a>';
  }

  function initAuth() {
    var actionsEl = document.querySelector(".header-actions");
    if (!actionsEl) return;

    /* 1단계: localStorage 즉시 읽기 */
    var local = getLocalSession();
    if (local) {
      var cachedName = localStorage.getItem('bim-academy-display-name');
      var quickName = cachedName
        || (local.user && local.user.user_metadata && local.user.user_metadata.name)
        || (local.user && local.user.email ? local.user.email.split("@")[0] : '사용자');
      renderLoggedIn(actionsEl, quickName);
    } else if (typeof _supabase === "undefined") {
      /* Supabase 미사용 환경에서만 즉시 로그아웃 렌더 */
      renderLoggedOut(actionsEl);
      return;
    }
    /* local이 없어도 Supabase가 있으면 2단계까지 기다림 —
       inline script가 이미 올바른 상태를 그려두었으므로 덮어쓰지 않음 */

    if (typeof _supabase === "undefined") return;

    /* 2단계: 서버 세션 검증 후 프로필명으로 업데이트 */
    _supabase.auth.getSession().then(function (res) {
      var session = res.data && res.data.session;

      if (session) {
        _supabase.from("profiles").select("name").eq("id", session.user.id).single()
          .then(function (r) {
            var name = (r.data && r.data.name) || session.user.email.split("@")[0];
            localStorage.setItem('bim-academy-display-name', name);
            renderLoggedIn(actionsEl, name);
          })
          .catch(function () {
            renderLoggedIn(actionsEl, session.user.email.split("@")[0]);
          });

        var mobileLoginBtn = document.getElementById("mobileLoginBtn");
        if (mobileLoginBtn) { mobileLoginBtn.textContent = "마이페이지"; mobileLoginBtn.href = "mypage.html"; }
        var mobileSignupBtn = document.getElementById("mobileSignupBtn");
        if (mobileSignupBtn) mobileSignupBtn.style.display = "none";

      } else {
        /* 서버에서도 세션 없음 → 로그아웃 확정 */
        renderLoggedOut(actionsEl);
      }
    }).catch(function () {
      /* 네트워크 오류 시 로컬 세션 상태 유지, 없으면 로그아웃 */
      if (!local) renderLoggedOut(actionsEl);
    });
  }

  window.navLogout = function () {
    /* localStorage에서 Supabase 세션 즉시 제거 */
    Object.keys(localStorage).forEach(function(key) {
      if (key.startsWith('sb-') || key.indexOf('supabase') !== -1 || key === 'bim-academy-auth' || key === 'bim-academy-display-name') {
        localStorage.removeItem(key);
      }
    });
    /* 서버 측 토큰 무효화 (백그라운드) */
    if (typeof _supabase !== "undefined") _supabase.auth.signOut().catch(function(){});
    window.location.href = "index.html";
  };

  /* ────────────────────────────────────────
     초기화
  ──────────────────────────────────────── */
  /* nav.js는 </body> 직전에 로드되므로 헤더 DOM이 이미 존재함.
     initAuth는 즉시 실행해 깜빡임을 없애고, 나머지는 DOMContentLoaded 후 실행 */
  initAuth();
  document.addEventListener("DOMContentLoaded", function () {
    initSimpleNav();
    initGnb();
    initMobileNav();
    initSearch();
    initMobileSearch();
  });
})();
