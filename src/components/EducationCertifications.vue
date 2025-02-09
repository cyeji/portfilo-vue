<script setup>
import { ref } from "vue";

const events = ref([
  {
    year: "2019",
    title: "정보처리기사",
    description: "한국산업인력공단에서 발급한 정보처리기사 자격증을 취득하였습니다.",
    details: [
      "발급기관: 한국산업인력공단",
      "발급일자: 2019.11.22",
      "등록번호: 19203101038V"
    ],
    icon: "pi pi-check-circle"
  },
  {
    year: "2023",
    title: "AWS Certified Cloud Practitioner",
    description: "AWS에서 클라우드 기본 자격증을 취득하였습니다.",
    details: [
      "발급기관: AWS",
      "발급일자: 2023.07.28",
      "등록번호: FOYHPLR2VB1EQY91"
    ],
    icon: "pi pi-cloud"
  },
  {
    year: "2024",
    title: "SQLD",
    description: "데이터베이스 관련 지식을 검증하는 SQLD 자격증을 취득하였습니다.",
    details: [
      "발급기관: 한국데이터산업진흥원",
      "발급일자: 2024.12.13",
      "등록번호: SQLD-055004149"
    ],
    icon: "pi pi-database"
  }
]);
</script>

<template>
  <div class="flex flex-col gap-6">

    <!-- 타임라인 및 카드 -->
    <Card class="shadow-lg">
      <template #title>
        <h2 class="text-xl font-semibold">📜 교육 및 자격증</h2>
      </template>
      <template #content>
        <div class="relative">
          <!-- 가로형 타임라인 -->
          <Timeline :value="events" layout="horizontal">
            <template #marker="slotProps">
              <span
                class="flex items-center justify-center w-10 h-10 rounded-full bg-green-500 text-white"
              >
                <i :class="slotProps.item.icon"></i>
              </span>
            </template>
            <template #content="slotProps">
              <p class="text-center text-lg font-bold">{{ slotProps.item.year }}</p>
            </template>
          </Timeline>

          <!-- 카드 배치 -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card v-for="(event, index) in events" :key="index" class="shadow-lg">
              <template #title>
                <h2 class="text-lg font-bold">{{ event.title }}</h2>
              </template>
              <template #content>
                <p class="text-gray-600">{{ event.description }}</p>
                <ul class="mt-2 text-sm text-gray-500">
                  <li v-for="(detail, idx) in event.details" :key="idx">• {{ detail }}</li>
                </ul>
              </template>
            </Card>
          </div>
        </div>
      </template>
    </Card>

  </div>
</template>
