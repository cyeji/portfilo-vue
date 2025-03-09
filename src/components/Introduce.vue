<template>
  <Card class="intro-card p-6">
    <template #content>
      <div class="intro-container">
        <h3 class="title">자기소개</h3>

        <div v-for="(section, index) in introSections" :key="index" class="section">
          <h4 class="highlight">{{ section.title }}</h4>
          <p>{{ section.content }}</p>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";

const introSections = ref([
  {
    title: "실무 경험을 통해 성장합니다.",
    content:
      "서비스의 기획부터 개발, 배포, 운영까지 전 과정에 직접 참여하며 기술적 문제를 해결하고 최적의 아키텍처를 고민하는 과정에서 성장해왔습니다. 코드의 유지보수성과 확장성을 고려한 설계를 중시하며, 팀원들과 협력하여 더 나은 개발 환경을 구축하는 데 기여하고 있습니다.",
  },
  {
    title: "오늘보다 더 나은 개발자가 되기 위해 끊임없이 성장합니다.",
    content:
      "더 좋은 개발자로 성장하기 위해 매일 새로운 기술을 익히고 실무에 적용하려 노력합니다. 단순히 기능을 구현하는 것을 넘어 아키텍처를 고민하고, 코드의 효율성을 높이는 개발자가 되고자 합니다. 새로운 기술 스택을 학습하고, 개발 커뮤니티에서 다양한 사례를 공유하며, 꾸준한 학습과 실험을 통해 더 나은 내일을 만들어가는 것이 저의 목표입니다.",
  },
]);
</script>

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
