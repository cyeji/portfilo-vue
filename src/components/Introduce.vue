<template>
  <Card class="intro-card">
    <template #content>
      <div class="intro-container">
        <h3 class="title">자기소개</h3>

        <div class="section">
          <h4 class="highlight">실무 경험을 통해 성장합니다.</h4>
          <p>
            웹 서비스의 설계부터 개발, 배포까지 직접 경험하며 실무 역량을 쌓아왔습니다.
            프로젝트의 전 과정을 수행하며 기술적인 문제를 해결하고, 보다 나은 아키텍처를 고민하며 성장하고 있습니다.
          </p>
        </div>

        <div class="section">
          <h4 class="highlight">효율적인 개발 환경을 구축합니다.</h4>
          <p>
            온프레미스 환경에서 클라우드로의 전환 과정에 참여하여 자동 배포 프로세스를 구축한 경험이 있습니다.
            CI/CD 파이프라인을 설정하여 배포 속도를 개선하고, 운영 비용을 절감하는 데 기여했습니다.
          </p>
        </div>

        <div class="section">
          <h4 class="highlight">성능을 개선합니다.</h4>
          <p>
            비동기 이벤트 프로그래밍을 적용하여 웹사이트의 성능을 99% 향상시킨 경험이 있습니다.
            비효율적인 동기 처리 방식을 개선하고, 이벤트 기반 아키텍처를 도입하여 응답 속도를 최적화하였습니다.
          </p>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
/* 전체 카드 스타일 */
.intro-card {
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

/* 섹션 간격 */
.section {
  margin-bottom: 16px;
}

/* 강조된 소제목 스타일 */
.highlight {
  font-size: 16px;
  font-weight: bold;
  background: #e8f0ff; /* 연한 파란색 배경 */
  padding: 4px 8px;
  border-radius: 4px;
  display: inline-block;
}

/* 일반 텍스트 스타일 */
p {
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin-top: 6px;
}
</style>
