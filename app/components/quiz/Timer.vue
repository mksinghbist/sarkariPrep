<template>
  <v-chip color="primary" variant="outlined">
    ⏱ {{ time }}s
  </v-chip>
</template>

<script setup lang="ts">
const props = defineProps<{ time: number }>()
const emit = defineEmits(['timeout'])

watch(
  () => props.time,
  (val) => {
    if (val === 0) emit('timeout')
  }
)
</script>
