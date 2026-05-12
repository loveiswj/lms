/* =========================================
   course-data.js — 비아이매트릭스 아카데미
   영상타이틀_20260512_수정.csv 기반
   ========================================= */

const COURSES = [

  /* ── [기초] 사용자 과정 · 데이터 조회 ── */
  {
    id: 1,
    product: "i-META View",
    report_title: "지점별 매출 실적 조회 - 기본",
    title: "원하는 항목만 끌어다 놓아 매출을 분석하세요",
    outcome: "보고싶은 항목을 끌어다 놓으면 데이터가 바로 조회돼요.",
    youtube: "https://youtu.be/9OozugKBd2Y?si=v_ZvLy8d388f9Anv",
    level: "basic",
    feature: ["query"],
    industry: ["retail"],
    difficulty: "입문",
    duration: "1분",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 2,
    product: "i-META View",
    report_title: "지점별 매출 실적 조회 - 활용",
    title: "데이터를 원하는 방식으로 활용하세요",
    outcome: "정렬·필터·계산 컬럼 추가까지 조회된 화면에서 바로 적용할 수 있어요.",
    youtube: null,
    level: "basic",
    feature: ["query"],
    industry: ["retail"],
    difficulty: "초급",
    duration: "4분",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 3,
    product: "i-META View",
    report_title: "상품별 피벗 매출 분석 - 기본",
    title: "상품 매출을 다양한 관점으로 분석하세요",
    outcome: "행과 열에 원하는 항목을 끌어다 놓으면 상품별·매장별 매출 실적이 교차표로 한눈에 보여요.",
    youtube: "https://youtu.be/F7WMNRP4_8I?si=daQO1hYWhXxwKhQ2",
    level: "basic",
    feature: ["query"],
    industry: ["retail"],
    difficulty: "초급",
    duration: "1분",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 4,
    product: "i-META View",
    report_title: "상품별 피벗 매출 분석 - 활용",
    title: "안 팔리는 상품, 원인까지 분석해보세요",
    outcome: "그룹핑·상세리스트 분석까지, 하나의 보고서에서 매출 원인을 추적할 수 있어요.",
    youtube: null,
    level: "basic",
    feature: ["query"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "3분",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 5,
    product: "i-META View",
    report_title: "기간별 매출 추이 현황 - 기본",
    title: "차트로 매출 흐름을 읽어보세요",
    outcome: "차트를 추가하고 유형을 바꾸는 것만으로 기간별·상품별 매출 추이가 시각화돼요.",
    youtube: "https://youtu.be/JQvScyETVy4?si=Dh-kcDYLjMrAszlf",
    level: "basic",
    feature: ["query"],
    industry: ["retail"],
    difficulty: "초급",
    duration: "1분",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 6,
    product: "i-META View",
    report_title: "기간별 매출 추이 현황 - 활용",
    title: "내 보고서에 맞는 차트를 구성하세요",
    outcome: "차트 유형·색상·조회 범위·계열을 자유롭게 바꿔 원하는 형태의 시각화를 만들 수 있어요.",
    youtube: null,
    level: "basic",
    feature: ["query"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "1분",
    thumbnail: "assets/images/thumb-olap.jpg"
  },

  /* ── [기초] 사용자 과정 · 엑셀 자동화 ── */
  {
    id: 7,
    product: "i-MATRIX",
    report_title: "매장별 매출 현황",
    title: "매일 반복하는 엑셀 업무를 줄여보세요",
    outcome: "빈 엑셀에 데이터를 연결하면 기간만 선택해도 최신 매장별 매출이 자동으로 채워져요.",
    youtube: "https://youtu.be/yfw-dPxx-ks?si=6T_77QgcoIv43ZxK",
    level: "basic",
    feature: ["excel"],
    industry: ["retail"],
    difficulty: "초급",
    duration: "6분",
    thumbnail: "assets/images/thumb-report.jpg"
  },
  {
    id: 8,
    product: "i-MATRIX",
    report_title: "상품별 매출 실적 현황",
    title: "피벗 분석 보고서를 자동화하세요",
    outcome: "데이터가 연동된 엑셀에 피벗테이블과 슬라이서를 추가하면 상품별 매출 분석 보고서가 완성돼요.",
    youtube: "https://youtu.be/qMYiUBNQ53U?si=nXoMCHxTEzW-YDSu",
    level: "basic",
    feature: ["excel"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "4분",
    thumbnail: "assets/images/thumb-report.jpg"
  },

  /* ── [응용] 실무 활용 과정 · 엑셀 자동화 ── */
  {
    id: 9,
    product: "i-AUD",
    report_title: "영업 실적 보고서",
    title: "엑셀 설계만으로 웹 보고서를 완성하세요",
    outcome: "엑셀로 화면을 설계하면 수식·레이아웃·차트가 그대로 웹으로 전환돼요.",
    youtube: "https://youtu.be/wKkwd6Z1qxo?si=kKKiYycu0UUtIIXy",
    level: "applied",
    feature: ["excel"],
    industry: ["retail"],
    difficulty: "초급",
    duration: "14분",
    thumbnail: "assets/images/thumb-report.jpg"
  },
  {
    id: 10,
    product: "i-AUD",
    report_title: "상품별 매출 실적",
    title: "복잡한 상품 분석도 하나의 화면으로 구성하세요",
    outcome: "다양한 분석 관점을 담은 엑셀 보고서를 수식 그대로 웹 화면으로 전환할 수 있어요.",
    youtube: "https://youtu.be/9hmLHN5DHG8?si=JMVLDQ5wgqEpN_2N",
    level: "applied",
    feature: ["excel"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "13분",
    thumbnail: "assets/images/thumb-report.jpg"
  },

  /* ── [응용] 실무 활용 과정 · 엑셀 자동화 + 시각화 분석 ── */
  {
    id: 11,
    product: "i-AUD",
    report_title: "전사 매출 현황",
    title: "여러 시트를 하나의 대시보드로 완성하세요",
    outcome: "엑셀 시트별 이미지·표·차트를 하나의 현황판으로 구성할 수 있어요.",
    youtube: "https://youtu.be/fJ_gwH8m8CQ?si=vsetEGKbsMvqZBou",
    level: "applied",
    feature: ["excel", "visual"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "16분",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 12,
    product: "i-MATRIX",
    report_title: "고객 등급별 매출 추이",
    title: "고객 등급별 매출 흐름을 한눈에 확인하세요",
    outcome: "기존 엑셀 양식에 조회 기능을 연결하면 선택한 기간의 데이터만 자동으로 표시돼요.",
    youtube: "https://youtu.be/BOOttYyVJyY?si=pYRm6e2aw9OaKbaE",
    level: "applied",
    feature: ["excel", "visual"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "7분",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 13,
    product: "i-MATRIX",
    report_title: "주요 점포 매출 현황",
    title: "복잡한 수식도 그대로 활용하세요",
    outcome: "화면 양식을 먼저 설계하면 데이터가 자동으로 가공되어 원하는 형태로 채워져요.",
    youtube: "https://youtu.be/-mByUDITNfA?si=VmMIwpsiqCqkISUP",
    level: "applied",
    feature: ["excel", "visual"],
    industry: ["retail"],
    difficulty: "고급",
    duration: "10분",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 14,
    product: "i-AUD",
    report_title: "고객별 매출 현황 - 기본",
    title: "회원 특성별 매출을 시각화하세요",
    outcome: "회원카드·성별·결혼여부·연령대·등급 차트를 엑셀로 설계하면 그대로 웹 대시보드로 전환돼요.",
    youtube: "https://youtu.be/7LuAmSWLXg0?si=Yd4mvEF_khL3ztY6",
    level: "applied",
    feature: ["excel", "visual"],
    industry: ["retail"],
    difficulty: "초급",
    duration: "7분",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 15,
    product: "i-AUD",
    report_title: "고객별 매출 현황 - 활용",
    title: "대시보드에 차트 클릭으로 상세 정보까지 연결하세요",
    outcome: "동작 설정으로 차트와 상세 데이터가 연결된 인터랙티브 보고서가 완성돼요.",
    youtube: "https://youtu.be/tO-TJAnV2zc?si=SNLPCcgwGkrj0eAd",
    level: "applied",
    feature: ["excel", "visual"],
    industry: ["retail"],
    difficulty: "중상급",
    duration: "4분",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },

  /* ── [응용] 실무 활용 과정 · 데이터 저장 ── */
  {
    id: 16,
    product: "i-AUD",
    report_title: "고객 정보 관리",
    title: "고객 관리 업무를 위한 관리 화면도 직접 만들 수 있습니다",
    outcome: "데이터 저장 모듈만 연결하면 조회·입력·수정·저장 기능까지 한 번에 구성돼요.",
    youtube: "https://youtu.be/lOLbbgINspw?si=t4flwXt_xpa7AEnN",
    level: "applied",
    feature: ["data"],
    industry: ["retail"],
    difficulty: "초급",
    duration: "6분",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },

  /* ── [심화] 개발자 과정 · 데이터 저장 ── */
  {
    id: 17,
    product: "i-AUD",
    report_title: "고객별 매출 실적",
    title: "고객과 매출 정보를 하나로 연결하세요",
    outcome: "고객 정보와 매출 정보를 하나의 화면에서 조회·수정·저장할 수 있어요.",
    youtube: "https://youtu.be/jJKDg2S3CGs?si=mIvN0ICSLraCYCrO",
    level: "advanced",
    feature: ["data"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "11분",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },
  {
    id: 18,
    product: "i-AUD",
    report_title: "인사 관리",
    title: "직원 관리 화면도 손쉽게 구현하세요",
    outcome: "직원정보를 입력·수정하는 인사관리 화면을 만들 수 있어요.",
    youtube: "https://youtu.be/1zeSPWWkAqg?si=v9FSil-qIjRo9cAE",
    level: "advanced",
    feature: ["data"],
    industry: ["retail"],
    difficulty: "중상급",
    duration: "12분",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },

  /* ── [응용] 실무 활용 과정 · 엑셀 자동화 + 데이터 저장 ── */
  {
    id: 19,
    product: "i-AUD",
    report_title: "매출 계획 입력",
    title: "엑셀 장표 그대로 웹에서 활용하세요",
    outcome: "사용하던 엑셀파일 그대로 웹에서 입력하고 저장할 수 있어요.",
    youtube: "https://youtu.be/wJskWphv5zo?si=P6lkqFW53qjoZZVi",
    level: "applied",
    feature: ["excel", "data"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "14분",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },
  {
    id: 20,
    product: "i-MATRIX",
    report_title: "매장별 매출 계획 관리",
    title: "매출 계획 데이터를 직접 수정하고 저장하세요",
    outcome: "DB 연동 시트를 자동 생성하고 저장·조회 기능까지 연결할 수 있어요.",
    youtube: "https://youtu.be/MgPC5eIwEjw?si=8Tq5ybI7GToTfvFL",
    level: "applied",
    feature: ["excel", "data"],
    industry: ["retail"],
    difficulty: "중상급",
    duration: "9분",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },

  /* ── [전문] 관리자 과정 · 시스템 운영 ── */
  {
    id: 21,
    product: "i-META",
    report_title: "i-META 제작하기",
    title: "사용자가 원하는 데이터를 쉽게 찾고 활용하도록 지원하세요",
    outcome: "데이터를 논리 구조로 설계해 누구나 쉽게 분석 데이터를 가져올 수 있는 i-META 파일을 만들 수 있어요.",
    youtube: "https://youtu.be/3GBdauqfJG4?si=oDuz6btLw0Iq9Zjb",
    level: "expert",
    feature: ["system"],
    industry: ["retail"],
    difficulty: "중급",
    duration: "4분",
    thumbnail: "assets/images/thumb-olap.jpg"
  }

];

/* ── 챕터 타임스탬프 (임시 샘플) ── */
var CHAPTERS = {
  1:  [ {time:0,  label:"소개"}, {time:12, label:"항목 끌어다 놓기"}, {time:40, label:"결과 확인"} ],
  2:  [ {time:0,  label:"소개"}, {time:30, label:"정렬·필터 적용"}, {time:120, label:"계산 컬럼 추가"}, {time:200, label:"마무리"} ],
  3:  [ {time:0,  label:"소개"}, {time:15, label:"행·열 배치"}, {time:45, label:"교차표 완성"} ],
  4:  [ {time:0,  label:"소개"}, {time:30, label:"그룹핑 설정"}, {time:120, label:"상세리스트 분석"}, {time:160, label:"완성"} ],
  5:  [ {time:0,  label:"소개"}, {time:12, label:"차트 추가"}, {time:40, label:"유형 변경"}, {time:55, label:"완성"} ],
  6:  [ {time:0,  label:"소개"}, {time:15, label:"차트 색상·범위 설정"}, {time:45, label:"계열 구성"} ],
  7:  [ {time:0,  label:"소개"}, {time:40, label:"엑셀에 데이터 연결"}, {time:150, label:"기간 선택 설정"}, {time:270, label:"자동화 확인"}, {time:340, label:"완성"} ],
  8:  [ {time:0,  label:"소개"}, {time:40, label:"피벗테이블 추가"}, {time:130, label:"슬라이서 연결"}, {time:200, label:"완성"} ],
  9:  [ {time:0,  label:"소개"}, {time:60, label:"엑셀 화면 설계"}, {time:240, label:"데이터 연결"}, {time:480, label:"수식 설정"}, {time:660, label:"웹 변환"}, {time:800, label:"결과 확인"} ],
  10: [ {time:0,  label:"소개"}, {time:60, label:"상품 분석 화면 설계"}, {time:300, label:"다양한 관점 설정"}, {time:600, label:"웹 전환"}, {time:740, label:"완성"} ],
  11: [ {time:0,  label:"소개"}, {time:60, label:"시트별 구성"}, {time:240, label:"이미지·표 배치"}, {time:500, label:"차트 구성"}, {time:760, label:"현황판 완성"}, {time:920, label:"결과 확인"} ],
  12: [ {time:0,  label:"소개"}, {time:60, label:"기존 양식 연결"}, {time:240, label:"기간 선택 설정"}, {time:370, label:"완성"} ],
  13: [ {time:0,  label:"소개"}, {time:80, label:"화면 양식 설계"}, {time:280, label:"수식 설정"}, {time:460, label:"데이터 자동 채우기"}, {time:560, label:"완성"} ],
  14: [ {time:0,  label:"소개"}, {time:60, label:"회원 차트 설계"}, {time:220, label:"성별·연령 분석"}, {time:360, label:"웹 대시보드 전환"}, {time:400, label:"완성"} ],
  15: [ {time:0,  label:"소개"}, {time:30, label:"동작 설정"}, {time:140, label:"상세 데이터 연결"}, {time:210, label:"완성"} ],
  16: [ {time:0,  label:"소개"}, {time:60, label:"데이터 저장 모듈 연결"}, {time:220, label:"입력·수정 설정"}, {time:330, label:"완성"} ],
  17: [ {time:0,  label:"소개"}, {time:80, label:"고객 정보 조회"}, {time:280, label:"매출 데이터 연결"}, {time:500, label:"수정·저장 설정"}, {time:630, label:"완성"} ],
  18: [ {time:0,  label:"소개"}, {time:80, label:"직원 정보 입력"}, {time:340, label:"수정 기능"}, {time:520, label:"저장 설정"}, {time:680, label:"완성"} ],
  19: [ {time:0,  label:"소개"}, {time:80, label:"엑셀 파일 불러오기"}, {time:280, label:"웹 입력 설정"}, {time:580, label:"저장 연결"}, {time:780, label:"완성"} ],
  20: [ {time:0,  label:"소개"}, {time:60, label:"DB 연동 시트 생성"}, {time:230, label:"저장 기능 연결"}, {time:410, label:"조회·저장 확인"}, {time:520, label:"완성"} ],
  21: [ {time:0,  label:"소개"}, {time:50, label:"i-META 구조 이해"}, {time:160, label:"논리 구조 설계"}, {time:220, label:"완성"} ]
};

/* ── 라벨 매핑 ── */
var LEVEL_LABELS = { basic: "기초", applied: "응용", advanced: "심화", expert: "전문" };
var INDUSTRY_LABELS = { retail: "소매·소비재", finance: "금융 서비스", public: "공공 부문", manufacturing: "제조업" };
var FEATURE_LABELS = { query: "데이터 조회", excel: "엑셀 자동화", visual: "시각화 분석", data: "데이터 저장", system: "시스템 운영" };

/* ── 과목 단건 조회 ── */
function getCourseById(id) {
  return COURSES.find(function(c) { return c.id === Number(id); }) || null;
}

/* ── YouTube URL에서 Video ID 추출 ── */
function extractYoutubeId(url) {
  if (!url) return null;
  var m = url.match(/youtu\.be\/([^?&\s]+)/);
  if (m) return m[1];
  m = url.match(/[?&]v=([^?&\s]+)/);
  if (m) return m[1];
  return null;
}

/* ── 관련 과목 (같은 기능, 현재 제외) ── */
function getRelatedCourses(course, limit) {
  limit = limit || 3;
  return COURSES.filter(function(c) {
    return c.id !== course.id &&
      c.feature.some(function(f) { return course.feature.indexOf(f) !== -1; });
  }).slice(0, limit);
}
