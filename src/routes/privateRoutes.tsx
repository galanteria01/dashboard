import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/home/Home'
import { Workspace } from '../components/workspace/Workspace'
import Admin from '../components/admin/Admin'
import Profile from '../components/profile/Profile'

export const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/workspace",
    element: <Workspace />
  },
  {
    path: "/admin",
    element: <Admin />
  },
  {
    path: "/profile",
    element: <Profile />
  }
])

