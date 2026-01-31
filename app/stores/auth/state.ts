import type { AuthState } from './types'

export const state = (): AuthState => ({
  user: null,
  token: null,
  loggedIn: false
})
