<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useQuizStore } from '~/stores/quiz/store'

const quizStore = useQuizStore()
const { examLoadQuiz } = quizStore
const { examlist } = storeToRefs(quizStore)
const router = useRouter()
const selectedExam = ref<any>(null)

const examList = computed(() => {
  return examlist.value || []
})

const selectExam = (exam: any) => {
  selectedExam.value = exam
}

const startQuiz = (setId: string) => {
  navigateTo({
  path: `/quizz/${setId}`,
  query: {
    courseId: selectedExam.value.code
  }
})
}
onBeforeMount(() => {
  if (examList.value.length === 0) {
   examLoadQuiz('ssc')
  }
})
</script>

<template>
  <v-container>
    <!-- HEADER -->
    <div class="d-flex align-center mb-6">
      <v-btn
        v-if="selectedExam"
        icon
        variant="text"
        @click="selectedExam = null"
      >
        <v-icon>mdi-arrow-left</v-icon>
      </v-btn>

      <h1 class="text-h5 font-weight-bold ml-2">
        {{ selectedExam ? selectedExam.name + ' Sets' : 'Select Exam' }}
      </h1>
    </div>

    <!-- EXAM LIST -->
    <v-row v-if="!selectedExam">
      <v-col
        v-for="exam in examList"
        :key="exam.name"
        cols="12"
        md="3"
      >
        <v-card
          elevation="3"
          class="pa-4 text-center"
          hover
        >
          <h3 class="text-subtitle-1 font-weight-bold">
            {{ exam.name }}
          </h3>

          <p class="text-caption text-medium-emphasis mt-2">
            {{ exam.desc }}
          </p>

          <v-btn
            block
            color="primary"
            class="mt-4"
            @click="selectExam(exam)"
          >
            View Quizzes
          </v-btn>
        </v-card>
      </v-col>
    </v-row>

    <!-- EXAM SETS -->
    <v-row v-else>
      <v-col
        v-for="set in selectedExam.sets"
        :key="set.id"
        cols="12"
        md="4"
      >
        <v-card elevation="2" class="pa-4">
          <h3 class="text-subtitle-1 font-weight-bold">
            {{ set.title }}
          </h3>

          <p class="text-caption mt-2">
            🧠 {{ set.totalQuestions }} Questions
          </p>
          <p class="text-caption">
            ⏱ {{ set.duration / 60 }} Minutes
          </p>

          <v-btn
            block
            color="primary"
            class="mt-4"
            @click="startQuiz(set.id)"
          >
            Start Test
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
