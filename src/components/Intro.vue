<script setup>
</script>

<template>
  <Card>
    <template #title>소개</template>
    <template #content>
      <div class="profile-card">
        <div class="profile-image">
          <img src="https://primefaces.org/cdn/primevue/images/galleria/galleria11.jpg" alt="Profile Image" />
        </div>
        <div class="profile-text">
          <h1>백엔드 개발자 OOO</h1>
          <h2>끊임 없이 노력하는 개발자 OOO 입니다</h2>
          <p>
            안녕하세요! 저는 **4년 차 백엔드 개발자 OOO**입니다.
            주로 **Spring Boot, JPA, MyBatis**를 활용하여 RESTful API 개발과 대규모 트랜잭션을 처리하는 프로젝트를 진행해왔습니다.
            또한 **Vue.js**를 이용한 프론트엔드 개발 경험도 갖추고 있으며,
            사용자 경험을 고려한 기능 설계와 효율적인 데이터 처리를 중요하게 생각합니다.
          </p>
          <p>
            새로운 기술을 배우고 적용하는 것을 즐기며,
            **문제를 해결하는 과정에서 성장하는 개발자가 되고 싶습니다**.
            함께 고민하고 협력하며 더 나은 서비스를 만들어 나가길 기대합니다! 🚀
          </p>
        </div>
      </div>
    </template>
  </Card>

</template>
<style scoped>
.profile-card {
  display: flex;
  align-items: center;
}

.profile-image {
  width: 250px;
  height: auto;
  aspect-ratio: 1/1;  /* 정사각형 유지 */
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #d3d3d3;
}

.profile-image img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 비율 유지하며 꽉 채움 */
}

.profile-text {
  margin-left: 20px;
  flex-grow: 1;
}

.profile-text h1 {
  font-size: 24px;
  font-weight: bold;
}

.profile-text h2 {
  font-size: 18px;
  color: #666;
}

.profile-text p {
  font-size: 14px;
  line-height: 1.6;
  color: #333;
}
</style>
