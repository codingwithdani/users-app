
import React from 'react'
import {
  Avatar,
  Box,
  Nav
} from 'grommet'
import {
  Group,
  UserAdd
} from 'grommet-icons'
import { Link } from 'wouter'
import { SideBarContainer, SidebarStyled, ButtonStyled, SidebarHeaderText, StackStyled } from './styles'

const src = '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80'

export const SidebarHeader = () => (
  <Box align='center' gap='small' direction='row'>
    <StackStyled alignSelf='start' align='center' anchor='top-right'>
      <Avatar src={src} />
    </StackStyled>
    <SidebarHeaderText>Daniela Aguilera</SidebarHeaderText>
  </Box>
)

const SidebarButton = ({ icon, label, src }) => (
  <Box pad='small'>
    <Link to={`/${src}`}>
      <ButtonStyled
        gap='medium'
        alignSelf='start'
        plain
        icon={icon}
        label={label}
      />
    </Link>
  </Box>
)

const MainNavigation = () => (
  <Nav>
    <SidebarButton icon={<Group />} label='Users' src='users' />
    <SidebarButton icon={<UserAdd />} label='Create User' src='createUser' />
  </Nav>
)

export const SideBar = () => (
  <SideBarContainer>
    <SidebarStyled
      responsive={false}
      background='neutral-2'
      header={<SidebarHeader />}
      pad={{ left: 'medium', right: 'large', vertical: 'medium' }}
    >
      <MainNavigation />
    </SidebarStyled>
  </SideBarContainer>
)
