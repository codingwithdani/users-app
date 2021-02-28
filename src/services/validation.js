const { object, string } = require('yup')

export const userSchema = object({
  name: string()
    .required('"name" can not be empty'),
  job: string()
    .required('"job" can not be empty')
})

userSchema.cast({
  name: 'Daniela',
  job: 'Frontend Developer'
})
