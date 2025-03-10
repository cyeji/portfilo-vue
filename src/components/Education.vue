<template>
  <Card class="education-card">
    <template #content>
      <div class="education-container">
        <!-- 교육 섹션 제목 -->
        <h2 class="section-title">교육</h2>
        <hr class="divider" />

        <!-- 교육 과정 -->
        <div v-for="education in educations" :key="education.title" class="education-item">
          <div class="education-header">
            <h3 class="education-title">{{education.title}}</h3>
            <span class="education-period">{{education.period}}</span>
          </div>

          <ul class="education-details">
            <li v-for="(detail, index) in education.details" :key="index">
              {{ detail }}
            </li>
          </ul>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";

const educations = ref([
  {
    title: "INNER CIRCLE 풀스택 2기",
    period: "2024.11 ~ 2025.03",
    details: [
      "📅 기간: 2024.11.28 ~ 2025.03.08",
      "📚 백엔드 개발 관련 교육 과정 이수",
      "🚀 프로젝트 3건 개발 및 배포 경험"
    ]
  },
  {
    title: "O’Reilly 풀스텍 테스트 베타리더 ",
    period: "2023.03",
    details: [
      "출판 전 원고 피드백 제공",
      "풀스택 테스트 도구에 대한 종류와 예시 파악",
      "도서를 통한 백엔드 테스트 도구 실무 적용"
    ]
  }
]);
</script>

<style scoped>
/* 교육 카드 스타일 */
.education-card {
  border: 2px solid #d9e2ef;
  border-radius: 12px;
  padding: 20px;
  background: #fff;
  margin-bottom: 24px;
}

/* 제목 스타일 */
.section-title {
  font-size: 20px;
  font-weight: bold;
  color: #0057ff;
  margin-bottom: 8px;
}

/* 구분선 */
.divider {
  border: none;
  height: 1px;
  background: #0057ff;
  margin-bottom: 16px;
}

/* 교육 항목 */
.education-item {
  background: #f5f7fa;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 16px; /* 카드 간격 조정 */
}

/* 교육 과정 제목 */
.education-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.education-title {
  font-size: 16px;
  font-weight: bold;
  background: #e8f0ff;
  padding: 6px 10px;
  border-radius: 4px;
  color: #0057ff;
}

.education-period {
  font-size: 14px;
  color: #666;
}

/* 교육 과정 상세 내용 */
.education-details {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  padding-left: 20px;
}

.education-details li {
  margin-bottom: 4px;
}
</style>
