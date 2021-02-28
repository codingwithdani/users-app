
import React from 'react'
import {
  Box,
  Nav
} from 'grommet'
import {
  Group,
  UserAdd
} from 'grommet-icons'
import { SideBarContainer, SidebarStyled, ButtonStyled, LinkStyled } from './styles'

const SidebarButton = ({ icon, label, src }) => (
  <Box>
    <LinkStyled to={`/${src}`}>
      <ButtonStyled
        gap='medium'
        alignSelf='start'
        plain
        icon={icon}
        label={label}
      />
    </LinkStyled>
  </Box>
)

const MainNavigation = () => (
  <Nav gap='medium'>
    <SidebarButton icon={<Group />} label='Users' src='' />
    <SidebarButton icon={<UserAdd />} label='Create User' src='createUser' />
  </Nav>
)

export const SideBar = () => (
  <SideBarContainer>
    <SidebarStyled
      responsive={false}
      background='neutral-2'
    >
      <MainNavigation />
    </SidebarStyled>
  </SideBarContainer>
)
