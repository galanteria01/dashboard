import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { FaDashcube, FaHamburger, FaHome, FaUser } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

export const MenuIconButton = () => {
  const navigate = useNavigate()
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        icon={<FaHamburger />}
        colorScheme='purple'
        size='lg'
        borderRadius={"50%"}

      />
      <MenuList>
        <MenuItem onClick={() => navigate("/")} icon={<FaHome />} command='⌘T'>
          Home
        </MenuItem>
        <MenuItem onClick={() => navigate("/workspace")} icon={<FaDashcube />} command='⌘N'>
          Workspace
        </MenuItem>
        <MenuItem onClick={() => navigate("/admin")} icon={<FaUser />} command='⌘N'>
          Admin
        </MenuItem>
      </MenuList>
    </Menu>
  )
}
