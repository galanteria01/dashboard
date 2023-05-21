import { Button, Center, HStack, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { UnlockIcon, PlusSquareIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import Lottie from 'react-lottie';
import * as auth from '../../assets/animations/lottie/auth.json'


export const Auth = () => {
  const navigate = useNavigate()
  const buttonStyle = {
    display: 'block',
    margin: '10px auto'
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: auth,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <Center h='100vh' color='white'>
      <VStack mx={100}>
        <Lottie
          options={defaultOptions}
          height={250}
          width={250}
        />
        <Heading as='h2' size='3xl' noOfLines={1} py={8} >
          Welcome to the Dashboard
        </Heading>
        <Text
          align={'center'}
          fontSize='lg'
        >
          With our platform, users can effortlessly set up personalized workspaces with the necessary tools,
          libraries, and resources required for ML development. These workspaces act as centralized hubs for
          teams to collaborate, iterate, and share ideas, fostering a productive and streamlined ML workflow.
        </Text>
        <HStack py={8}>
          <Button
            onClick={() => navigate('/login')}
            leftIcon={<UnlockIcon />}
            colorScheme='purple'
            variant='solid'
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/signin')}
            leftIcon={<PlusSquareIcon />}
            colorScheme='purple'
            variant='solid'
          >
            Signup
          </Button>
        </HStack>
      </VStack>
    </Center>
  )
}

