import React from 'react'
import { Base } from '../../layouts/Base'
import { workspaces } from '../../data/workspaces'
import { VStack } from '@chakra-ui/react'
import { WorkspaceCard } from './WorkspaceCard'

type WorkspaceProps = {}

export const Workspace: React.FC<WorkspaceProps> = () => {
  return (
    <Base>
      <VStack
        w={'100%'}
        gridTemplateColumns={'1fr'}
        display={'grid'}
        my={3}
        mx={4}
        gap={'12px'}
      >
        {workspaces.map((item: any) => {
          return (
            <WorkspaceCard item={item} />
          )
        })}
      </VStack>
    </Base>
  )
}

