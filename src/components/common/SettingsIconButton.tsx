import { CloseIcon, HamburgerIcon, InfoIcon, SettingsIcon } from '@chakra-ui/icons'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { FaSignOutAlt, FaUserAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const SettingsIconButton = () => {
  const navigate = useNavigate()
  const signout = () => { }
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
        <MenuItem onClick={() => navigate("/profile")} icon={<FaUserAlt />} command='⌘T'>
          Profile
        </MenuItem>
        <MenuItem onClick={signout} icon={<FaSignOutAlt />} command='⌘N'>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
