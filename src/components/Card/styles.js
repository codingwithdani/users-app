import styled from 'styled-components'

export const CardStyled = styled.a`
  align-items: center;
  color: gray;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  max-width: 500px;
  padding: 16px 64px 16px 16px;
  text-decoration: none;
  transition: all .3s ease;
  width: 100%;

  &:hover {
    background: #bbb;
  }
`

export const CardText = styled.p``

export const ImageStyled = styled.img`
  background-size: cover;
  border-radius: 50%;
  height: 50px;
  padding-right: 20px;
  width: 50px;
`
