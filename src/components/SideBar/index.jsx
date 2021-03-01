
import React from 'react'
import {
  Box
} from 'grommet'
import {
  Group,
  UserAdd
} from 'grommet-icons'
import { SideBarContainer, SidebarStyled, ButtonStyled, LinkStyled, NavStyled } from './styles'

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
  <NavStyled gap='medium'>
    <SidebarButton icon={<Group />} label='Users' src='' />
    <SidebarButton icon={<UserAdd />} label='Create User' src='createUser' />
  </NavStyled>
)

export const SideBar = () => (
  <SideBarContainer data-testid='sideBar'>
    <SidebarStyled
      responsive={false}
      background='neutral-2'
    >
      <MainNavigation />
    </SidebarStyled>
  </SideBarContainer>
)
