import React, { useEffect } from 'react'
import { DetailsCard } from 'components/DetailsCard'
import { getSingleUser } from 'services/getSingleUser'
import { DetailsContainer } from './styles'

export const Detail = ({ detailId }) => {
  const [user, setUser] = React.useState()

  useEffect(() => {
    getSingleUser(detailId).then(user => {
      setUser(user)
    }).catch(() => {
      console.log('error getting user')
    })
  }, [])

  return (
    <DetailsContainer title={`Fotografia ${detailId}`}>
      {user && <DetailsCard
        name={user.first_name}
        avatar={user.avatar}
        lastName={user.last_name}
        email={user.email}
               />}
    </DetailsContainer>
  )
}
