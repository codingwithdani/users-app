import styled from 'styled-components'

import {
  Stack,
  Grommet,
  Sidebar,
  Button,
  Text
} from 'grommet'

export const SideBarContainer = styled(Grommet)`
    color: gray;
    width: 70px;
    justify-content: center;
    @media (min-width: 768px) {
      min-width: 200px;
      top: 56px;
    }
`

export const SidebarStyled = styled(Sidebar)`
    width: 100%;
    background-color: rgb(123,127,190);
    padding-top: 50px;
`

export const ButtonStyled = styled(Button)`
  color: #ffff;
  font-size: 0;
  &:hover {
    background: #bbb;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const SidebarHeaderText = styled(Text)`
  font-size: 0;
  @media (min-width: 768px) {
      font-size: 14px;
  }
`

export const StackStyled = styled(Stack)`
  right: 10px;
`
