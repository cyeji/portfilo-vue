<script setup lang="ts">

</script>
<template>
  <Card class="cert-card">
    <template #content>
      <div class="cert-container">
        <h3 class="title">자격증</h3>

        <div class="cert-section">
          <table class="cert-table">
            <thead>
            <tr>
              <th class="table-header">기간</th>
              <th class="table-header">내용</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(cert, index) in certifications" :key="index" class="table-row">
              <td class="table-cell">{{ cert.year }}</td>
              <td class="table-cell">
                <a :href="cert.link" class="cert-link">{{ cert.title }}</a>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";

const certifications = ref([
  { year: "2024.12.13", title: "SQLD", link: "#" },
  { year: "2023.07.28", title: "AWS Certified Cloud Practitioner ", link: "#" },
  { year: "2019.11.22", title: "정보처리기사", link: "#" }
]);
</script>

<style scoped>
/* 전체 카드 스타일 */
.cert-card {
  border: 2px solid #d9e2ef; /* 연한 파란색 테두리 */
  border-radius: 12px;
  padding: 20px;
  background: #fff;
}

/* 제목 스타일 */
.title {
  font-size: 18px;
  font-weight: bold;
  color: #0057ff; /* 진한 파란색 */
  margin-bottom: 12px;
}

/* 섹션 스타일 */
.cert-section {
  margin-top: 8px;
}

/* 테이블 스타일 */
.cert-table {
  width: 100%;
  border-collapse: collapse;
  border-radius: 8px;
  overflow: hidden;
}

/* 테이블 헤더 */
.table-header {
  background: #f0f4ff; /* 연한 파란색 배경 */
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  text-align: left;
  border-bottom: 2px solid #d9e2ef;
}

/* 테이블 행 */
.table-row:nth-child(even) {
  background: #f9fafe; /* 줄무늬 효과 */
}

/* 테이블 셀 */
.table-cell {
  padding: 10px;
  font-size: 14px;
  color: #333;
  border-bottom: 1px solid #e1e8f0;
}

/* 링크 스타일 */
.cert-link {
  color: #0057ff;
  text-decoration: none;
  font-weight: bold;
}

.cert-link:hover {
  text-decoration: underline;
}
</style>
