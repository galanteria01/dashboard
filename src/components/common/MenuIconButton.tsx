import { HamburgerIcon, InfoIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

export const MenuIconButton = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<HamburgerIcon />}
        colorScheme='purple'
        size='lg'
        borderRadius={"50%"}

      />
      <MenuList>
        <MenuItem icon={<InfoIcon />} command='⌘T'>
          Home
        </MenuItem>
        <MenuItem icon={<InfoIcon />} command='⌘N'>
          Workspace
        </MenuItem>
        <MenuItem icon={<InfoIcon />} command='⌘N'>
          Admin
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
