import React from 'react'
import { WorkspaceItem } from '../../types/WorkspaceItem'
import { Card, HStack, IconButton, Text, VStack } from '@chakra-ui/react';
import { FaAngleRight } from 'react-icons/fa';
import WorkspaceIcon from './WorkspaceIcon';
import vscode from '../../assets/images/vscode.png'

type WorkspaceCardProps = {
  item: WorkspaceItem;
}

export const WorkspaceCard: React.FC<WorkspaceCardProps> = ({ item }) => {
  const handleClick = () => { }
  return (
    <Card p={'12px'}>
      <HStack justifyContent={'space-between'} alignItems={'center'}>
        <HStack>
          <WorkspaceIcon image={vscode} />
          <VStack alignContent={'flex-start'}>
            <Text fontWeight={'semibold'}>{item.name}</Text>
            <Text fontSize={14} color={'grey'}>{item.image}</Text>
          </VStack>
        </HStack>

        <IconButton
          icon={<FaAngleRight />}
          aria-label='Show More'
          onClick={() => handleClick()}
        />
      </HStack>

    </Card>
  )
}

