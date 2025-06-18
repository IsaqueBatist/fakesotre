import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../context/userContext'

export default function RequireAuth() {
  const isAuthenticated = useAuth()
  const location = useLocation()

  if (!isAuthenticated.isAuthenticated) {
    return <Navigate to={'auth/login'} state={{ from: location }} replace />
  }
  return <Outlet />
}
