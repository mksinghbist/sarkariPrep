import type { AuthState } from './types'

export const getters = {
  isAuthenticated: (state: AuthState) => state.loggedIn,
  isAdmin: (state: AuthState) => state.user?.role === 'ADMIN',
  userName: (state: AuthState) => state.user?.name
}
