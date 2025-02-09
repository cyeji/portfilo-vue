<script setup>
import { ref } from "vue";

const projects = ref([
  {
    id: "1",
    title: "처리율 제한기",
    description: "서버의 처리량을 제한하여 안정성을 확보하는 프로젝트",
    details: "Spring Boot 기반으로 API 요청을 제한하는 레이트 리미터를 개발하였으며, Redis를 활용하여 성능 최적화를 진행하였습니다.",
    tools: "Spring Boot, Redis, Vue.js",
    contribution: 4,
    experience: 3
  },
  {
    id: "2",
    title: "AI 추천 시스템",
    description: "사용자 행동 데이터를 분석하여 맞춤형 추천을 제공하는 시스템",
    details: "TensorFlow를 활용하여 머신러닝 모델을 개발하였으며, FastAPI를 기반으로 API 서버를 구축하여 추천 서비스를 제공합니다.",
    tools: "Python, TensorFlow, FastAPI",
    contribution: 5,
    experience: 4
  },
  {
    id: "3",
    title: "실시간 채팅 애플리케이션",
    description: "WebSocket 기반으로 실시간 채팅을 제공하는 애플리케이션",
    details: "Spring WebFlux와 Vue.js를 활용하여 비동기 채팅 기능을 구현하고, Redis Pub/Sub을 이용하여 성능을 최적화하였습니다.",
    tools: "Spring WebFlux, Redis Pub/Sub, Vue.js",
    contribution: 4,
    experience: 5
  }
]);
</script>

<template>
  <div class="p-6">
    <Card class="shadow-lg p-6">
      <template #title>
        <h2 class="text-3xl font-bold mb-6">🚀 프로젝트 목록</h2>
      </template>

      <template #content>
        <Stepper value="1" class="basis-[50rem]">
          <!-- Step Titles -->
          <StepList>
            <Step v-for="project in projects" :key="project.id" :value="project.id">
              {{ project.title }}
            </Step>
          </StepList>

          <!-- Step Content -->
          <StepPanels>
            <StepPanel v-for="(project, index) in projects" :key="project.id" :value="project.id" v-slot="{ activateCallback }">
              <div class="flex flex-col h-48">
                <Card class="shadow-lg p-6 flex-grow">
                  <template #title>
                    <h3 class="text-xl font-bold">{{ project.title }}</h3>
                  </template>
                  <template #content>
                    <p><strong>설명:</strong> {{ project.details }}</p>
                    <p class="mt-2"><strong>사용 기술:</strong> {{ project.tools }}</p>

                    <div class="mt-3">
                      <p class="font-semibold">개인 기여도</p>
                      <Rating :value="project.contribution" :readonly="true" :cancel="false" />
                    </div>

                    <div class="mt-3">
                      <p class="font-semibold">경험</p>
                      <Rating :value="project.experience" :readonly="true" :cancel="false" />
                    </div>
                  </template>
                </Card>
              </div>

              <!-- Navigation Buttons: 중앙 정렬 -->
              <div class="flex pt-6 justify-center space-x-4">
                <Button v-if="index > 0" label="Back" severity="secondary" icon="pi pi-arrow-left"
                        @click="activateCallback(projects[index - 1].id)" />
                <Button v-if="index < projects.length - 1" label="Next" icon="pi pi-arrow-right" iconPos="right"
                        @click="activateCallback(projects[index + 1].id)" />
              </div>
            </StepPanel>
          </StepPanels>
        </Stepper>
      </template>
    </Card>
  </div>
</template>
