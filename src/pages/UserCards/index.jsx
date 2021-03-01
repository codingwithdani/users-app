import React, { useEffect, useState } from 'react'
import { ContentLayout } from 'components/ContentLayout'
import { Filter } from 'components/Filter'
import { ListOfCards } from 'components/ListOfCards'
import { getUsersList } from 'services/listOfUsers'

export const UserCards = () => {
  const [users, setUsers] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    getUsersList().then(setUsers).catch(() => {
      console.error('error getting users')
      setUsers([])
    })
  }, [])

  const handleChangeFilter = query => setFilter(query)

  const filteredUsers = filter.length
    ? users.filter(user => user.first_name.toLowerCase().includes(filter.toLowerCase()))
    : users

  return (
    <ContentLayout>
      <Filter onChangeFilter={handleChangeFilter} />
      <ListOfCards users={filteredUsers} setUsers={setUsers} />
    </ContentLayout>
  )
}
