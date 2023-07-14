import * as Style from './Index.style'
import imageLogo from '../../assets/images/logo.svg'
import { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


export const Navbar = () => {

    const [mobile, setMobile] = useState(true);


    return (

        <Style.ContainerNavbar>

            <Style.Navbar>

                <img src={imageLogo} alt="imagem Logo" />

                {mobile && (
                    <>


                        <Style.NavbarItems>
                            <Style.NavbarLinks> Home </Style.NavbarLinks>
                            <Style.NavbarLinks> About </Style.NavbarLinks>
                            <Style.NavbarLinks> Contact </Style.NavbarLinks>
                            <Style.NavbarLinks> Blog </Style.NavbarLinks>
                            <Style.NavbarLinks> Carrers </Style.NavbarLinks>
                        </Style.NavbarItems>


                        <Style.ButtonNavbar>  Request Invite </Style.ButtonNavbar>

                    </>


                )}


                {!mobile && (
                    <>

                        <Style.ResponsiveNavbar>
                            <Style.NavbarLinks> Home </Style.NavbarLinks>
                            <Style.NavbarLinks> About </Style.NavbarLinks>
                            <Style.NavbarLinks> Contact </Style.NavbarLinks>
                            <Style.NavbarLinks> Blog </Style.NavbarLinks>
                            <Style.NavbarLinks> Carrers </Style.NavbarLinks>
                        </Style.ResponsiveNavbar>
                        <Style.ButtonNavbar>  Request Invite </Style.ButtonNavbar>

                    </>


                )}



                {!mobile && (
                    <Style.IconMobile onClick={() => setMobile(prevMobile => !prevMobile)}>
                        <AiOutlineClose />
                    </Style.IconMobile>
                )}

                {mobile && (
                    <Style.IconMobile onClick={() => setMobile(prevMobile => !prevMobile)}>
                        <AiOutlineMenu />
                    </Style.IconMobile>
                )}


            </Style.Navbar>



        </Style.ContainerNavbar>

    )
}

