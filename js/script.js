const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.transitionDelay = `${Math.min(index % 3, 2) * 90}ms`;
  observer.observe(element);
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const journeyData = {
  university: {
    category: "EDUCATION · MAJOR",
    period: "2021 — 2026.02",
    count: "EDU",
    title: "한동대학교 AI·컴퓨터공학 전공",
    description: "2021년 입학해 2026년 2월 졸업했습니다. 컴퓨터공학의 기본기와 AI·데이터 활용 역량을 학습하고, 전공 지식을 연구 프로젝트와 서비스 개발로 확장했습니다.",
    points: ["2021년 입학 · 2026년 2월 졸업", "SW·데이터·AI 프로젝트 수행", "이론을 실제 서비스 구현으로 연결"],
    tags: ["Computer Science", "Artificial Intelligence", "Software"]
  },
  weekly: {
    category: "BACKEND · TEAM PROJECT",
    period: "2026.05 — 2026.06 · 6주",
    count: "PJT 01",
    title: "Weekly Eating 백엔드 개발",
    description: "캘린더 일정과 사용자 선호를 기반으로 AI 식단을 생성하고 장보기와 냉장고 관리까지 연결하는 서비스입니다.",
    points: ["인증·인가부터 장바구니까지 API 20개 구현", "Java 17 · Spring Boot 3.2 · MyBatis", "2인 팀 프로젝트 · Backend Developer"],
    tags: ["Spring Boot", "JWT", "MyBatis", "MySQL"]
  },
  stradvision: {
    category: "WORK EXPERIENCE · INTERNSHIP",
    period: "2025.06 — 2025.08",
    count: "EXP 01",
    title: "스트라드비젼 Data Pipeline Team 인턴",
    description: "차량 CAN 신호를 파싱하고 주행 데이터의 주요 이벤트를 자동 분석하는 파이프라인 업무를 수행했습니다.",
    points: ["차량별 CAN 신호를 해석 가능한 CSV로 변환", "구간 변화·Zero Crossing·Trend·Overflow 탐지", "분석 결과 JSON 자동 생성"],
    tags: ["Data Pipeline", "CAN Parsing", "Automation"]
  },
  ssafy: {
    category: "EDUCATION · CURRENT",
    period: "2026.01 — 현재",
    count: "EDU 02",
    title: "SSAFY에서 백엔드 개발자로 성장 중",
    description: "체계적인 SW 교육과 팀 프로젝트를 통해 요구사항 분석, 서비스 설계, 서버 로직 구현과 협업 역량을 쌓고 있습니다.",
    points: ["SSAFY 15기 교육 과정 진행", "SW 기본기와 백엔드 개발 역량 강화", "팀 단위 서비스 개발 프로세스 경험"],
    tags: ["Backend", "Software Education", "Collaboration"]
  },
  award_capstone: {
    category: "AWARD · GRAND PRIZE",
    period: "2025.05",
    count: "AWD 01",
    title: "한동대학교 캡스톤 경진대회 대상",
    description: "전기차 배터리 데이터 기반 예측 프로젝트의 문제 해결 과정과 연구 성과를 인정받아 대상을 수상했습니다.",
    points: ["한동대학교 캡스톤 경진대회", "최고상인 대상 수상", "전기차 BMS 데이터 연구 성과"],
    tags: ["Grand Prize", "Capstone", "EV Battery"]
  },
  award_ask: {
    category: "AWARD · BEST PAPER",
    period: "2025.05",
    count: "AWD 02",
    title: "ASK 2025 우수 논문상",
    description: "1년 뒤 전기차 배터리 성능 상태 예측 연구로 한국정보처리학회 ASK 2025 우수 논문상을 수상했습니다.",
    points: ["한국정보처리학회", "대학원생 트랙 우수 논문상", "전기차 1년 뒤 배터리 성능 예측"],
    tags: ["Best Paper", "ASK 2025", "Prediction"]
  },
  award_ksc: {
    category: "AWARD · EXCELLENT PAPER",
    period: "2025.02",
    count: "AWD 03",
    title: "한국정보과학회 학부생 부문 우수 논문상",
    description: "태양풍 시계열 데이터를 활용한 지자기 교란 지수 예측 연구의 성과를 인정받았습니다.",
    points: ["한국정보과학회 KSC 2024", "학부생 부문 우수 논문상", "LSTM 계열 모델 3종 비교"],
    tags: ["Excellent Paper", "KSC", "Time Series"]
  },
  battery_future: {
    category: "PROJECT · EV BATTERY",
    period: "2025.03 — 2025.05",
    count: "PJT 02",
    title: "1년 뒤 전기차 배터리 성능 상태 예측",
    description: "4개 차종 371대의 주행 데이터로 1년 뒤 평균 전비를 예측하고 실제 주행가능거리와 비교했습니다.",
    points: ["371대 · 11,512,182km 주행 데이터", "1년 뒤 ±15일 구간 평균 전비 예측", "ASK 2025 우수 논문상"],
    tags: ["BMS", "Feature Engineering", "Prediction"]
  },
  battery_range: {
    category: "PROJECT · EV BATTERY",
    period: "2024.11 — 2025.02",
    count: "PJT 03",
    title: "전기차 현재 주행가능거리 예측",
    description: "6개 차종 479대의 BMS 데이터로 각 시점의 전비와 완전 방전까지의 주행가능거리를 예측했습니다.",
    points: ["479대 · 15,917,494km BMS 데이터", "잔여 전력량 기반 주행가능거리 산출", "한동대학교 캡스톤 경진대회 대상"],
    tags: ["BMS", "Range Prediction", "Industry Project"]
  },
  geomagnetic: {
    category: "PROJECT · TIME SERIES",
    period: "2024.07 — 2025.02",
    count: "PJT 04",
    title: "지자기 교란 지수 예측",
    description: "1999년부터 2013년까지의 태양풍 데이터를 활용해 지자기 교란 지수를 예측했습니다.",
    points: ["14년 태양풍 데이터 · 3시간 단위 리샘플링", "LSTM·Bi-LSTM·Attention 모델 비교", "한국정보과학회 우수 논문상"],
    tags: ["LSTM", "Time Series", "Attention"]
  },
  xamk: {
    category: "GLOBAL · EXCHANGE PROGRAM",
    period: "2023.08 — 2024.01",
    count: "ACT 01",
    title: "핀란드 XAMK 교환학생",
    description: "핀란드 South-Eastern Finland University of Applied Sciences에서 새로운 학습 환경과 문화를 경험했습니다.",
    points: ["핀란드 XAMK 교환학생 파견", "다양한 배경의 구성원과 소통", "새로운 환경에서 자기주도적으로 학습"],
    tags: ["XAMK", "Global Experience", "Communication"]
  },
  executive: {
    category: "ACTIVITY · LEADERSHIP",
    period: "2022.03 — 2022.12",
    count: "ACT 02",
    title: "전산전자공학부 임원단 활동",
    description: "전산전자공학부 임원단으로 학부 구성원들과 소통하고 공동 업무를 수행하며 협업과 책임감을 배웠습니다.",
    points: ["전산전자공학부 임원단", "학부 구성원을 위한 공동 업무 수행", "조직 내 소통과 협업 경험"],
    tags: ["Leadership", "Communication", "Teamwork"]
  },
  sw_volunteer: {
    category: "ACTIVITY · SW EDUCATION",
    period: "2022.08 — 2022.12",
    count: "ACT 03",
    title: "고등학생 파이썬 SW 교육봉사",
    description: "고등학생을 대상으로 파이썬 프로그래밍을 가르치며 학습자의 눈높이에 맞춰 기술을 설명하는 경험을 쌓았습니다.",
    points: ["고등학생 대상 파이썬 수업", "프로그래밍 개념과 실습 지도", "기술을 이해하기 쉽게 전달하는 역량 강화"],
    tags: ["Python", "SW Education", "Communication"]
  }
};

const journeyButtons = document.querySelectorAll("[data-journey]");
const journeyDetail = document.querySelector(".journey-detail");

journeyButtons.forEach((button) => {
  if (!journeyDetail) {
    button.setAttribute("tabindex", "-1");
    button.setAttribute("aria-disabled", "true");
    return;
  }
  button.addEventListener("click", () => {
    const data = journeyData[button.dataset.journey];
    journeyButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });
    journeyDetail.classList.add("changing");
    window.setTimeout(() => {
      document.querySelector("#journey-category").textContent = data.category;
      document.querySelector("#journey-period").textContent = data.period;
      document.querySelector("#journey-count").textContent = data.count;
      document.querySelector("#journey-title").textContent = data.title;
      document.querySelector("#journey-description").textContent = data.description;
      document.querySelector("#journey-points").innerHTML = data.points.map((point) => `<li>${point}</li>`).join("");
      document.querySelector("#journey-tags").innerHTML = data.tags.map((tag) => `<span>${tag}</span>`).join("");
      journeyDetail.classList.remove("changing");
    }, 170);
  });
});

const projectTabButtons = document.querySelectorAll("[data-project-tab]");
const projectTabPanels = document.querySelectorAll("[data-project-panel]");

function syncProjectTabHeight() {
  if (!projectTabPanels.length) return;
  const demoPanel = document.querySelector('[data-project-panel="demo"]');
  if (!demoPanel) return;
  const panelWidth = projectTabPanels[0].parentElement.clientWidth;
  const wasHidden = demoPanel.hidden;
  demoPanel.hidden = false;
  demoPanel.style.position = "absolute";
  demoPanel.style.visibility = "hidden";
  demoPanel.style.pointerEvents = "none";
  demoPanel.style.width = `${panelWidth}px`;
  demoPanel.style.height = "auto";
  const targetHeight = demoPanel.scrollHeight;
  demoPanel.style.position = "";
  demoPanel.style.visibility = "";
  demoPanel.style.pointerEvents = "";
  demoPanel.style.width = "";
  demoPanel.hidden = wasHidden;

  projectTabPanels.forEach((panel) => {
    panel.style.minHeight = "0";
    panel.style.height = `${targetHeight}px`;
  });
}

projectTabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTab = button.dataset.projectTab;

    projectTabButtons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("active", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    projectTabPanels.forEach((panel) => {
      const selected = panel.dataset.projectPanel === selectedTab;
      panel.hidden = !selected;
      panel.classList.toggle("active", selected);

      const video = panel.querySelector("video");
      if (video && !selected) video.pause();
    });
  });
});

window.addEventListener("load", syncProjectTabHeight);
let projectPanelResizeTimer;
window.addEventListener("resize", () => {
  window.clearTimeout(projectPanelResizeTimer);
  projectPanelResizeTimer = window.setTimeout(syncProjectTabHeight, 150);
});

document.querySelectorAll(".timeline-primary[data-target]").forEach((item) => {
  item.addEventListener("click", () => {
    document.getElementById(item.dataset.target)?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

document.querySelectorAll(".project-expand-button").forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isOpen));
    content.classList.toggle("open", !isOpen);
    if (button.classList.contains("weekly-expand-button") && !isOpen) {
      window.setTimeout(syncProjectTabHeight, 80);
    }
  });
});

const featureSlides = [...document.querySelectorAll(".gallery-stage figure")];
const featureTitles = [
  "일정·선호 맞춤 AI 식단",
  "일정·선호 맞춤 AI 식단",
  "배치 체인 쿠킹",
  "일정·선호 맞춤 AI 식단",
  "오늘의 식단",
  "메뉴 Reroll 재추천",
  "직접 메뉴 선택",
  "상세 레시피 제공",
  "장보기·냉장고 자동 연결",
  "유통기한 관리"
];
let featureIndex = 0;

function showFeatureSlide(nextIndex) {
  if (!featureSlides.length) return;
  featureIndex = (nextIndex + featureSlides.length) % featureSlides.length;
  featureSlides.forEach((slide, index) => slide.classList.toggle("active", index === featureIndex));
  document.querySelector("#feature-current").textContent = String(featureIndex + 1).padStart(2, "0");
  document.querySelector("#feature-gallery-title").textContent = featureTitles[featureIndex];
  document.querySelector(".gallery-progress i").style.width = `${((featureIndex + 1) / featureSlides.length) * 100}%`;
}

document.querySelector(".gallery-prev")?.addEventListener("click", () => showFeatureSlide(featureIndex - 1));
document.querySelector(".gallery-next")?.addEventListener("click", () => showFeatureSlide(featureIndex + 1));

const inlineInternCards = document.querySelectorAll("[data-inline-intern]");

inlineInternCards.forEach((card) => {
  const summary = card.querySelector(".intern-work-summary");
  const toggleCard = () => {
    const shouldOpen = !card.classList.contains("open");

    inlineInternCards.forEach((item) => {
      item.classList.remove("open");
      item.querySelector(".intern-work-summary")?.setAttribute("aria-expanded", "false");
    });

    if (shouldOpen) {
      card.classList.add("open");
      summary.setAttribute("aria-expanded", "true");
    }
  };

  summary.addEventListener("click", toggleCard);
  summary.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleCard();
    }
  });
});

const lightbox = document.querySelector(".image-lightbox");
const lightboxImage = lightbox?.querySelector("img");
const lightboxCaption = lightbox?.querySelector("p");

document.querySelectorAll(".gallery-stage img, .intern-images img, .research-visuals img, .research-result-single img, .research-method-figure img, .research-comparison img").forEach((image) => {
  image.addEventListener("click", () => {
    lightboxImage.src = image.currentSrc || image.src;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = image.closest("figure")?.querySelector("figcaption")?.textContent || image.alt;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox-close").focus();
  });
});

function closeLightbox() {
  if (!lightbox || lightbox.hidden) return;
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

lightbox?.querySelector(".lightbox-close").addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLightbox();
});
