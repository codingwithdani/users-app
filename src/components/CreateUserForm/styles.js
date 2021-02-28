
import {
  Box,
  Button
} from 'grommet'
import styled from 'styled-components'

export const ButtonStyled = styled(Button)`
    color: #ffff;
    font-size: 14px;
`

export const ErrorMessage = styled.p`
  color: red;
  font-size: 12px;
  margin-bottom: 4px;
`

export const SuccessfulMessage = styled.p`
  color: green;
  font-size: 12px;
  margin-bottom: 4px;
`

export const FormContainer = styled(Box)`
  color: gray;
  font-size: 14px;
  @media (min-width: 768px) {
        min-width: 300px;
    }
`
