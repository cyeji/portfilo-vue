<script setup>
import Intro from '@/components/Intro.vue'
import Introduce from '@/components/Introduce.vue'
import Project from '@/components/Project.vue'
import Certification from '@/components/Certification.vue'
import GithubProfile from '@/components/GithubProfile.vue'
import Education from '@/components/Education.vue'
</script>

<template>
  <intro class="container"/>
  <introduce class="card-spacing"/>
  <github-profile class="card-spacing"/>
  <certification class="card-spacing"/>
  <education class="card-spacing"/>
  <project class="card-spacing"/>
</template>

<style scoped>
/* 카드 간 간격 조정 */
.card-spacing {
  margin-bottom: 24px; /* 카드 사이 간격 */
}

/* 부모 컨테이너에 flex 적용 */
.container {
  display: flex;
  flex-direction: column;
  gap: 24px; /* 카드 사이 간격 조정 */
}
</style>
