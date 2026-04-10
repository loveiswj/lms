/* =========================================
   course-data.js — AUD Academy LMS
   전체 과목 데이터
   ========================================= */

const COURSES = [
  /* ── 유통 / 영업 ── */
  {
    id: 1,
    title: "각 지점에서 보내온 엑셀 파일, 이제 직접 안 모아도 됩니다",
    report_title: "지점별 엑셀 파일 한 번에 취합하는 법",
    industry: ["retail"],
    role: ["analyst", "finance"],
    feature: ["epa"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "각 지점 엑셀 파일을 하나하나 복사하지 않고 한 번에 취합할 수 있어요",
    step: "1단계 · 데이터 취합",
    thumbnail: "assets/images/thumb-epa.jpg"
  },
  {
    id: 2,
    title: "엑셀 피벗 없이 매장 실적 한눈에 보기",
    report_title: "매장별 실적 현황판 구성하기",
    industry: ["retail"],
    role: ["analyst"],
    feature: ["dashboard"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "피벗 없이 매장 실적을 자동 업데이트되는 화면으로 한눈에 볼 수 있어요",
    step: "2단계 · 현황 시각화",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 3,
    title: "A매장 매출이 빠진 이유, 클릭 세 번이면 나옵니다",
    report_title: "매장 매출 원인 분석 파고들기",
    industry: ["retail"],
    role: ["analyst"],
    feature: ["olap"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "클릭 세 번으로 매출 하락 원인을 상품·시간대·지역별로 추적할 수 있어요",
    step: "3단계 · 원인 분석",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 4,
    title: "재고 부족 확인하고 다른 시스템 안 켜도 됩니다",
    report_title: "재고 현황 직접 입력·수정하기",
    industry: ["retail"],
    role: ["analyst"],
    feature: ["uiux"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "재고 데이터를 화면에서 직접 수정하고 저장할 수 있어요",
    step: "4단계 · 데이터 입력",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },
  {
    id: 5,
    title: "매주 주간 보고서, 이제 혼자 만들어집니다",
    report_title: "주간 판매 보고서 자동 출력하기",
    industry: ["retail"],
    role: ["finance"],
    feature: ["report"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "매주 버튼 한 번으로 정해진 양식의 주간 보고서를 자동 생성할 수 있어요",
    step: "5단계 · 보고서 출력",
    thumbnail: "assets/images/thumb-report.jpg"
  },

  /* ── 제조 / 생산 ── */
  {
    id: 6,
    title: "현장 수기 장부, 사무실 와서 다시 타이핑 안 해도 됩니다",
    report_title: "현장 데이터 모바일 입력 시스템 만들기",
    industry: ["manufacturing"],
    role: ["developer"],
    feature: ["epa"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "현장에서 입력한 데이터가 사무실 시스템에 바로 반영돼요",
    step: "1단계 · 데이터 취합",
    thumbnail: "assets/images/thumb-epa.jpg"
  },
  {
    id: 7,
    title: "현장 안 가도 됩니다 — 라인 가동 현황 실시간으로 보기",
    report_title: "생산 라인 실시간 현황판 구성하기",
    industry: ["manufacturing"],
    role: ["analyst"],
    feature: ["dashboard"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "현장에 가지 않아도 라인별 가동 현황을 실시간으로 확인할 수 있어요",
    step: "2단계 · 현황 시각화",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 8,
    title: "불량 터졌을 때, 원인 찾는 데 하루 걸리던 걸 10분으로",
    report_title: "불량 원인 드릴다운 분석하기",
    industry: ["manufacturing"],
    role: ["analyst"],
    feature: ["olap"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "불량 발생 시 라인·설비·작업자별로 원인을 10분 안에 추적할 수 있어요",
    step: "3단계 · 원인 분석",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 9,
    title: "구두로 지시하고 나면 끝? 이제 점검 완료까지 시스템으로 관리합니다",
    report_title: "설비 점검 지시·완료 관리 화면 만들기",
    industry: ["manufacturing"],
    role: ["developer"],
    feature: ["uiux"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "설비 점검 지시부터 완료까지 시스템으로 추적 관리할 수 있어요",
    step: "4단계 · 데이터 입력",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },
  {
    id: 10,
    title: "월말마다 생산·불량 데이터 취합, 이제 안 해도 됩니다",
    report_title: "월간 생산 실적 보고서 자동 출력하기",
    industry: ["manufacturing"],
    role: ["finance"],
    feature: ["report"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "월말 생산·불량 보고서를 버튼 하나로 자동 완성할 수 있어요",
    step: "5단계 · 보고서 출력",
    thumbnail: "assets/images/thumb-report.jpg"
  },

  /* ── 금융 / 기획 ── */
  {
    id: 11,
    title: "매일 한국은행 들어가서 데이터 긁어오는 작업, 이제 자동으로 됩니다",
    report_title: "외부 데이터 자동 수집 시스템 구성하기",
    industry: ["finance_industry"],
    role: ["developer"],
    feature: ["epa"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "외부 사이트 데이터를 자동으로 수집해 시스템에 올릴 수 있어요",
    step: "1단계 · 데이터 취합",
    thumbnail: "assets/images/thumb-epa.jpg"
  },
  {
    id: 12,
    title: '"KPI 달성률 어때?" — 이제 엑셀 안 열고 바로 대답합니다',
    report_title: "KPI 실시간 달성률 현황판 만들기",
    industry: ["finance_industry"],
    role: ["leader"],
    feature: ["dashboard"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "KPI 달성률을 실시간으로 확인할 수 있는 임원용 현황판을 만들 수 있어요",
    step: "2단계 · 현황 시각화",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 13,
    title: "금리 바뀔 때마다 엑셀 수식 고치던 거, 이제 조건만 바꾸면 됩니다",
    report_title: "금리 변동 시나리오 분석 화면 만들기",
    industry: ["finance_industry"],
    role: ["finance"],
    feature: ["olap"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "금리 변동 시 수식 없이 조건만 바꿔 시나리오를 바로 분석할 수 있어요",
    step: "3단계 · 원인 분석",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 14,
    title: "목표치 하나 바꾸는 데 IT 기다리지 않아도 됩니다",
    report_title: "목표·예산 데이터 직접 수정하기",
    industry: ["finance_industry"],
    role: ["finance"],
    feature: ["uiux"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "IT 요청 없이 목표치와 예산 데이터를 직접 수정하고 반영할 수 있어요",
    step: "4단계 · 데이터 입력",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },
  {
    id: 15,
    title: "폰트·표 양식 하나하나 맞추던 공시 보고서, 이제 버튼 하나면 됩니다",
    report_title: "정규 공시 보고서 자동 생성하기",
    industry: ["finance_industry"],
    role: ["finance"],
    feature: ["report"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "공시 양식 그대로 보고서를 버튼 하나로 자동 생성할 수 있어요",
    step: "5단계 · 보고서 출력",
    thumbnail: "assets/images/thumb-report.jpg"
  },

  /* ── 공공 / 인사 ── */
  {
    id: 16,
    title: "양식 제각각인 부서 예산 파일, 셀 복구 없이 한 번에 모읍니다",
    report_title: "부서별 예산 파일 통합 취합하기",
    industry: ["public"],
    role: ["finance"],
    feature: ["epa"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "양식이 달라도 부서 예산 파일을 오류 없이 한 번에 취합할 수 있어요",
    step: "1단계 · 데이터 취합",
    thumbnail: "assets/images/thumb-epa.jpg"
  },
  {
    id: 17,
    title: "인사 시스템 조건 검색 안 해도 됩니다 — 근태 현황 한 화면으로",
    report_title: "직원 근태 현황 대시보드 만들기",
    industry: ["public"],
    role: ["analyst"],
    feature: ["dashboard"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "조건 검색 없이 전 직원 근태 현황을 한 화면에서 확인할 수 있어요",
    step: "2단계 · 현황 시각화",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 18,
    title: "따로 노는 근태·인건비 데이터, 연결해서 원인까지 한 번에 봅니다",
    report_title: "근태·인건비 데이터 연계 분석하기",
    industry: ["public"],
    role: ["analyst"],
    feature: ["olap"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "근태와 인건비 데이터를 연결해 비용 이상 원인을 한 번에 추적할 수 있어요",
    step: "3단계 · 원인 분석",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 19,
    title: "수백 명 직원 정보, 하나하나 수정 안 해도 됩니다",
    report_title: "직원 정보 일괄 수정 화면 구성하기",
    industry: ["public"],
    role: ["developer"],
    feature: ["uiux"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "수백 명 직원 정보를 한 화면에서 일괄 수정하고 저장할 수 있어요",
    step: "4단계 · 데이터 입력",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },
  {
    id: 20,
    title: "감사 통보 받아도 당황하지 않습니다 — 보고서 버튼 하나로 완성",
    report_title: "감사 대응 보고서 즉시 출력하기",
    industry: ["public"],
    role: ["finance"],
    feature: ["report"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "감사 통보 즉시 필요한 보고서를 버튼 하나로 완성할 수 있어요",
    step: "5단계 · 보고서 출력",
    thumbnail: "assets/images/thumb-report.jpg"
  },

  /* ── 마케팅 / CRM ── */
  {
    id: 21,
    title: "매일 아침 매체별 엑셀 취합, 이제 드래그 앤 드롭으로 끝납니다",
    report_title: "매체별 광고 데이터 자동 취합하기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["marketing"],
    feature: ["epa"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "매체별 엑셀 파일을 드래그 앤 드롭으로 한 번에 취합할 수 있어요",
    step: "1단계 · 데이터 취합",
    thumbnail: "assets/images/thumb-epa.jpg"
  },
  {
    id: 22,
    title: "SNS·검색광고 성과, 이제 한 화면에서 실시간으로 비교합니다",
    report_title: "광고 채널 통합 성과 현황판 만들기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["marketing"],
    feature: ["dashboard"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "SNS·검색광고 성과를 채널별로 실시간 비교할 수 있어요",
    step: "2단계 · 현황 시각화",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 23,
    title: '"왜 20대 여성이 빠졌지?" 연령·채널별로 원인 바로 찾습니다',
    report_title: "고객 세그먼트별 이탈 원인 분석하기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["marketing"],
    feature: ["olap"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "연령·채널·상품별로 고객 이탈 원인을 클릭으로 추적할 수 있어요",
    step: "3단계 · 원인 분석",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 24,
    title: "분석 결과 나오면 광고 예산, 화면에서 바로 수정합니다",
    report_title: "광고 예산 직접 수정·조정하기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["marketing"],
    feature: ["uiux"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "분석 결과를 보면서 광고 예산을 화면에서 바로 수정할 수 있어요",
    step: "4단계 · 데이터 입력",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },
  {
    id: 25,
    title: "매주 월요일 캠페인 성과 PPT 다시 그리던 거, 이제 자동으로 됩니다",
    report_title: "캠페인 성과 보고서 자동 생성하기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["marketing"],
    feature: ["report"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "매주 캠페인 성과 보고서를 자동으로 생성할 수 있어요",
    step: "5단계 · 보고서 출력",
    thumbnail: "assets/images/thumb-report.jpg"
  },

  /* ── 구매 / SCM ── */
  {
    id: 26,
    title: "수십 개 협력사 엑셀, 하나하나 열지 않아도 됩니다",
    report_title: "협력사 데이터 일괄 취합하기",
    industry: ["manufacturing"],
    role: ["analyst"],
    feature: ["epa"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "수십 개 협력사 엑셀 파일을 한 번에 취합해 비교할 수 있어요",
    step: "1단계 · 데이터 취합",
    thumbnail: "assets/images/thumb-epa.jpg"
  },
  {
    id: 27,
    title: "협력사 납기 준수율, 수십 개 업체 한 화면에서 한눈에 봅니다",
    report_title: "협력사 납기 현황 모니터링 화면 만들기",
    industry: ["manufacturing"],
    role: ["analyst"],
    feature: ["dashboard"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "수십 개 협력사 납기 준수율을 한 화면에서 한눈에 확인할 수 있어요",
    step: "2단계 · 현황 시각화",
    thumbnail: "assets/images/thumb-dashboard.jpg"
  },
  {
    id: 28,
    title: "원자재 단가 오를 때 우리 원가 얼마나 올라가는지 바로 계산됩니다",
    report_title: "원자재 단가 변동 원가 영향 분석하기",
    industry: ["manufacturing"],
    role: ["finance"],
    feature: ["olap"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "원자재 단가 변동 시 제품별 원가 영향을 즉시 시뮬레이션할 수 있어요",
    step: "3단계 · 원인 분석",
    thumbnail: "assets/images/thumb-olap.jpg"
  },
  {
    id: 29,
    title: "협력사 단가 바뀔 때 ERP 들어가서 하나하나 수정 안 해도 됩니다",
    report_title: "협력사 단가 일괄 수정 화면 구성하기",
    industry: ["manufacturing"],
    role: ["developer"],
    feature: ["uiux"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "ERP 없이 협력사 단가를 화면에서 일괄 수정하고 반영할 수 있어요",
    step: "4단계 · 데이터 입력",
    thumbnail: "assets/images/thumb-uiux.jpg"
  },
  {
    id: 30,
    title: "협력사 평가 보고서, 업체별로 따로 만들지 않아도 됩니다",
    report_title: "협력사별 평가 보고서 자동 출력하기",
    industry: ["manufacturing"],
    role: ["finance"],
    feature: ["report"],
    level: "lv1",
    duration: "3시간",
    price: 90000,
    outcome: "협력사별 평가 보고서를 선택 후 버튼 하나로 자동 생성할 수 있어요",
    step: "5단계 · 보고서 출력",
    thumbnail: "assets/images/thumb-report.jpg"
  },

  /* ── 심화 과정 Lv.2 ── */
  {
    id: 31,
    title: "엑셀 컬럼이 제각각이어도 DB에 깔끔하게 올라가게 만듭니다",
    report_title: "비정형 엑셀 → DB 자동 정규화 구현하기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["developer"],
    feature: ["epa"],
    level: "lv2",
    duration: "6시간",
    price: 220000,
    outcome: "어떤 형태의 엑셀이 들어와도 DB에 깔끔하게 정규화해 올릴 수 있어요",
    step: "심화 · 데이터 취합",
    thumbnail: "assets/images/thumb-lv2-epa.jpg"
  },
  {
    id: 32,
    title: "조회만 되는 화면 말고, 수정하고 저장되는 진짜 업무 시스템 만들기",
    report_title: "CRUD 완성형 업무 시스템 구현하기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["developer"],
    feature: ["uiux"],
    level: "lv2",
    duration: "6시간",
    price: 220000,
    outcome: "조회·입력·수정·삭제가 모두 되는 완성형 업무 시스템을 만들 수 있어요",
    step: "심화 · 데이터 입력",
    thumbnail: "assets/images/thumb-lv2-uiux.jpg"
  },
  {
    id: 33,
    title: "템플릿 없이 빈 화면에서 내 업무에 딱 맞는 대시보드 만들기",
    report_title: "커스텀 대시보드 처음부터 구성하기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["developer"],
    feature: ["dashboard"],
    level: "lv2",
    duration: "6시간",
    price: 220000,
    outcome: "빈 화면에서 업무에 최적화된 대시보드를 완전히 자유롭게 구성할 수 있어요",
    step: "심화 · 현황 시각화",
    thumbnail: "assets/images/thumb-lv2-dashboard.jpg"
  },
  {
    id: 34,
    title: "어떤 복잡한 결재 양식도 시스템으로 그대로 구현합니다",
    report_title: "전자결재 양식 시스템 구현하기",
    industry: ["retail", "manufacturing", "finance_industry", "public"],
    role: ["developer"],
    feature: ["report"],
    level: "lv2",
    duration: "6시간",
    price: 220000,
    outcome: "복잡한 결재 양식도 시스템으로 구현해 자동 출력·관리할 수 있어요",
    step: "심화 · 보고서 출력",
    thumbnail: "assets/images/thumb-lv2-report.jpg"
  }
];

/* ── 라벨 매핑 ── */
const INDUSTRY_LABELS = {
  retail:           "소매·소비재",
  manufacturing:    "제조업",
  finance_industry: "금융 서비스",
  public:           "공공 부문"
};

const ROLE_LABELS = {
  analyst:   "현업 분석가",
  developer: "개발자",
  finance:   "재무·기획 담당자",
  leader:    "비즈니스 리더",
  marketing: "마케팅 담당자",
  sales:     "영업·매출 관리자"
};

const FEATURE_LABELS = {
  epa:       "엑셀을 그대로 시스템으로",
  dashboard: "실시간 현황판 만들기",
  olap:      "데이터 파고들어 원인 찾기",
  uiux:      "화면에서 직접 입력·수정하기",
  report:    "보고서 자동 출력하기"
};

const LEVEL_LABELS = {
  lv1: "Lv.1 기초·실무",
  lv2: "Lv.2 심화"
};

/* ── 가격 포맷 ── */
function formatPrice(price) {
  if (price === 0) return "무료";
  return price.toLocaleString("ko-KR") + "원";
}

/* ── 과목 단건 조회 ── */
function getCourseById(id) {
  return COURSES.find(c => c.id === Number(id)) || null;
}

/* ── 관련 과목 조회 (같은 업종, 현재 과목 제외) ── */
function getRelatedCourses(course, limit = 3) {
  return COURSES
    .filter(c => c.id !== course.id && c.industry.some(i => course.industry.includes(i)))
    .slice(0, limit);
}

/* =========================================
   YouTube 영상 데이터
   ========================================= */
const VIDEOS = {
  'xfjBQhEq_ns': {
    title: "고객 등급별 매출 현황",
    chapters: [
      { time: 0,   label: "완성 화면 미리보기" },
      { time: 80,  label: "데이터 소스 연결하기" },
      { time: 190, label: "고객 등급 필터 설정" },
      { time: 330, label: "매출 차트 구성하기" },
      { time: 480, label: "대시보드 완성" }
    ]
  },
  'mcQouFOabOs': {
    title: "주요 점포별 매출 실적현황",
    chapters: [
      { time: 0,   label: "완성 화면 미리보기" },
      { time: 55,  label: "점포 데이터 연결" },
      { time: 160, label: "실적 현황 차트" },
      { time: 300, label: "조건 필터 설정" },
      { time: 430, label: "완성 및 정리" }
    ]
  },
  '3GBdauqfJG4': {
    title: "i-META 제작하기",
    chapters: [
      { time: 0,   label: "소개 및 미리보기" },
      { time: 60,  label: "프로젝트 기본 설정" },
      { time: 180, label: "화면 구성하기" },
      { time: 330, label: "데이터 연결 완성" },
      { time: 480, label: "최종 완성" }
    ]
  },
  'x9FVyu5ORm8': {
    title: "상품별 월별 추이 분석 화면 만들기",
    chapters: [
      { time: 0,   label: "완성 화면 미리보기" },
      { time: 90,  label: "상품 데이터 연결" },
      { time: 210, label: "월별 추이 설정" },
      { time: 360, label: "드릴다운 분석 구성" },
      { time: 510, label: "완성 및 활용법" }
    ]
  }
};

/* ── 과목별 YouTube 영상 매핑 ── */
function getCourseVideoId(course) {
  if (course.feature[0] === 'olap') return 'x9FVyu5ORm8';
  if (course.feature[0] === 'dashboard' && course.industry.includes('retail')) return 'mcQouFOabOs';
  if (course.feature[0] === 'dashboard') return 'xfjBQhEq_ns';
  return '3GBdauqfJG4';
}

function getCourseVideo(course) {
  var id = getCourseVideoId(course);
  return Object.assign({ videoId: id }, VIDEOS[id]);
}

/* ── 다음 단계 과목 조회 (같은 업종 다음 feature 순서) ── */
const FEATURE_ORDER = ["epa", "dashboard", "olap", "uiux", "report"];

function getNextCourses(course, limit = 3) {
  const featureIdx = FEATURE_ORDER.indexOf(course.feature[0]);
  if (featureIdx === -1) return [];

  return COURSES
    .filter(c =>
      c.id !== course.id &&
      c.level === course.level &&
      c.industry.some(i => course.industry.includes(i)) &&
      FEATURE_ORDER.indexOf(c.feature[0]) > featureIdx
    )
    .slice(0, limit);
}
