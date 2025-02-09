<template>
  <Card>
    <template #title>스킬</template>
    <template #content>
      <div class="skills-container">
        <div v-for="(skill, index) in skills" :key="index" class="skill-item">
          <!-- 왼쪽 아이콘 -->
          <div class="skill-icon">
            <Avatar :image="skill.image" size="xlarge" shape="circle" />
            <h5>{{ skill.name }}</h5>
          </div>

          <!-- 오른쪽 스킬 선택 -->
          <div class="skill-level">
            <label v-for="level in levels" :key="level" class="radio-label">
              <input
                type="radio"
                :name="`skill-${index}`"
                :value="level"
                v-model="selectedSkills[index]"
                :disabled="skill.fixed && level !== '상'"
              />
              <span :class="{ selected: selectedSkills[index] === level }">{{ level }}</span>
            </label>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from "vue";

const skills = ref([
  { name: "Back", image: "https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png", fixed: true },
  { name: "DB", image: "https://primefaces.org/cdn/primevue/images/organization/walter.jpg", fixed: false },
  { name: "Infra", image: "https://www.gravatar.com/avatar/05dfd4b41340d09cae045235eb0893c3?d=mp", fixed: false },
  { name: "Frontend", image: "https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png", fixed: false },
  { name: "Security", image: "https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png", fixed: false },
  { name: "DevOps", image: "https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png", fixed: false }
]);

const levels = ["상", "중", "하"];
const selectedSkills = ref(skills.value.map(skill => skill.fixed ? "상" : null));
</script>

<style scoped>
/* 🌟 3열 배치 적용 */
.skills-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 1줄에 3개씩 */
  gap: 20px; /* 각 셀 간격 */
  justify-content: center;
}

.skill-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.skill-icon {
  display: flex;
  align-items: center;
  gap: 10px;
}

.skill-icon h5 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.skill-level {
  display: flex;
  gap: 15px;
}

.radio-label {
  display: flex;
  align-items: center;
  font-size: 20px;
  cursor: pointer;
  position: relative;
}

.radio-label input {
  display: none;
}

.radio-label span {
  padding: 5px 10px;
  border-radius: 5px;
  transition: 0.3s;
  font-weight: bold;
}

.radio-label span.selected {
  text-decoration: underline;
  font-size: 22px;
  color: #000;
  font-weight: bold;
}

/* 선택 불가능한 요소 스타일 */
.radio-label input:disabled + span {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
