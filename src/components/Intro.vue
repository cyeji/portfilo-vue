<template>
  <Card class="profile-card">
    <template #content>
      <div class="profile-container">
        <div class="profile-image">
          <img src="https://avatars.githubusercontent.com/u/98408267?v=4" alt="Profile Image" />
        </div>
        <div class="profile-text">
          <h1>조예지 <span class="eng-name">yeji cho</span></h1>
          <hr />
          <div class="info">
            <p class="label">이메일</p>
            <p class="value">choyeji1591@gmail.com</p>
          </div>
          <div class="info">
            <p class="label">학력/정보</p>
            <p class="value">
              세명대학교 / 한방바이오융합학부 전공<br />
              세명대학교 / 소프트웨어학 복수전공
            </p>
          </div>
          <div class="info">
            <p class="label">회사</p>
            <p class="value">
              티웨이항공 (2023.10 ~ 재직중)<br />
              SoluM (2020.09 ~ 2022.09)
            </p>
          </div>
          <div class="info">
            <p class="label">블로그</p>
            <a href="https://yejipro.tistory.com" target="_blank" class="highlight">https://yejipro.tistory.com</a>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
/* 카드 전체 스타일 */
.profile-card {
  padding: 24px;
  border: 2px solid #0057ff;
  border-radius: 12px;
  margin-bottom: 24px; /* 다른 요소들과의 간격 확보 */
}

/* 프로필 컨테이너 */
.profile-container {
  display: flex;
  align-items: center;
  gap: 30px; /* 이미지와 텍스트 간격 증가 */
  flex-wrap: wrap; /* 반응형에서 줄바꿈 가능하도록 */
}

/* 프로필 이미지 */
.profile-image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  background: #d3d3d3;
  display: flex;
  justify-content: center;
  align-items: center;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 프로필 텍스트 */
.profile-text {
  flex-grow: 1;
}

h1 {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 8px; /* 제목과 내용 간격 */
}

.eng-name {
  font-size: 16px;
  color: #666;
  margin-left: 5px;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 10px 0;
}

/* 정보 스타일 */
.info {
  display: flex;
  gap: 16px; /* 라벨과 값 간 간격 증가 */
  margin-bottom: 10px; /* 정보 간 간격 증가 */
}

.label {
  font-weight: bold;
  color: #666;
  min-width: 100px;
}

.value {
  color: #333;
}

/* GitHub URL 하이라이트 스타일 */
.highlight {
  background-color: #e8f0ff; /* 연한 파란색 배경 */
  color: #0057ff; /* 진한 파란색 글자 */
  font-weight: bold;
  padding: 3px 6px;
  border-radius: 4px;
  text-decoration: none;
}

.highlight:hover {
  background-color: #d0e2ff;
  text-decoration: underline;
}
</style>
<script setup lang="ts">
</script>
