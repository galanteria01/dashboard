import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./components/common/ColorModeSwitcher"
import { Logo } from "./components/common/Logo"
import { RouterProvider } from "react-router-dom"
import { privateRouter } from "./routes/privateRoutes"
import { publicRouter } from "./routes/publicRoutes"

export const App = () => {
  const [authenticated, setAuthenticated] = React.useState<Boolean>(false)
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={authenticated ? privateRouter : publicRouter} />
    </ChakraProvider>
  )
}
