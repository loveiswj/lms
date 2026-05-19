/* =========================================
   course-data.js — 비아이매트릭스 아카데미
   영상타임라인_최종.csv 기반
   ========================================= */

const COURSES = [

  /* ── [기초] 사용자 과정 · 데이터 조회 ── */
  {
    id: 1,
    product: "i-META View",
    report_title: "직원별 매출 실적(List) - 기본",
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
    report_title: "직원별 매출 실적(List) - 응용",
    title: "데이터를 원하는 방식으로 활용하세요",
    outcome: "정렬·필터·계산 컬럼 추가까지 조회된 화면에서 바로 적용할 수 있어요.",
    youtube: "https://www.youtube.com/watch?v=yYuw4njyU-o",
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
    report_title: "상품별 매출 분석(CrossTab) - 기본",
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
    report_title: "상품별 매출 분석(CrossTab) - 응용",
    title: "안 팔리는 상품, 원인까지 분석해보세요",
    outcome: "그룹핑·상세리스트 분석까지, 하나의 보고서에서 매출 원인을 추적할 수 있어요.",
    youtube: "https://www.youtube.com/watch?v=7WCNuL_SPSs",
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
    report_title: "기간별 매출 추이 현황(Chart) - 기본",
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
    report_title: "기간별 매출 추이 현황(Chart) - 응용",
    title: "내 보고서에 맞는 차트를 구성하세요",
    outcome: "차트 유형·색상·조회 범위·계열을 자유롭게 바꿔 원하는 형태의 시각화를 만들 수 있어요.",
    youtube: "https://www.youtube.com/watch?v=64dfVn6VirQ",
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
    report_title: "양식 설정 보고서",
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
    report_title: "상품별 실적",
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
    report_title: "매출 현황",
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
    report_title: "주차 상품코드별 매출 실적 현황",
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
    report_title: "고객별 매출 현황(기본)",
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
    report_title: "고객별 매출 현황(응용)",
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
    report_title: "i-META 정의하기",
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

/* ── 챕터 타임스탬프 ── */
var CHAPTERS = {
  1:  [
    {time:0,   label:"소개"},
    {time:16,  label:"데이터 가져오기"},
    {time:44,  label:"조회 결과 확인"}
  ],
  2:  [
    {time:0,   label:"소개"},
    {time:8,   label:"데이터 정렬"},
    {time:15,  label:"데이터 필터링"},
    {time:39,  label:"소계, 이합계 표시"},
    {time:90,  label:"필드 색상 변경"},
    {time:100, label:"데이터 단위 설정"},
    {time:117, label:"계산필드 추가"}
  ],
  3:  [
    {time:0,  label:"소개"},
    {time:6,  label:"데이터 가져오기"},
    {time:41, label:"조회 결과 확인"},
    {time:44, label:"필드 위치 변경"}
  ],
  4:  [
    {time:0,   label:"소개"},
    {time:5,   label:"축 변경(행/열)"},
    {time:13,  label:"데이터 Drill Up/Drill Down"},
    {time:24,  label:"그룹 선택 변경"},
    {time:44,  label:"데이터 그룹 설정"},
    {time:107, label:"데이터 필터링"},
    {time:124, label:"행 확장/축소"},
    {time:138, label:"다중 값 분석"},
    {time:150, label:"원시 데이터 조회"}
  ],
  5:  [
    {time:0,  label:"소개"},
    {time:7,  label:"차트 활성화"},
    {time:10, label:"차트 유형 변경"},
    {time:17, label:"데이터 가져오기"}
  ],
  6:  [
    {time:0,  label:"소개"},
    {time:10, label:"차트 유형 및 색상 변경"},
    {time:28, label:"차트로 표시할 영역 선택"},
    {time:35, label:"차트 범례 활성화/비활성화"}
  ],
  7:  [
    {time:0,   label:"목표화면 생성"},
    {time:52,  label:"i-MATRIX Designer 실행"},
    {time:92,  label:"데이터 가져오기"},
    {time:181, label:"데이터 조회"},
    {time:195, label:"계산필드 추가"},
    {time:215, label:"색상 설정"},
    {time:330, label:"보고서 저장"}
  ],
  8:  [
    {time:0,   label:"목표화면 생성"},
    {time:42,  label:"i-MATRIX 메뉴 활성화"},
    {time:55,  label:"데이터 가져오기"},
    {time:116, label:"피벗 테이블 설정"},
    {time:149, label:"슬라이서 삽입"},
    {time:183, label:"원시 데이터 조회"},
    {time:191, label:"보고서 저장"}
  ],
  9:  [
    {time:0,   label:"목표화면 생성"},
    {time:29,  label:"실습용 양식파일 다운로드"},
    {time:53,  label:"변수 정의"},
    {time:102, label:"데이터 표시항목 생성"},
    {time:123, label:"데이터 집계"},
    {time:340, label:"양식 설정"},
    {time:391, label:"데이터 집계"},
    {time:497, label:"차트 설정"},
    {time:515, label:"템플릿 보고서 저장 및 편집"},
    {time:552, label:"양식파일 업로드"},
    {time:576, label:"양식 디자인 실행"},
    {time:584, label:"데이터 가져오기"},
    {time:708, label:"양식 디자인 저장 및 결과 조회"},
    {time:727, label:"조회 버튼 동작 설정"},
    {time:767, label:"보고서 저장"}
  ],
  10: [
    {time:0,   label:"목표화면 생성"},
    {time:29,  label:"실습용 양식파일 다운로드"},
    {time:55,  label:"템플릿 보고서 저장 및 편집"},
    {time:89,  label:"양식파일 업로드"},
    {time:103, label:"양식 디자인 실행"},
    {time:113, label:"데이터 가져오기"},
    {time:169, label:"변수 정의"},
    {time:254, label:"데이터 집계"},
    {time:636, label:"양식 설정"},
    {time:669, label:"행 숨김 및 양식 디자인 저장"},
    {time:690, label:"저장 결과 조회"},
    {time:698, label:"조회 버튼 동작 설정"},
    {time:736, label:"보고서 저장"}
  ],
  11: [
    {time:4,   label:"목표화면 생성"},
    {time:30,  label:"실습용 양식파일 다운로드"},
    {time:56,  label:"템플릿 보고서 저장 및 편집"},
    {time:89,  label:"양식파일 업로드"},
    {time:95,  label:"양식 디자인 실행"},
    {time:110, label:"변수 정의"},
    {time:168, label:"데이터 가져오기"},
    {time:229, label:"데이터 표시항목 생성"},
    {time:292, label:"V1시트 데이터 집계"},
    {time:361, label:"V1시트 양식 설정"},
    {time:409, label:"V2 시트 데이터 집계 및 양식 설정"},
    {time:593, label:"V2 시트 양식 설정"},
    {time:649, label:"전 년도고 당년비 데이터 집계"},
    {time:733, label:"양식 설정"},
    {time:751, label:"양식 디자인 저장 및 결과 조회"},
    {time:802, label:"MXGrid 컨트롤 복사하기"},
    {time:841, label:"조회 버튼 동작 설정"},
    {time:882, label:"보고서 저장"}
  ],
  12: [
    {time:0,   label:"목표화면 생성"},
    {time:32,  label:"i-MATRIX 메뉴 활성화"},
    {time:44,  label:"템플릿 보고서 저장"},
    {time:79,  label:"컨트롤 영역 설정"},
    {time:154, label:"변수 정의"},
    {time:244, label:"조회 작업 자동화(UI Bot)"},
    {time:306, label:"데이터 가져오기"},
    {time:329, label:"버튼 동작 설정"},
    {time:387, label:"보고서 기능 동작 확인"},
    {time:407, label:"보고서 저장"}
  ],
  13: [
    {time:0,   label:"목표화면 생성"},
    {time:25,  label:"i-MATRIX 메뉴 활성화"},
    {time:36,  label:"양식파일 실행"},
    {time:48,  label:"기준 일자 및 날짜 구분 값 생성"},
    {time:194, label:"가변 데이터 생성하기"},
    {time:243, label:"데이터 표시항목 생성"},
    {time:293, label:"데이터 집계"},
    {time:557, label:"보고서 기능 동작 확인"}
  ],
  14: [
    {time:3,   label:"목표화면 생성"},
    {time:35,  label:"템플릿 보고서 저장 및 편집"},
    {time:67,  label:"양식 디자인 실행"},
    {time:73,  label:"변수 정의"},
    {time:112, label:"데이터 가져오기"},
    {time:177, label:"데이터 표시항목 생성"},
    {time:227, label:"데이터 집계"},
    {time:323, label:"양식 디자인 저장"},
    {time:328, label:"컨트롤 동작 설정"},
    {time:363, label:"보고서 결과 조회"},
    {time:384, label:"보고서 저장"}
  ],
  15: [
    {time:3,   label:"목표화면 생성"},
    {time:34,  label:"보고서 편집"},
    {time:48,  label:"데이터 가져오기"},
    {time:131, label:"Chart 클릭 허용 동작 설정"},
    {time:199, label:"보고서 동작 기능 확인"},
    {time:214, label:"보고서 저장"}
  ],
  16: [
    {time:0,   label:"목표화면 생성"},
    {time:124, label:"템플릿 보고서 저장 및 편집"},
    {time:156, label:"데이터 가져오기"},
    {time:197, label:"실행 계획 생성"},
    {time:208, label:"버튼 동작 설정"},
    {time:262, label:"보고서 저장"}
  ],
  17: [
    {time:3,   label:"목표화면 생성"},
    {time:80,  label:"템플릿 보고서 저장 및 편집"},
    {time:128, label:"데이터 가져오기"},
    {time:198, label:"그리드 디자인 생성 편집"},
    {time:218, label:"ListGrid 클릭 동작 설정"},
    {time:286, label:"실행 계획 생성"},
    {time:289, label:"사용자 정의 변수 설정"},
    {time:313, label:"버튼 동작 설정"},
    {time:414, label:"필드 선택 변경"},
    {time:480, label:"보고서 저장"}
  ],
  18: [
    {time:5,   label:"목표화면 생성"},
    {time:52,  label:"템플릿 보고서 저장 및 편집"},
    {time:80,  label:"컨트롤 생성 및 속성 설정"},
    {time:151, label:"데이터 가져오기"},
    {time:162, label:"필드 화면 표시명 변경"},
    {time:185, label:"필드 화면 비활성화"},
    {time:191, label:"필드 정렬 방식 변경"},
    {time:207, label:"필드 선택 변경"},
    {time:318, label:"필드별 수정 여부 비활성화"},
    {time:338, label:"유효성 검사 기능 적용"},
    {time:353, label:"계산필드 추가"},
    {time:444, label:"필드 넓이 조정"},
    {time:475, label:"Label 색상 속성"},
    {time:494, label:"입력 폼 생성"},
    {time:516, label:"보고서 실행 후 동작 확인"},
    {time:528, label:"실행 계획 생성"},
    {time:543, label:"버튼 동작 설정"},
    {time:633, label:"컨트롤 Docking 설정"},
    {time:638, label:"보고서 저장 및 기능 확인"}
  ],
  19: [
    {time:4,   label:"목표화면 생성"},
    {time:41,  label:"실습용 양식파일 다운로드"},
    {time:64,  label:"가변 데이터 집계하기"},
    {time:242, label:"템플릿 보고서 저장 및 편집"},
    {time:281, label:"양식파일 업로드"},
    {time:298, label:"MXGrid 테두리 제거"},
    {time:307, label:"양식 디자인 실행"},
    {time:322, label:"입력 화면 생성"},
    {time:379, label:"입력 화면 데이터 연결하기"},
    {time:514, label:"시트 보호하기"},
    {time:557, label:"양식 디자인 저장"},
    {time:571, label:"실행 계획 생성"},
    {time:592, label:"버튼 동작 설정"},
    {time:653, label:"입력 데이터 저장하기"},
    {time:664, label:"데이터 가져오기"},
    {time:724, label:"양식 디자인 저장 및 종료"},
    {time:732, label:"보고서 기능 동작 확인"},
    {time:758, label:"보고서 저장"}
  ],
  20: [
    {time:3,   label:"목표화면 생성"},
    {time:46,  label:"i-MATRIX 메뉴 활성화"},
    {time:57,  label:"템플릿 보고서 저장 및 실행"},
    {time:104, label:"컨트롤 영역 설정"},
    {time:258, label:"조회 조건 설정하기"},
    {time:271, label:"데이터 가져오기"},
    {time:324, label:"조회조건 필드 설정"},
    {time:365, label:"이 숨기기 취소"},
    {time:370, label:"실행 계획 생성"},
    {time:419, label:"버튼 동작 설정"},
    {time:447, label:"입력 동작 잠금 해제"},
    {time:471, label:"시트 보호하기"},
    {time:481, label:"보고서 동작 기능 확인"}
  ],
  21: [
    {time:3,   label:"i-META Designer 실행"},
    {time:9,   label:"DB 연결 및 테이블 추가"},
    {time:40,  label:"조인 관계 설정"},
    {time:64,  label:"폴더 추가 및 이름 변경"},
    {time:79,  label:"i-META 항목 추가"},
    {time:89,  label:"필드 Category 변경"},
    {time:115, label:"필드 이름 변경"},
    {time:127, label:"계층 구조 필드 생성"},
    {time:168, label:"측정 값 필드 생성 변경"},
    {time:183, label:"i-META 파일 저장하기"}
  ]
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
