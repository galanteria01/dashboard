import { Image } from '@chakra-ui/react'
import React from 'react'

type WorkspaceIconCard = {
  image: string
}

const WorkspaceIcon: React.FC<WorkspaceIconCard> = ({ image }) => {
  return (
    <Image h={12} src={image} />
  )
}

export default WorkspaceIcon