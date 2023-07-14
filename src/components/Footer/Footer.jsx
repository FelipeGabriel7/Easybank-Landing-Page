import * as Style from './Footer.style'
import imageLogo from '../../assets/images/logo.svg'
import { AiOutlineTwitter , AiOutlineInstagram , AiOutlineFacebook , AiOutlineYoutube } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import logo from '../../assets/images/logo-whit.png'


export const FooterComponent = () => {
    return (
        <>
            <Style.FooterContainer>

                <Style.LinkContainer>
                    
                    
                <Style.ImageContainer>
                    {/* <img src={imageLogo} style={{ width: '40%' }} />  */}
                    <img src={logo} style={{ width: '100%' }} /> 

                </Style.ImageContainer>
                <Style.IconsContainer>
                        <AiOutlineFacebook/> 
                        <AiOutlineYoutube/>
                        <AiOutlineTwitter/>
                        <BsPinterest/>
                        <AiOutlineInstagram/>
                    </Style.IconsContainer>
                </Style.LinkContainer>

                <Style.ItemsPages>
                    <Style.LinkPages> About us </Style.LinkPages>
                    <Style.LinkPages> Contact </Style.LinkPages>
                    <Style.LinkPages> Blog </Style.LinkPages>
                </Style.ItemsPages>

                <Style.ItemsPages>
                    <Style.LinkPages> Carres </Style.LinkPages>
                    <Style.LinkPages> Support </Style.LinkPages>
                    <Style.LinkPages> Privacy Policy </Style.LinkPages>
                </Style.ItemsPages>


                <Style.CopyComponent>
                    <Style.ButtonFooter> Request Invite </Style.ButtonFooter>
                    <Style.LinkPages> &copy; Easybank. All Rights Reserverd. </Style.LinkPages>
                </Style.CopyComponent>
             

            </Style.FooterContainer>
            
        </>
    )
}