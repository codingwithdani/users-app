import { Box } from 'grommet'
import styled from 'styled-components'

export const CardContent = styled.div`
    align-items: center;
    color: gray;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 10px;
`

export const ImageStyled = styled.img`
    background-size: cover;
    border-radius: 50%;
    height: 100px;
    width: 100px;
`

export const CardText = styled.p`
    margin: 10px;
    padding-bottom: 10px;
`
export const DetailsCardContainer = styled(Box)`
    @media (min-width: 768px) {
        min-width: 300px;
        top: 56px;
    }
`
