<script setup lang="ts">
import type { Option } from '@/domain/interface/common'
const selectedOption = ref<string>('')
const props = defineProps<{
  options: Option[]
  selected?: string
}>()

const emit = defineEmits<{
  (e: 'select', index: string): void
}>()

const selectOption = (index: string) => {
  emit('select', index)
}
const isSelectedOption = (index: string) => {
  return selectedOption.value === index
}
watch(
  () => props.selected,
  (newVal) => {
    selectedOption.value = newVal || ''
  },
  { immediate: true }
)
</script>
<template>
  <v-row>
    <v-col
      v-for="(option, index) in options"
      :key="index"
      cols="12"
    >
      <v-card
        class="pa-3 d-flex align-center"
        :color="isSelectedOption(option.id) ? 'secondary' : undefined"
        :variant="isSelectedOption(option.id) ? 'flat' : 'outlined'"
        @click="selectOption(option.id)"
      >
        <!-- Option Text -->
        <span
          :class="isSelectedOption(option.id) ? 'text-white' : ''"
        >
          <span>{{ option.en }}</span>
          <span v-if="option.hi && option.hi != option.en">
            / {{ option.hi }}
          </span>
        </span>
      </v-card>
    </v-col>
  </v-row>
</template>

