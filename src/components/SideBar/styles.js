import {
  Grommet,
  Sidebar,
  Button
} from 'grommet'
import styled from 'styled-components'
import { Link } from 'wouter'

export const SideBarContainer = styled(Grommet)`
    color: gray;
    width: 15%;
    justify-content: center;
    @media (min-width: 768px) {
      min-width: 200px;
      top: 56px;
    }
`

export const SidebarStyled = styled(Sidebar)`
    background-color: rgb(123,127,190);
    padding: 0;
    padding-top: 50px;
    width: 100%;
`

export const ButtonStyled = styled(Button)`
  color: #ffff;
  display: flex;
  font-size: 0;
  justify-content: flex-start;
  padding: 12px;
  width: 100%;
  &:hover {
    background: #bbb;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const LinkStyled = styled(Link)`
  width: 100%;
`
