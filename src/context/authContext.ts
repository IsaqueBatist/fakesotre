import { createContext, useContext } from 'react'

const authContext = createContext({ isAuthenticated: false })

export const useAuth = () => {
  return useContext(authContext)
}
