/* =========================================
   nav.js — AUD Academy LMS
   네비게이션 (GNB 메가메뉴 + 모바일 햄버거)
   ========================================= */

(function () {
  "use strict";

  /* ────────────────────────────────────────
     GNB 메가메뉴
  ──────────────────────────────────────── */
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
      navItem.addEventListener("click", function () {
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
     초기화
  ──────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", function () {
    initGnb();
    initMobileNav();
    initSearch();
    initMobileSearch();
  });
})();
