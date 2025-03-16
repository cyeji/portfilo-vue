<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">📌 프로젝트</h2>

    <div v-for="(project, index) in projects" :key="index" class="project-card">
      <!-- 프로젝트 제목과 버튼을 한 줄에 배치 -->
      <div class="project-header">
        <h3 class="project-title">{{ project.title }}</h3>
        <router-link :to="'/projects/' + index" class="view-more">
          자세히 보기 →
        </router-link>
      </div>

      <p class="project-period">{{ project.period }}</p>

      <!-- 프로젝트 상세 설명 -->
      <div class="project-details">
        <p class="bold-title">🔹 프로젝트 상세</p>
        <div class="project-info">
          <p><strong>소개</strong> | {{ project.intro }}</p>
          <p><strong>GitHub URL</strong> |
            <a :href="project.githubUrl" target="_blank">{{ project.githubUrl }}</a>
          </p>
          <p><strong>사용 기술</strong> | {{ project.techStack }}</p>
        </div>

        <!-- 상세 설명 목록 -->
        <ul class="details-list">
          <li v-for="(detail, index) in project.details" :key="index">
            {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "감성 카트",
    period: "2024.11 ~ 2025.03",
    githubUrl: "https://github.com/FC-InnerCircle-ICD2/commerce-BE",
    intro: "쿠팡 기반 이커머스 플랫폼",
    techStack: "SpringBoot(Java), Junit, Open-Feign, DDD, Multi-Module, Redis",
    details: [
      "팀 부리더로서 일정 관리 및 문서 작업 담당",
      "초기 기능 정의 및 화면 기획 진행",
      "협업을 위한 Git 커밋 컨벤션 정의 및 코드 리뷰 진행",
      "주문, 배송 도메인 기능 개발 및 비즈니스 로직 구현",
      "외부 도메인(결제, 재고 등)과의 통신 모듈 개발 및 API 연동",
      "트랜잭션 안정성을 고려한 주문 프로세스 개선"
    ]
  },
  {
    title: "rate-limiter-spring-boot-starter",
    period: "2024.11 ~ 2024.11",
    githubUrl: "https://github.com/innercicle-be-rate-limiter/rate-limiter-spring-boot-starter",
    intro: "가상면접 사례로 배우는 대규모 시스템 설계 기초 책 실습 : 처리율 제한기",
    techStack: "SpringBoot(Java), Junit, Multi-Module, Redis",
    details: [
      "Spring Boot 기반 처리율 제한기(Rate Limiter) 구현",
      "처리율 제한 알고리즘을 활용한 요청 제한 적용"
    ]
  }
]);
</script>

<style scoped>
/* 프로젝트 카드 */
.project-card {
  border: 2px solid #d9e2ef;
  border-radius: 12px;
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
}
.project-card:last-child  {
  border: 2px solid #d9e2ef;
  border-radius: 12px;
  padding: 20px;
  background: #fff;
  margin-bottom: 50px;
}

/* 프로젝트 제목과 버튼을 한 줄에 배치 */
.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
}

/* 프로젝트 제목 */
.project-title {
  font-size: 18px;
  font-weight: bold;
  color: #0057ff;
}

/* 프로젝트 기간 */
.project-period {
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
}

/* 프로젝트 상세 박스 */
.project-details {
  background: #f5f7fa;
  padding: 12px;
  border-radius: 8px;
}

/* 자세히 보기 버튼 */
.view-more {
  display: inline-block;
  padding: 6px 12px;
  background: #0057ff;
  color: white;
  border-radius: 4px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
}

.view-more:hover {
  background: #0045cc;
}

/* 프로젝트 정보 스타일 */
.project-info p {
  font-size: 14px;
  margin: 4px 0;
}

.project-info a {
  color: #0057ff;
  text-decoration: none;
  font-weight: bold;
}

.project-info a:hover {
  text-decoration: underline;
}

/* 상세 설명 목록 */
.details-list {
  font-size: 14px;
  color: #333;
  margin-top: 12px;
  line-height: 1.6;
}
</style>
