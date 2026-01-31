<script setup>
import AppLoader from '@/components/common/AppLoader.vue'

const loading = ref(true)

onMounted(() => {
  setTimeout(() => {
    loading.value = false
  }, 2000) // simulate app init
})
</script>
<template>
  <v-app>
    <AppLoader v-if="loading" />
    <NuxtLayout v-else>
      <NuxtPage />
    </NuxtLayout>
  </v-app>
</template>

