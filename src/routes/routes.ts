import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Home from '../pages/home/Home'
import Login from '../pages/Login/Login'
import ProductDetail from '../pages/ProductDetail/ProductDetail'
import Register from '../pages/Register/Register'

export const routes = createBrowserRouter([
  {
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'productDetail/:Id', Component: ProductDetail },
    ],
  },
  {
    path: 'auth',
    children: [
      { path: 'login', Component: Login },
      { path: 'register', Component: Register },
    ],
    // errorElement:
  },
])
