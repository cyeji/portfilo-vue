<script setup>
</script>

<template>
  <Card class="profile-card">
    <template #content>
      <div class="profile-container">
        <div class="profile-image">
          <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="Profile Image" />
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
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
/* 카드 전체 스타일 */
.profile-card {
  padding: 20px;
  border: 2px solid #0057ff; /* 테두리 추가 */
  border-radius: 12px;
}

/* 프로필 컨테이너 */
.profile-container {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* 프로필 이미지 */
.profile-image {
  width: 100px;
  height: 100px;
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
  font-size: 20px;
  font-weight: bold;
}

.eng-name {
  font-size: 16px;
  color: #666;
  margin-left: 5px;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 8px 0;
}

/* 정보 스타일 */
.info {
  display: flex;
  gap: 10px;
}

.label {
  font-weight: bold;
  color: #666;
  min-width: 80px;
}

.value {
  color: #333;
}
</style>
