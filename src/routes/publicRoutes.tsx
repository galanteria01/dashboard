import { createBrowserRouter } from 'react-router-dom'
import { Login } from '../components/login/Login'
import { Signin } from '../components/signin/Signin'
import { Auth } from '../components/auth/Auth'

export const publicRouter = createBrowserRouter([
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/",
    element: <Auth />
  }
])
