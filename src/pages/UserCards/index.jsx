import React, { useEffect, useState } from 'react'

import { DeleteButton, ListOfCardsContainer, CardContainer } from './styles'
import { Card } from '../../components/Card'
import { ContentLayout } from '../../components/ContentLayout'
import { Trash } from 'grommet-icons'
import { getUsersList } from '../../services/listOfUsers'
import { deleteUser } from '../../services/deteleUser'

export const UserCards = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsersList().then(users => {
      setUsers(users)
    }).catch(() => {
      console.log('error getting users')
    })
  }, [])

  return (
    <ContentLayout>
      <ListOfCardsContainer>
        {users.length && users.map((user) => {
          return (
            <CardContainer key={user.id}>
              <Card name={user.first_name} avatar={user.avatar} id={user.id} />
              <DeleteButton
                gap='small'
                icon={<Trash color='#bbb' size='small' />}
                onClick={() => deleteUser(user.id)}
              />
            </CardContainer>
          )
        })}
      </ListOfCardsContainer>
    </ContentLayout>
  )
}
