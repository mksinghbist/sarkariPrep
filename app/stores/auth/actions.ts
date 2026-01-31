import { authService } from '@/services/auth.service'
import type { AuthState } from './types'

export const actions = {
  async sendOtp(this: AuthState, payload: { mobile: string }) {
    return await authService.sendOtp(payload)
  },

  async verifyOtp(
    this: AuthState,
    payload: { mobile: string; otp: string }
  ) {
    const res = await authService.verifyOtp(payload)
    this.token = res.token
    this.user = res.user
    this.loggedIn = true
  },

  logout(this: AuthState) {
    this.user = null
    this.token = null
    this.loggedIn = false
  }
}
