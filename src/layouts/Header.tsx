import { HamburgerIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Image } from '@chakra-ui/react'
import React from 'react'
import { ColorModeSwitcher } from '../components/common/ColorModeSwitcher'
import { SettingsIconButton } from '../components/common/SettingsIconButton'
import { MenuIconButton } from '../components/common/MenuIconButton'

type HeaderProps = {

}

export const Header: React.FC<HeaderProps> = (props) => {
  return (
    <HStack m={4} maxW={'100vw'} justifyContent={'space-between'}>
      <HStack>
        <MenuIconButton />
        <Image
          src={'/dashboard.png'}
          h={50}
        />
      </HStack>
      <HStack>
        {/* <IconButton
          colorScheme='purple'
          aria-label='Call Segun'
          size='lg'
          borderRadius={"50%"}
          icon={<SettingsIcon />}
        /> */}
        <SettingsIconButton />
        <ColorModeSwitcher />
      </HStack>
    </HStack>
  )
}

