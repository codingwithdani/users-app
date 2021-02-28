import React, { useState } from 'react'
import { Box, Form, FormField, TextInput } from 'grommet'

import { createNewsUser } from 'services/createUser'
import { ButtonStyled, FormContainer, ErrorMessage, SuccessfulMessage } from './styles'

const INITIAL_STATE = { name: '', job: '' }

export const CreateUserForm = () => {
  const [value, setValue] = useState(INITIAL_STATE)
  const [errors, setErrors] = useState([])
  const [success, setSuccess] = useState(false)

  const handleInputChange = (nextValue) => {
    setValue(nextValue)
  }

  const handleSubmit = () => {
    createNewsUser(value).then(({ isValid, errors }) => {
      setSuccess(isValid)
      setErrors(errors)
      if (isValid) setValue(INITIAL_STATE)
    })
  }
  return (
    <FormContainer pad='large' elevation='large' min-height='460px' justify='center' align='center' background='#ffffff' round='small'>
      <Form
        value={value}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
      >
        <Box>
          <FormField name='name' htmlFor='text-input-id' label='Name'>
            <TextInput id='text-input-id' name='name' />
          </FormField>
        </Box>
        <Box>
          <FormField name='job' htmlFor='text-input-id' label='Job'>
            <TextInput id='text-input-id' name='job' />
          </FormField>
        </Box>
        {
          errors.length
            ? (
              <Box justify='center' align='center'>
                {errors.map(error => <ErrorMessage key={error}>{error}</ErrorMessage>)}
              </Box>
              )
            : null
        }
        {
          success &&
          (
            <Box justify='center' align='center' color='green'>
              <SuccessfulMessage>User created successfully</SuccessfulMessage>
            </Box>
          )
        }
        <Box direction='row' justify='center' gap='medium' pad={{ vertical: 'medium' }}>
          <ButtonStyled primary color='rgb(123, 127, 190)' type='submit' label='Create user' />
        </Box>
      </Form>
    </FormContainer>
  )
}
