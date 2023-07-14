import * as Style from './Home.style'
import imageDesktop from '../../assets/images/bg-intro-desktop.svg';
import imageMobile from '../../assets/images/image-mockups.png';


export const HomePage = () => {
    return (
        <>
        <Style.ContainerHome image={imageDesktop}>

            {/* Container Text */}

            <Style.ContainerText>
                <Style.TextComponent>
                    <Style.Title> Next generation digital banking </Style.Title>
                    <Style.TextTitle> Take your financial life online. Your Easybank account <br/>
                        will be a one-stop-shop for speding, saving <br/> 
                        bugdeting, inveesting, and much more.
                    </Style.TextTitle>
                    <Style.TextButton>
                        Request Invite
                    </Style.TextButton>
                </Style.TextComponent>
            </Style.ContainerText>


            {/* image bg component */}

            <Style.ComponentImage>
                    <img src={imageMobile} alt="image-mobile" style={{
                        width: '100%',
                        height: 'auto',
                        marginLeft: '3em'
                    }}/>

            </Style.ComponentImage>

        </Style.ContainerHome>

        <Style.TextSection>
            <Style.TitleTextSection> Why choose Easybank? </Style.TitleTextSection>
            <Style.TextParagraph>
                 We leverage Open Banking to turn your bank account into yout financial hub.
                Control your finances like never before    
            </Style.TextParagraph>

            <Style.SectionCards />
        </Style.TextSection>

        <Style.SectionArticles/>


        </>
    )
}