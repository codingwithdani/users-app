import { Box } from 'grommet'
import { MessageText } from './styles'

export const Message = ({ listOfMessages, color }) => {
  return (
    <Box justify='center' align='center'>
      {listOfMessages.map(msg => <MessageText color={color} key={msg}>{msg}</MessageText>)}
    </Box>
  )
}
