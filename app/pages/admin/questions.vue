<template>
  <NuxtLayout name="admin">
    <div class="d-flex justify-space-between mb-4">
      <h1 class="text-h5 font-weight-bold">Question Bank</h1>

      <v-btn color="primary">
        <v-icon start>mdi-upload</v-icon>
        Upload CSV
      </v-btn>
    </div>

    <v-data-table
      :headers="headers"
      :items="questions"
      item-key="id"
      density="comfortable"
    >
      <template #item.actions="{ item }">
        <v-btn icon size="small">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-btn icon size="small" color="red">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </template>
    </v-data-table>
  </NuxtLayout>
</template>

<script setup lang="ts">
const headers = [
  { title: 'Question', key: 'question' },
  { title: 'Exam', key: 'exam' },
  { title: 'Section', key: 'section' },
  { title: 'Actions', key: 'actions' }
]

const questions = [
  {
    id: 1,
    question: '2 + 2 = ?',
    exam: 'SSC',
    section: 'Maths'
  },
  {
    id: 2,
    question: 'Capital of India?',
    exam: 'UPSC',
    section: 'GK'
  }
]
</script>
