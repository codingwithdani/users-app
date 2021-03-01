import { InputContainer, InputStyled } from './styles'

export const Filter = ({ onChangeFilter }) => {
  const handleChange = e => onChangeFilter(e.target.value)

  return (
    <InputContainer>
      <InputStyled
        type='text'
        placeholder='Filter by name'
        onChange={handleChange}
      />
    </InputContainer>
  )
}
