import styled from 'styled-components'
import { Box } from 'grommet'

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: gray;
    margin: 10px;
`

export const ImageStyled = styled.img`
    border-radius: 50%;
    height: 100px;
    width: 100px;
    background-size: cover;
`

export const CardText = styled.p`
    padding-bottom: 10px;
    margin: 10px;
`
export const DetailsCardContainer = styled(Box)`

    @media (min-width: 768px) {
        min-width: 300px;
        top: 56px;
    }
`
