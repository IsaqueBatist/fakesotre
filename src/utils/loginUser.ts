import axios from 'axios'
import { atuhenticateUser } from '../services/auth'
import type { IUserDataLogin } from '../types/authService'

export const loginUser = async (userData: IUserDataLogin) => {
  try {
    const token = await atuhenticateUser(userData)
    if (token) {
      localStorage.setItem('token', JSON.stringify(token))
      axios.defaults.headers.common['Authorization'] = token
    }
  } catch (err) {
    console.error(err)
  }
}
