<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";

const projects = ref([
  {
    id: "1st project",
    title: "처리율 제한기",
    description: "서버의 처리량을 제한하여 안정성을 확보하는 프로젝트",
    goal: "높은 트래픽에서도 안정적인 시스템 운영",
    keyFeatures: ["API 요청 제한", "레이트 리미터 적용", "모니터링 기능"],
    tools: "Spring Boot, Redis, Vue.js",
    contribution: 4,
    experience: 3,
    link: "#"
  }
]);

const toast = useToast();
const openProject = (link) => {
  toast.add({ severity: "info", summary: "프로젝트 이동", detail: "링크: " + link, life: 3000 });
};
</script>

<template>
  <div class="p-6">
    <Card v-for="(project, index) in projects" :key="index" class="shadow-lg p-6 border border-gray-300">
      <template #title>
        <div class="flex items-center space-x-4">
          <span class="text-xl font-bold">{{ project.id }}</span>
          <h2 class="text-2xl font-semibold">{{ project.title }}</h2>
        </div>
        <hr class="mt-2 border-dotted border-gray-400">
      </template>

      <template #content>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <!-- 왼쪽: 프로젝트 정보 -->
          <div class="pr-6 border-r">
            <p class="text-lg font-bold border-l-4 border-blue-400 pl-2 inline-block">소개</p>
            <p class="mt-2">{{ project.description }}</p>

            <p class="text-lg font-bold border-l-4 border-blue-400 pl-2 inline-block mt-4">목표</p>
            <p class="mt-2">{{ project.goal }}</p>

            <p class="text-lg font-bold border-l-4 border-blue-400 pl-2 inline-block mt-4">핵심 기능</p>
            <ul class="list-disc ml-5 text-sm mt-2">
              <li v-for="(feature, idx) in project.keyFeatures" :key="idx">{{ feature }}</li>
            </ul>
          </div>

          <!-- 오른쪽: Tool 및 기여도 -->
          <div class="pl-6">
            <p class="text-lg font-bold">Tool</p>
            <p class="text-sm text-gray-500">{{ project.tools }}</p>

            <p class="text-lg font-bold mt-4">개인 기여도 및 경험</p>
            <Rating :value="project.contribution" :readonly="true" :cancel="false" class="mt-2" />
            <Rating :value="project.experience" :readonly="true" :cancel="false" class="mt-2" />

            <p class="text-sm text-gray-600 mt-2">
              개발 과정에서 성능 최적화와 대용량 트래픽 제어에 집중하여 안정적인 서비스를 제공하였습니다.
            </p>
          </div>
        </div>
      </template>

      <template #footer>
        <Button label="프로젝트 보기(링크)" icon="pi pi-external-link" class="p-button-sm p-button-text"
                @click="openProject(project.link)" />
      </template>
    </Card>

    <Toast />
  </div>
</template>
