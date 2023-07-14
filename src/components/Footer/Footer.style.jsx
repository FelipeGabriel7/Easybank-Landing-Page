import styled from 'styled-components';
import { ThemePage } from '../../Themes/Theme.style';


export const FooterContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    padding: 2.5em;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    background: ${( {theme }) => theme.colors.darkBlue};
    color: ${( { theme }) => theme.colors.white};


`

export const LinkContainer = styled.div`
    display: flex;
    gap: 1em;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    
    @media (max-width: 768px){
        gap: 2em;
        padding: 2em;
    }
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: ${( { theme }) => theme.weight.xl};

    & p {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: none;
    }

`

export const IconsContainer = styled.div`
    display: flex;
    font-size: 1.2em;
    padding: 0.2em;
    justify-content: center;
    gap: 0.5em;

`

export const ItemsPages = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 1em;
    flex-direction: column;

    @media (max-width: 768px){
        padding: 2.5em;
        gap: 2em;
        flex-direction: row;
    }
`

export const LinkPages = styled.a`
    display: flex;
    gap: 1em;
    color: ${({  theme }) => theme.colors.GrayBlue};
    font-size: 0.8em;
    font-weight: ${({ theme }) => theme.weight.xl};
    cursor: pointer;

    &:hover{
        transition: 0.2s all ease-in-out;
        color: ${({  theme }) => theme.colors.white};
    }
`


export const CopyComponent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2em;
`

export const ButtonFooter = styled.button`
    padding: 1em 3em;
    border: none;
    box-shadow: 0.1em 0.1em;
    border-radius: 1.8em;
    color: ${ThemePage.colors.white};
    cursor: pointer;
    background: linear-gradient(to left top, hsl(192, 70%, 51%) 10%, hsl(136, 65%, 51%) 100%);
    box-shadow: 0.2em 0.2em 0.2em #22222234;
    font-weight: ${ThemePage.weight.xx};
`
