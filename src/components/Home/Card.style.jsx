import styled from 'styled-components';


export const CardComponent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.8em;
`

export const CardTitle = styled.h3`
    font-size: 1.2em;
    font-weight: ${({ theme }) => theme.weight.xx};
    display: flex;
`

export const CardText = styled.p`
    font-size: 0.8em;
    color: ${({ theme}) => theme.colors.GrayBlue};
`