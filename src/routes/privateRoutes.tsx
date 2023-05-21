import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/home/Home'
import { Workspace } from '../components/workspace/Workspace'

export const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/workspace",
    element: <Workspace />
  }
])

