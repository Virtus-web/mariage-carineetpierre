import styled from 'styled-components'
import Presentation from '../components/Presentation'
import Couple from '../components/Couple'
import CountDownTimer from '../components/CountDownTimer'
import Wife from '../assets/images/Wife.jpg'
import Husband from '../assets/images/Husband.jpg'
import Logo from '../assets/images/FairePart.jpg'


const LogoBox = styled.div`
    background-image: linear-gradient(rgba(64, 88, 68, 0.9), rgba(64, 88, 68, 0.7)), url(${Logo});
    background-position: 50% 70%;
    background-size: contain;
    background-repeat: no-repeat;
`

const CoupleBox = styled.div`
    margin-top: 3em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 540px) {
        margin-top: 0;
        flex-direction: column;
    }
`

function Home() {
    
    return (
        <LogoBox>
            <Presentation />
            {/* <h2 className="title" style={{color: 'rgba(40, 44, 52, 0.8)', display:'inline-block', lineHeight: '2em', marginTop: '2em'}}>The Happy Couple</h2> */}
            <h2 className="title" style={{color: 'white', display:'inline-block', lineHeight: '2em', marginTop: '2em'}}>The Happy Couple</h2>
            <CoupleBox>
                <Couple who={Wife} name='La Mariée' />
                <Couple who={Husband} name='Le Marié' />
            </CoupleBox>
            <CountDownTimer />
        </LogoBox>
    )
}

export default Home