import React from 'react'
import { Box, Container, HStack, VStack } from '@chakra-ui/react'
import { Header } from './Header'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

type BaseProps = {
  children: React.ReactNode
}

export const Base: React.FC<BaseProps> = ({ children }) => {
  return (
    <Box m={4}>
      <Header />
      <HStack>
        {/* <Sidebar /> */}
        {children}
      </HStack>
      <Footer />
    </Box>
  )
}

