import axios from 'axios'
import { Bounce, toast } from 'react-toastify'
import { atuhenticateUser } from '../services/auth'
import type { IUserDataLogin } from '../types/authService'

const notify = (message: string) =>
  toast.error(message, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    theme: 'light',
    style: {
      fontSize: `1.5rem`,
    },
    transition: Bounce,
  })

export const searchToken = async (userData: IUserDataLogin): Promise<string | undefined> => {
  try {
    const token = await atuhenticateUser(userData)
    if (!token) {
      throw new Error('Invalid or missing token.')
    }
    localStorage.setItem('token', JSON.stringify(token))
    axios.defaults.headers.common['Authorization'] = token
    return token
  } catch (err: any) {
    const message =
      err.response?.data?.message || // erro de API
      err.message || // erro padrão
      'Unknown error while fetching token.'
    notify(message)
  }
}
