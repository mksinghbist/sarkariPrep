import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: { enabled: true },

  css: [
    'vuetify/styles'
  ],

  build: {
    transpile: ['vuetify']
  },

  modules: [
    '@pinia/nuxt'
  ],

  // ✅ IMPORTANT: ensure client-only plugins load correctly
  plugins: [
    '~/plugins/pinia-persist.client'
  ],

  // ✅ Optional but recommended
  ssr: true
})
