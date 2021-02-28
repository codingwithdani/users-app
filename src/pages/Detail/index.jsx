import React, { useEffect } from 'react'
import { DetailsCard } from '../../components/DetailsCard'
import { DetailsContainer } from './styles'
export const Detail = ({ detailId }) => {
  const [user, setUser] = React.useState()
  const getSingleUser = async () => {
    let singleUser = await window.fetch(`https://reqres.in/api/users/${detailId}`)
    singleUser = await singleUser.json()
    setUser(singleUser.data)
  }

  useEffect(() => {
    getSingleUser()
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
