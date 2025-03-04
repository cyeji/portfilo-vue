<script setup>
import { ref } from "vue";

const projects = ref([
  {
    title: "감성 카트",
    period: "2024.11 ~ 2025.03",
    githubUrl: "https://github.com/",
    deployUrl: "https://helloworld.com",
    techStack: "SpringBoot",
    details: [
      "초기 기능 정의 및 화면 기획 진행"
    ]
  }
]);
</script>

<template>
  <div class="p-6">
    <h2 class="text-3xl font-bold text-gray-900 mb-6">📌 프로젝트</h2>

    <div v-for="project in projects" :key="project.title" class="project-card">
      <!-- 프로젝트 제목 및 기간 -->
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-period">{{ project.period }}</p>

      <!-- 프로젝트 상세 설명 -->
      <div class="project-details">
        <p class="bold-title">🔹 프로젝트 상세</p>
        <div class="project-info">
          <p><strong>GitHub URL</strong> | <a :href="project.githubUrl" target="_blank">{{ project.githubUrl }}</a></p>
          <p><strong>배포 URL</strong> | <a :href="project.deployUrl" target="_blank">{{ project.deployUrl }}</a></p>
          <p><strong>사용 기술</strong> | {{ project.techStack }}</p>
        </div>

        <!-- 상세 설명 목록 -->
        <ul class="details-list">
          <li v-for="(detail, index) in project.details" :key="index">
            • {{ detail }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 프로젝트 카드 */
.project-card {
  border: 2px solid #d9e2ef;
  border-radius: 12px;
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;
}

/* 프로젝트 제목 */
.project-title {
  font-size: 18px;
  font-weight: bold;
  color: #0057ff;
  margin-bottom: 4px;
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

/* 굵은 제목 스타일 */
.bold-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
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
