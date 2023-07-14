import styled , { keyframes} from 'styled-components';
import { ThemePage } from '../../Themes/Theme.style';

export const ContainerNavbar = styled.div`
    width: 100%;
    padding: 1em;
    position: sticky;
    top: 0;
    background: ${ThemePage.colors.white};
`

const translate = keyframes`
from{
    transition: 0.5s all ease-in;
    transform: translateX(-400px);
}
to {
    transition: 0.5s all ease-in;
    flex-direction: column;
    transform: translateX(0px);
}
`

export const NavbarItems = styled.div`
    display: flex;
    gap: 2.5em;
    justify-content: space-between;
    transition: 0.3s all ease-in;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const Navbar = styled.nav`
    display: flex;
    gap: 0.5em;
    padding: 0.2em;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;



    @media screen and(max-width: 768px){
        padding: 0.5em;
        text-align: flex-start;
    }

    @media screen and(max-width: 500px){
        width: 100%;
        gap: 2em;

        & img {
            width: 100%;
        }
    }
`

export const NavbarLinks = styled.p`
    font-size: ${ThemePage.size.fontSize};
    color: ${ThemePage.colors.GrayBlue};
    cursor: pointer;
    font-weight: ${ThemePage.weight.xx};
    transition: 0.4s all ease-in;


    @media (max-width: 768px){
        color: ${ThemePage.colors.white};
    }


    &:hover{
        transition: 0.2s all ease-in;
        border-radius: 0.05em;
        border-bottom: 2px solid ${ThemePage.colors.CyanGlow};
        font-weight: ${ThemePage.weight.xl};
    }

`

export const ButtonNavbar = styled.button`
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

export const IconMobile = styled.div`
    display: none;
    text-align: center;
    font-size: 2em;
    cursor: pointer;
    padding: 0%.2;
    font-weight: 600;


    @media (max-width: 768px){
        display: flex;
        cursor: pointer;
    }

    
`

export const ResponsiveNavbar = styled.div`
        display: flex;
        animation: ${translate} 0.5s ease-in-out;
        transition: 0.3s all ease-in;
        position: fixed;
        top: 10%;
        gap: 2.2em;
        height: 50vh;
        padding: 2em;
        text-align: center;
        width: 100%;
        color: ${ThemePage.colors.white};
        background: linear-gradient(to left top, hsl(192, 70%, 51%) 10%, hsl(136, 65%, 51%) 100%);
        flex-direction: column;

        @media(max-width: 500px){
            top: 15%;
        }
`