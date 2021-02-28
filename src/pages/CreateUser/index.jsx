import React from 'react'
import { CreateUserForm } from '../../components/CreateUserForm'
import { Box } from 'grommet'

export const CreateUser = () => {
  return (
    <Box width='100%' background='#ffffff' justify='center' align='center' height='100vh'>
      <CreateUserForm />
    </Box>
  )
}
