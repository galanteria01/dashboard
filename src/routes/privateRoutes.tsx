import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../components/home/Home'

export const privateRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

