import * as Style from './Card.style'
import { AiOutlineCreditCard , AiTwotoneBug } from 'react-icons/ai'
import { LuSmartphone } from 'react-icons/lu'
import { VscOrganization } from 'react-icons/vsc'

export const CardComponent = ( { className , children }) => {


    return (
        <div className={className}>
            <Style.CardComponent> 
                <AiOutlineCreditCard style={{
                    fontSize: '4.8em',
                    color: '#f3f3f3',
                    background: 'linear-gradient(to left top, hsl(192, 70%, 51%) 10%, hsl(136, 65%, 51%) 100%)',
                    borderRadius: '60%',
                    padding: '0.2em',
                    boxShadow: '0.2em 0.2em 0.2eem #444',
                }}/>
                <Style.CardTitle> Online Banking </Style.CardTitle>
                <Style.CardText> 
                    Our modern weeb and mobile applications allow
                    you to keep track of your finances wherever you are in
                    the world.
                </Style.CardText>
            </Style.CardComponent>
            <Style.CardComponent> 
                <LuSmartphone style={{
                    fontSize: '4.8em',
                    color: '#dedede',
                    background: 'linear-gradient(to left top, hsl(192, 70%, 51%) 10%, hsl(136, 65%, 51%) 100%)',
                    borderRadius: '60%',
                    padding: '0.2em',
                    boxShadow: '0.2em 0.2em 0.2eem #444',
                }}/>
                  <Style.CardTitle> Simple Budgeting </Style.CardTitle>
                <Style.CardText> 
                    See exactly where your money goes each month. Receive notifications when you're close to
                    hitting yout limits.
                </Style.CardText>
            </Style.CardComponent>
            <Style.CardComponent>
                <VscOrganization style={{
                    fontSize: '4.8em',
                    color: '#f5f5f5',
                    background: 'linear-gradient(to left top, hsl(192, 70%, 51%) 10%, hsl(136, 65%, 51%) 100%)',
                    borderRadius: '60%',
                    padding: '0.2em',
                    boxShadow: '0.2em 0.2em 0.2eem #444',
                }}/>
                  <Style.CardTitle> Fast Onboarding </Style.CardTitle>
                <Style.CardText> 
                    We don't do branches. Open your account in minutes onlinee
                    and star taking control of your finances right away.
                </Style.CardText>
            </Style.CardComponent>
            <Style.CardComponent>
                <AiTwotoneBug style={{
                    fontSize: '4.8em',
                    color: '#dedede',
                    background: 'linear-gradient(to left top, hsl(192, 70%, 51%) 10%, hsl(136, 65%, 51%) 100%)',
                    borderRadius: '60%',
                    padding: '0.2em',
                    boxShadow: '0.2em 0.2em 0.2eem #444',
                }}/>
                  <Style.CardTitle> Open API </Style.CardTitle>
                <Style.CardText> 
                    Manage your savings, investments, pension, and much more from
                    one account. Tracking your money has never been easier
                </Style.CardText>
            </Style.CardComponent>
        </div>

    )
}