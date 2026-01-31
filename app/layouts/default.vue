<template>
  <v-app>
    <AppHeader />

    <v-main class="bg-grey-lighten-4">
      <slot />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script setup>
import AppHeader from '@/components/common/AppHeader.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>
