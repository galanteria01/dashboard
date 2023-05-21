import * as React from "react"
import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import { privateRouter } from "./routes/privateRoutes"
import { publicRouter } from "./routes/publicRoutes"

export const App = () => {
  const [authenticated, setAuthenticated] = React.useState<Boolean>(true)
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={authenticated ? privateRouter : publicRouter} />
    </ChakraProvider>
  )
}
