import { createContext, useContext } from 'react'

const userContext = createContext({ isAuthenticated: false })

export const useAuth = () => {
  return useContext(userContext)
}
