import { CloseIcon, HamburgerIcon, InfoIcon, SettingsIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'

export const SettingsIconButton = () => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<SettingsIcon />}
        colorScheme='purple'
        size='lg'
        borderRadius={"50%"}

      />
      <MenuList>
        <MenuItem icon={<InfoIcon />} command='⌘T'>
          Profile
        </MenuItem>
        <MenuItem icon={<CloseIcon />} command='⌘N'>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
