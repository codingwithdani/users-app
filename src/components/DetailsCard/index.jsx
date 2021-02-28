import React from 'react'
import { CardContent, DetailsCardContainer, ImageStyled, CardText } from './styles'

export const DetailsCard = ({ avatar, name, email, lastName }) => {
  return (
    <DetailsCardContainer elevation='large' min-height='460px' justify='center' align='center' background='#ffffff' round='small'>
      <CardContent>
        <ImageStyled src={avatar} />
        <CardText>Name:{`${' '}${name}${' '}${lastName}`}</CardText>
        <CardText>Email:{`${' '}${email}`}</CardText>
      </CardContent>
    </DetailsCardContainer>
  )
}
