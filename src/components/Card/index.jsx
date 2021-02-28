import React from 'react'
import { CardStyled, ImageStyled, CardText } from './styles'
import { Link } from 'wouter'

export const Card = ({ avatar, name, id }) => {
  return (
    <Link href={`/detail/${id}`}>
      <CardStyled>
        <ImageStyled src={avatar} />
        <CardText>{name}</CardText>
      </CardStyled>
    </Link>
  )
}
