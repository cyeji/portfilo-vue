<script setup>
import { ref } from "vue";

const educationList = ref([
  {
    year: "2021",
    title: "정보처리기사 취득",
    description: "한국산업인력공단에서 발급한 정보처리기사 자격증을 취득하였습니다.",
    details: "이 시험에서는 소프트웨어 개발, 데이터베이스, 운영체제, 네트워크, 보안 등의 지식을 평가하며, 2021년 11월 16일에 자격증을 취득하였습니다.",
    icon: "pi pi-check-circle",
    showModal: false // 모달 활성화 여부
  },
  {
    year: "2024",
    title: "INNER Circle 교육",
    description: "2024년 11월부터 2025년 3월까지 진행된 INNER Circle 교육을 수료하였습니다.",
    details: "해당 교육에서는 소프트웨어 개발 방법론, DevOps, 프로젝트 협업 등의 실습을 진행하였으며, 256시간 이상의 교육을 이수하였습니다.",
    icon: "pi pi-book",
    showModal: true // 이 항목은 모달을 띄우지 않음
  }
]);

const selectedEducation = ref(null);
const isModalOpen = ref(false);

const openModal = (education) => {
  if (education.showModal) { // 모달 활성화된 항목만 열기
    selectedEducation.value = education;
    isModalOpen.value = true;
  }
};
</script>

<template>
  <div class="p-6">
    <Card class="shadow-lg">
      <template #title>
        <h2 class="text-3xl font-bold mb-6">📜 교육 및 자격증</h2>
      </template>
      <template #content>
        <!-- 타임라인 -->
        <Timeline :value="educationList" align="left">
          <template #marker="slotProps">
            <span class="flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white cursor-pointer"
                  @click="openModal(slotProps.item)">
              <i :class="slotProps.item.icon"></i>
            </span>
          </template>
          <template #content="slotProps">
            <div class="cursor-pointer hover:text-blue-500 transition duration-200">
              <h3 class="text-lg font-semibold">{{ slotProps.item.year }} - {{ slotProps.item.title }}</h3>
              <p class="text-gray-600 text-sm">{{ slotProps.item.description }}</p>
              <Button v-if="slotProps.item.showModal"
                      label="Read more" text class="mt-2 text-blue-500"
                      @click="openModal(slotProps.item)" />
            </div>
          </template>
        </Timeline>
      </template>
    </Card>

    <!-- 모달 (Dialog) -->
    <Dialog :visible="isModalOpen" modal header="자세한 정보" class="w-1/2"
            @update:visible="isModalOpen = $event">
      <div v-if="selectedEducation">
        <h3 class="text-xl font-bold">{{ selectedEducation.year }} - {{ selectedEducation.title }}</h3>
        <p class="mt-2 text-gray-600">{{ selectedEducation.details }}</p>
      </div>
      <template #footer>
        <Button label="닫기" icon="pi pi-times" class="p-button-text" @click="isModalOpen = false" />
      </template>
    </Dialog>
  </div>
</template>
