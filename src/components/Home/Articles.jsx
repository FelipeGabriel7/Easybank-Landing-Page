import * as Style from './Articles.style'
import image1 from '../../assets/images/image-currency.jpg'
import image2 from '../../assets/images/image-restaurant.jpg'
import image3 from '../../assets/images/image-plane.jpg'
import image4 from '../../assets/images/image-confetti.jpg'


export const ArticleComponent = ( { className }) => {
    return (
        <div className={className}>
            <Style.ArticleTitle> Latest Articles </Style.ArticleTitle>
            <Style.ArticleComponent>
                <Style.ArticleCard>
                    <img src={image1} alt={image2.src} style={{ width: '100%' , height: '30vh' , borderRadius: '0.2em'}}/>
                    <Style.CreatedBy> By Claire Robinson </Style.CreatedBy>
                    <Style.ArticleTitleCard> Receive money in any currency with no fees </Style.ArticleTitleCard>
                    <Style.ArticleCardText> 
                        The world is getting smaller and we're becoming more mobile. 
                        So why should you be forcedd to only receive money in a single.
                        </Style.ArticleCardText>
                </Style.ArticleCard>
                <Style.ArticleCard>
                    <img src={image2} alt={image2.src} style={{ width: '100%' , height: '30vh' , borderRadius: '0.2em'}}/>
                    <Style.CreatedBy> By Wilson Hutton </Style.CreatedBy>
                    <Style.ArticleTitleCard> Treeat yourself without worrying about money </Style.ArticleTitleCard>
                    <Style.ArticleCardText> 
                        Our simple budgeting feature allows you to separate out your
                        spding and set reealistic limitis each month. That means you...
                        </Style.ArticleCardText>
                </Style.ArticleCard>
                <Style.ArticleCard>
                    <img src={image3} alt={image3.src} style={{ width: '100%', height: '30vh'  , borderRadius: '0.2em'}}/>
                    <Style.CreatedBy> By Wilson Hutton  </Style.CreatedBy>
                    <Style.ArticleTitleCard> Take yoour Easybank card wherever you go </Style.ArticleTitleCard>
                    <Style.ArticleCardText> 
                       We want you to eenjoy your travells This is why we don't charge any fees on purchases while you're
                       abroad. We'll even show you.
                        </Style.ArticleCardText>
                </Style.ArticleCard>
                <Style.ArticleCard>
                    <img src={image4} alt={image4.src} style={{ width: '100%' , height: '30vh'  ,  borderRadius: '0.2em'}}/>
                    <Style.CreatedBy> By Claire Robinson </Style.CreatedBy>
                    <Style.ArticleTitleCard> Our invite only Beta accounts are now live! </Style.ArticleTitleCard>
                    <Style.ArticleCardText> 
                        After a lot of hard word by th whole team, we're excited to launch our closedd beta.It's easy to request
                        an invite trhough the site...
                        </Style.ArticleCardText>
                </Style.ArticleCard>
            </Style.ArticleComponent>
        </div>
    )
}