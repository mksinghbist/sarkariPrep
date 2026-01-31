<script setup lang="ts">
// import { useAuth } from '@/composables/useAuth'
// import { useRouter } from 'vue-router'

// const auth = useAuth()
// const router = useRouter()

// onMounted(() => {
//   if (auth.loggedIn) {
//     router.replace('/dashboard')
//   }
// })

const goToAuth = () => {
  navigateTo('/login')
}
</script>

<template>
  <v-container fluid class="fill-height d-flex align-center">
    <v-row class="w-100" align="center">

      <!-- Left Content -->
      <v-col cols="12" md="6" class="px-8">
        <h1 class="text-h3 font-weight-bold text-primary">
          SarkariPrep
        </h1>

        <p class="text-subtitle-1 text-medium-emphasis mt-4">
          Daily quizzes, full mock tests, analytics & ranks —
          everything you need to crack government exams.
        </p>

        <v-btn
          color="primary"
          size="large"
          class="mt-6"
          @click="goToAuth"
        >
          Start Preparing
        </v-btn>
      </v-col>

      <!-- Right Illustration -->
      <v-col cols="12" md="6" class="text-center d-none d-md-block">
        <v-img
          src="/exam-illustration.svg"
          max-width="420"
          class="mx-auto"
        />
      </v-col>

    </v-row>
  </v-container>
</template>
