import styled from 'styled-components';



export const ArticleTitle = styled.h2`
    text-align: start;
    font-size: 2.5em;
    padding-left: 1.8em;
    font-weight: ${({ theme }) => theme.weight.xx};

`

export const ArticleComponent = styled.section`
    display: flex;
    flex-wrap: wrap;
    margin: 2em auto;
    gap: 2em;
    padding: 2em;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`

export const ArticleCard = styled.div`
    display: flex;
    width: 300px;
    flex-direction: column;
    gap: 1em;

    & img {
        width: 100%;
        object-fit: cover;

    }
`

export const CreatedBy = styled.span`
    font-size: 0.6em;
    color: ${( { theme }) => theme.colors.GrayBlue};
`

export const ArticleTitleCard = styled.h3`
    font-weight: ${( { theme }) => theme.weight.xx};
`

export const ArticleCardText = styled.p`
    color: ${({ theme }) => theme.colors.GrayBlue};
    text-align: start;
`