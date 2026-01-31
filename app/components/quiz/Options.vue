<script setup lang="ts">
type Option = {
  id: string
  en: string
  hi?: string
}
const selectedOption = ref<string>('')
const props = defineProps<{
  options: Option[]
  selected?: string
}>()

const emit = defineEmits<{
  (e: 'select', index: number): void
}>()

const selectOption = (index: number) => {
  emit('select', index)
}
const isSelectedOption = (index: number) => {
  return selectedOption.value === index.toString()
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
        :color="isSelectedOption(index) ? 'secondary' : undefined"
        :variant="isSelectedOption(index) ? 'flat' : 'outlined'"
        @click="selectOption(index)"
      >
        <!-- Option Text -->
        <span
          :class="isSelectedOption(index) ? 'text-white' : ''"
        >
          <span>{{ option.en }}</span>
          <span v-if="option.hi">
            / {{ option.hi }}
          </span>
        </span>
      </v-card>
    </v-col>
  </v-row>
</template>

