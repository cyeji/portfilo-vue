<template>
  <Card class="github-card">
    <template #content>
      <div class="github-container">
        <!-- GitHub 제목을 왼쪽 정렬 -->
        <h3 class="title">Github</h3>

        <!-- GitHub 링크 (하이라이트 적용) -->
        <div class="github-link">
          <p>🔗 <strong>GitHub URL:</strong>
            <a :href="githubUrl" target="_blank" class="highlight">{{ githubUrl }}</a>
          </p>
        </div>

        <!-- GitHub 프로필 3D SVG 이미지 -->
        <div class="github-image">
          <img :src="githubProfileImage" alt="GitHub Profile Contribution Graph" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";

const githubUrl = ref("https://github.com/cyeji");
const githubProfileImage = ref(
  "https://raw.githubusercontent.com/cyeji/Cyeji/9408d9591cc6c993fcff52f6a0e2f4b378cafd63/profile-3d-contrib/profile-night-view.svg"
);
</script>

<style scoped>
/* GitHub 카드 스타일 */
.github-card {
  border: 2px solid #d9e2ef;
  border-radius: 12px;
  padding: 20px;
  background: #fff;
  margin-bottom: 50px;
}

/* 제목 스타일 (왼쪽 정렬) */
.title {
  font-size: 18px;
  font-weight: bold;
  color: #0057ff;
  margin-bottom: 12px;
  text-align: left;
}

/* GitHub 링크 스타일 */
.github-link {
  margin-top: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  text-align: left;
}

/* GitHub URL 하이라이트 스타일 */
.github-link .highlight {
  background-color: #e8f0ff; /* 연한 파란색 배경 */
  color: #0057ff; /* 진한 파란색 글자 */
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 4px;
  text-decoration: none;
}

.github-link .highlight:hover {
  background-color: #d0e2ff;
  text-decoration: underline;
}

/* GitHub 프로필 이미지 */
.github-image {
  display: flex;
  justify-content: center;
}

.github-image img {
  max-width: 600px;
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
