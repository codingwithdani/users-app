import { userSchema } from './validation'

const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
}

const validateNewUser = value => {
  return userSchema.validate(value, { abortEarly: false, strict: false }).catch(error => error)
}

export const createNewsUser = async (value) => {
  const { errors } = await validateNewUser(value)
  if (errors) return { isValid: false, errors }

  return window.fetch('https://reqres.in/api/users/',
    {
      headers: HEADERS,
      method: 'POST',
      body: JSON.stringify(value)
    })
    .then(() => ({ isValid: true, errors: [] }))
    .catch(error => ({ isValid: false, errors: [error] }))
}
