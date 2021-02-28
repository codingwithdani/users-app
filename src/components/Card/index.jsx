import React from 'react'
import { Link } from 'wouter'
import { CardStyled, ImageStyled, CardText } from './styles'

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
