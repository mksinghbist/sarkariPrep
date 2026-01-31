<script setup lang="ts">
import { useQuizStore } from '~/stores/quiz/store'

const quizStore = useQuizStore()

const total = quizStore.questions.length
const attempted = Object.keys(quizStore.answers).length

const accuracy = computed(() => {
  // placeholder – backend will calculate
  return Math.floor((attempted / total) * 100)
})
</script>
<template>
  <v-container>
    <h1 class="text-h5 font-weight-bold mb-6">
      Quiz Result
    </h1>

    <v-row>
      <v-col cols="12" md="4">
        <v-card class="pa-4 text-center">
          <p class="text-subtitle-2">Total Questions</p>
          <h2>{{ total }}</h2>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4 text-center">
          <p class="text-subtitle-2">Attempted</p>
          <h2>{{ attempted }}</h2>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="pa-4 text-center">
          <p class="text-subtitle-2">Accuracy</p>
          <h2>{{ accuracy }}%</h2>
        </v-card>
      </v-col>
    </v-row>

    <v-btn
      color="primary"
      class="mt-6"
      to="/dashboard"
    >
      Back to Dashboard
    </v-btn>
  </v-container>
</template>
