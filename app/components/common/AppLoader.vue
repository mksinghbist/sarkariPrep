<script setup>
import loader from '@/assets/loader.jpeg'
</script>
<template>
  <div class="loader-wrapper">
    <h1>SarkariPrep</h1>
    <p>Prepare Smart. Crack Sarkari Exams.</p>
    <img :src="loader" class="loader-gif" />
  </div>
</template>

<style scoped>
.loader-wrapper {
  position: fixed;
  inset: 0;
  background: #f4f6f8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.loader-gif {
  width: 400px;
  margin-bottom: 16px;
}

h1 {
  font-weight: 700;
  letter-spacing: 1px;
  color: #263238;
}

p {
  color: #607d8b;
}

@media (max-width: 768px) {
  h1,
  p {
    display: none;
  }
}

@media (min-width: 769px) {
  .loader-gif {
    display: none;
  }
}
</style>
