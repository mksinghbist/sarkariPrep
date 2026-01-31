<template>
  <v-card class="pa-4 mb-4">
    <p class="text-caption mb-2">
      Question {{ index + 1 }} of {{ total }}
    </p>

    <h3 class="text-subtitle-1 font-weight-medium">
      <p>{{ question.question_en }}</p>
      <p v-if="question.question_hi">{{ question.question_hi }}</p>
    </h3>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{
  question: any
  index: number
  total: number
}>()
</script>
