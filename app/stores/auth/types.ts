export interface User {
  id: string
  name: string
  mobile: string
  email?: string
  role: 'USER' | 'ADMIN'
}

export interface AuthState {
  user: User | null
  token: string | null
  loggedIn: boolean
}
