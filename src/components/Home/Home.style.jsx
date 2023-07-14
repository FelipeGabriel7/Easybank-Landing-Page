import styled from 'styled-components';
import { ThemePage } from '../../Themes/Theme.style';
import { HomeText } from './HomeText';
import { CardComponent } from './Cards';
import { ArticleComponent } from './Articles';



export const ContainerHome = styled.section`
    width: 100%;
    padding: 1em;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-image: url(${(props) => props.image});
    min-height: 60vh;
    background-position: right bottom;
    background-size: 70%;
    background-repeat: no-repeat;
    object-fit: cover;

    @media(max-width: 768px){
        background: #fff;
        justify-content: center;
        padding: 1em;
    }
`

export const ContainerText = styled.div`
    width: 60%;
    display: flex;
    gap: 2em;
    
    @media(max-width: 768px){
        width: 100%;
    }
`

export const TextComponent = styled(HomeText)`
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    align-items: flex-start;
    justify-items: center;
    justify-content: center;
    height: 60vh;
    padding: 2.8em;
`

export const Title = styled.h2`
    font-size: 3em;
    width: 70%;
    color: #000;
    text-align: start;
    align-self: flex-baseline;
    font-weight: ${ThemePage.weight.xx};

    @media(max-width: 768px){
        width: 100%;
    }
`

export const TextTitle= styled.p`
    color: ${ThemePage.colors.GrayBlue};
    font-size: 1em;
    text-align: start;
    letter-spacing: 0.04em;
`

export const TextButton = styled.button`
    padding: 1em 3em;
    border: none;
    text-align: start;
    box-shadow: 0.1em 0.1em;
    border-radius: 1.8em;
    color: ${ThemePage.colors.white};
    cursor: pointer;
    background: linear-gradient(to left top, hsl(192, 70%, 51%) 10%, hsl(136, 65%, 51%) 100%);
    box-shadow: 0.2em 0.2em 0.2em #22222234;
    font-weight: ${ThemePage.weight.xx};
`


export const ComponentImage = styled.div`
    width: 40%;
    object-fit: cover;

    @media(max-width: 768px){
        object-fit: cover;
        width: 100%;
        margin-left: -3em;
        padding: 2em;
    }
    
`

export const ImageComponent = styled.image`
    width: 100%;
`

// Container Cards


export const TextSection = styled.section`
    margin: 2em auto;
    display: flex;
    flex-direction: column;
    gap: 2em;
    background: ${({ theme }) => theme.colors.lightGray};
    justify-content: start;
    align-items: flex-start;
    padding: 4.3em;
`

export const TitleTextSection = styled.h2`
    font-weight: ${( { theme }) => theme.weight.xx};
    font-size: 2.5em;
`

export const TextParagraph = styled.p`
    display: flex;
    width: 45%;
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.GrayBlue};

    @media(max-width: 768px){
        width: 100%;
    }
`

// Section cards

export const SectionCards = styled(CardComponent)`
    display: grid;
    gap: 5em;
    width: 100%;
    margin: 1.5em auto;
    justify-content: space-between;
    grid-template-columns: repeat(auto-fill , minmax(200px , 1fr));
`

export const SectionArticles = styled(ArticleComponent)`
    margin-top: 5em;
    display: flex;
    flex-direction: column;
    gap: 5em;
    width: 100%;
    min-height: 60vh;
`