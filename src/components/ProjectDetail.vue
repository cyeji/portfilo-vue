<template>
  <div class="container">
    <!-- 제목 섹션 -->
    <h1 class="title">🚀 {{ project?.title }}</h1>
    <p class="subtitle">{{ project?.intro }}</p>
    <img v-if="project?.imageUrl" :src="project?.imageUrl" alt="Project Image" class="project-image" />

    <!-- 프로젝트 정보 카드 -->
    <div class="project-card">
      <h2 class="section-title">📌 프로젝트 개요</h2>
      <p><strong>📅 기간:</strong> {{ project?.period }}</p>
      <p><strong>💡 요약:</strong> {{ project?.summary }}</p>
      <p><strong>🔗 GitHub:</strong>
        <a :href="project?.githubUrl" target="_blank">{{ project?.githubUrl }}</a>
      </p>
    </div>

    <!-- 요약 섹션 -->
    <div class="project-card">
      <h2 class="section-title">🛠 기술스택</h2>
      <img v-if="project?.techSkillImageUrl" :src="project?.techSkillImageUrl" alt="Tech Stack Image" class="tech-stack-image" />
    </div>

    <!-- 역할 섹션 -->
    <div class="project-card">
      <h2 class="section-title">🎯 역할</h2>
      <ul>
        <li v-for="(role, index) in project?.roles" :key="index"> {{ role }}</li>
      </ul>
    </div>

    <!-- 성과 섹션 -->
    <div class="project-card">
      <h2 class="section-title">🏆 성과</h2>
      <ul>
        <li v-for="(achievement, index) in project?.achievements" :key="index"> {{ achievement }}</li>
      </ul>
    </div>

    <!-- 시기 섹션 -->
    <div class="project-card" v-if="project?.timeline && project.timeline.length">
      <h2 class="section-title">⏳ 요구사항 명세서</h2>
      <vueMarkDown
        v-for="(item, index) in project?.timeline"
        :key="index"
        :source="item"
      />
    </div>

    <!-- 돌아가기 버튼 -->
    <router-link to="/" class="back-button">← 프로젝트 목록으로 돌아가기</router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import vueMarkDown from "vue3-markdown-it";

const route = useRoute();
const project = ref(null);

const projects = [
  {
    title: "감성 카트",
    period: "2024.11 ~ 2025.03",
    imageUrl: new URL('@/assets/images/gamsungcart_intro.png', import.meta.url).href, // 동적 경로
    techSkillImageUrl: new URL('@/assets/images/gamsungcart_techskill.jpg', import.meta.url).href, // 동적 경로
    githubUrl: "https://github.com/FC-InnerCircle-ICD2/commerce-BE",
    intro: "쿠팡 기반 이커머스 플랫폼",
    techStack: "SpringBoot(Java), Junit, Open-Feign, DDD, Multi-Module, Redis",
    summary: "이커머스 시장을 분석하여 맞춤형 쇼핑 경험을 제공하는 플랫폼 개발.",
    roles: [
      "팀 부리더로서 일정 관리 및 문서 작업 담당",
      "초기 기능 정의 및 화면 기획 진행",
      "협업을 위한 Git 커밋 컨벤션 정의 및 코드 리뷰 진행",
      "주문, 배송 도메인 기능 개발 및 비즈니스 로직 구현",
      "외부 도메인(상품,재고,배송 등)과의 통신 모듈 개발 및 API 연동",
      "트랜잭션 안정성을 고려한 주문 프로세스 개선"
    ],
    achievements: [
      "기획 단계부터 개발까지 주도하여 프로젝트를 성공적으로 런칭",
      "DDD 및 클린 아키텍처 적용으로 코드 유지보수성 향상"
    ],
    timeline: ["[주문&배송 (주문 내역 및 조회를 위한 배송 요구사항 명세서)](https://github.com/FC-InnerCircle-ICD2/commerce-BE/issues/78) 🚀",
    "[주문 요구사항 명세서](https://innerciclebe.dooray.com/share/tasks/5Wtl1bo_Qly8BxWTMy8YbQ)"]
  },
  {
    title: "Rate Limiter Spring Boot Starter",
    period: "2024.11 ~ 2024.11",
    techSkillImageUrl: new URL('@/assets/images/ratelimiter_techskill_20250316.png', import.meta.url).href, // 동적 경로
    githubUrl: "https://github.com/innercicle-be-rate-limiter/rate-limiter-spring-boot-starter",
    intro: "가상면접 사례로 배우는 대규모 시스템 설계 기초 책 실습 : 처리율 제한기",
    techStack: "SpringBoot(Java), Junit, Multi-Module, Redis",
    summary: "처리율 제한기를 구현하여 시스템의 부하를 조절하고 API 요청을 최적화.",
    roles: [
      "Spring Boot 기반 처리율 제한기(Rate Limiter) 구현",
      "Token Bucket 및 Leaky Bucket 알고리즘을 활용한 요청 제한 적용",
      "GitHub Actions를 활용한 태깅(Tagging) 자동화 전략을 도입"
    ],
    achievements: [
      "처리율 제한기 알고리즘(Fixed Window, Sliding Window, Token Bucket 등)의 원리를 깊이 이해하고, 프로젝트에 적용",
      "커스텀 처리율 제한 라이브러리를 개발하여 공통 모듈로 분리하고, 다른 API 모듈에도 적용하여 재사용성을 높임",
      "GitHub Actions를 활용한 태깅(Tagging) 자동화 전략을 도입하여 배포 프로세스 개선"
    ],
  }
];

onMounted(() => {
  project.value = projects[parseInt(route.params.id)];
});
</script>

<style scoped>
/* 페이지 전체 스타일 */
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
}

/* 제목 스타일 */
.title {
  font-size: 26px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 18px;
  color: #555;
  text-align: center;
  margin-bottom: 20px;
}

/* 프로젝트 카드 스타일 */
.project-card {
  background: #f5f7fa;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
}

/* 섹션 제목 스타일 */
.section-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

/* 리스트 스타일 */
ul {
  padding-left: 20px;
}

li {
  font-size: 14px;
  line-height: 1.6;
}

/* GitHub 링크 */
a {
  color: #007bff;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

/* 돌아가기 버튼 */
.back-button {
  display: block;
  text-align: center;
  margin-top: 20px;
  font-weight: bold;
  color: #0057ff;
  text-decoration: none;
}

.back-button:hover {
  text-decoration: underline;
}

/* 이미지 크기 조정 */
.project-image {
  display: block;
  max-width: 600px; /* 프로젝트 개요 카드와 같은 너비 */
  width: 100%;
  height: auto;
  margin: 0 auto 20px;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}

/* 기술 스택 이미지 스타일 */
.tech-stack-image {
  display: block;
  max-width: 500px; /* 최대 너비 설정 */
  width: 100%;
  height: auto;
  margin: 15px auto 0; /* 위 여백 추가 및 중앙 정렬 */
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
