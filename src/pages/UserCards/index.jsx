import React, { useEffect, useState } from 'react'
import { ContentLayout } from 'components/ContentLayout'
import { ListOfCards } from 'components/ListOfCards'
import { getUsersList } from 'services/listOfUsers'

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
      {users && <ListOfCards users={users} setUsers={setUsers} />}
    </ContentLayout>
  )
}
