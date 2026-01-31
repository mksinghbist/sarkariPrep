import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { getActivePinia } from 'pinia'

export default defineNuxtPlugin(() => {
  const pinia = getActivePinia()

  if (pinia) {
    pinia.use(piniaPluginPersistedstate)
  }
})
