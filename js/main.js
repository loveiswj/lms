/* =========================================
   main.js — AUD Academy LMS
   메인 페이지 로직 (슬라이더, 추천 과목)
   ========================================= */

(function () {
  "use strict";

  /* ────────────────────────────────────────
     히어로 배너 슬라이더
  ──────────────────────────────────────── */
  function initSlider() {
    const slider = document.querySelector(".hero-slides");
    const dots = document.querySelectorAll(".hero-dot");
    const prevBtn = document.querySelector(".hero-arrow--prev");
    const nextBtn = document.querySelector(".hero-arrow--next");

    if (!slider || !dots.length) return;

    let current = 0;
    let autoTimer = null;
    const total = dots.length;
    function goTo(index) {
      current = (index + total) % total;
      slider.style.transform = "translateX(-" + current * 100 + "%)";
      dots.forEach(function (dot, i) {
        dot.classList.toggle("is-active", i === current);
      });
    }

    function next() { goTo(current + 1); }
    function prev() { goTo(current - 1); }

    function startAuto() {
      stopAuto();
      autoTimer = setInterval(next, 5000);
    }

    function stopAuto() {
      if (autoTimer) {
        clearInterval(autoTimer);
        autoTimer = null;
      }
    }

    dots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goTo(i);
        startAuto();
      });
    });

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        prev();
        startAuto();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        next();
        startAuto();
      });
    }

    // 터치 스와이프
    let startX = 0;
    slider.addEventListener("touchstart", function (e) {
      startX = e.touches[0].clientX;
    }, { passive: true });

    slider.addEventListener("touchend", function (e) {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) next();
        else prev();
        startAuto();
      }
    }, { passive: true });

    startAuto();
  }

  /* ────────────────────────────────────────
     추천 과목 카드 렌더링 (홈페이지)
  ──────────────────────────────────────── */
  function initFeaturedCourses() {
    const container = document.getElementById("featuredCourses");
    if (!container || typeof COURSES === "undefined") return;

    // 각 feature 별 대표 과목 하나씩 (총 5개)
    const featureOrder = ["epa", "dashboard", "olap", "uiux", "report"];
    const featured = featureOrder.map(function (f) {
      return COURSES.find(function (c) { return c.feature.includes(f) && c.level === "lv1"; });
    }).filter(Boolean);

    container.innerHTML = featured.map(renderCourseCard).join("");
    bindCardLinks(container);
  }

  /* ────────────────────────────────────────
     신규 과목 (Lv.2) 렌더링
  ──────────────────────────────────────── */
  function initNewCourses() {
    const container = document.getElementById("newCourses");
    if (!container || typeof COURSES === "undefined") return;

    const lv2 = COURSES.filter(function (c) { return c.level === "lv2"; }).slice(0, 4);
    container.innerHTML = lv2.map(renderCourseCard).join("");
    bindCardLinks(container);
  }

  /* ────────────────────────────────────────
     업종별 카드 클릭
  ──────────────────────────────────────── */
  function initIndustryCards() {
    document.querySelectorAll(".industry-card[data-industry]").forEach(function (card) {
      card.addEventListener("click", function () {
        const val = this.dataset.industry;
        window.location.href = "course-list.html?category=industry&value=" + val;
      });
    });
  }

  /* ────────────────────────────────────────
     과목 카드 HTML 생성
  ──────────────────────────────────────── */
  function renderCourseCard(course) {
    const levelClass = course.level === "lv2" ? "level-badge--lv2" : "level-badge--lv1";
    const levelText = course.level === "lv2" ? "Lv.2 심화" : "Lv.1";

    return '<a href="course-detail.html?id=' + course.id + '" class="course-card" style="text-decoration:none;">' +
      '<div class="course-card__thumb">' +
        '<img src="' + course.thumbnail + '" alt="' + course.title + '" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
        '<div class="course-card__thumb-placeholder" style="display:none">' +
          svgPlaceholderIcon() +
        '</div>' +
        '<span class="course-card__level level-badge ' + levelClass + '">' + levelText + '</span>' +
      '</div>' +
      '<div class="course-card__body">' +
        '<span class="course-card__step">' + course.step + '</span>' +
        '<p class="course-card__title">' + course.title + '</p>' +
        '<p class="course-card__outcome">' + course.outcome + '</p>' +
        '<div class="course-card__meta">' +
          '<div class="course-card__info">' +
            '<span class="course-card__duration">' +
              '<svg width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><polyline points="12,7 12,12 15,15"/></svg>' +
              course.duration +
            '</span>' +
          '</div>' +
          '<span class="course-card__price">' + formatPrice(course.price) + '</span>' +
        '</div>' +
      '</div>' +
    '</a>';
  }

  function svgPlaceholderIcon() {
    return '<svg width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" style="color:#CBD5E1;">' +
      '<rect x="3" y="3" width="18" height="18" rx="2"/>' +
      '<path d="M3 9h18M9 21V9"/>' +
    '</svg>';
  }

  function formatPrice(price) {
    if (price === 0) return "무료";
    return price.toLocaleString("ko-KR") + "원";
  }

  function bindCardLinks(container) {
    // a 태그로 래핑되어 있어 추가 바인딩 불필요
  }

  /* ────────────────────────────────────────
     초기화
  ──────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", function () {
    initSlider();
    initFeaturedCourses();
    initNewCourses();
    initIndustryCards();
  });
})();
