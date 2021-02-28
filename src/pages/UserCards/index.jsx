import React, { useEffect, useState } from 'react'

import { Card } from 'components/Card'
import { ContentLayout } from 'components/ContentLayout'
import { Trash } from 'grommet-icons'
import { deleteUser } from 'services/deteleUser'
import { getUsersList } from 'services/listOfUsers'
import { DeleteButton, ListOfCardsContainer, CardContainer } from './styles'

export const UserCards = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    getUsersList().then(setUsers).catch(() => {
      console.error('error getting users')
      setUsers([])
    })
  }, [])

  return (
    <ContentLayout>
      <ListOfCardsContainer>
        {users.length
          ? users.map(user => {
            return (
              <CardContainer key={user.id}>
                <Card name={user.first_name} avatar={user.avatar} id={user.id} />
                <DeleteButton
                  gap='small'
                  icon={<Trash color='#bbb' size='small' />}
                  onClick={() => {
                    deleteUser(user.id).then(() => {
                      setUsers(users.filter(u => u.id !== user.id))
                    })
                  }}
                />
              </CardContainer>
            )
          })
          : 'There are no users'}
      </ListOfCardsContainer>
    </ContentLayout>
  )
}
