
import { Button } from 'grommet'
import styled from 'styled-components'

export const ListOfCardsContainer = styled.div`
    border-radius: 6px;
    border: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    width: 100%;
    box-shadow: 0px 8px 16px rgb(0 0 0 / 20%);
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    position: relative;
`

export const DeleteButton = styled(Button)`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 16px;
`
