import { Fragment } from 'react'
import styled from 'styled-components'
import Presentation from '../components/Presentation'
import Couple from '../components/Couple'
import Kids from '../components/Kids'
import CountDownTimer from '../components/CountDownTimer'
import Wife from '../assets/images/Wife.jpg'
import Husband from '../assets/images/Husband.jpg'
import Charlie from '../assets/images/charlie.jpg'
import Edouard from '../assets/images/edouard.jpg'
import Logo from '../assets/images/FairePart.jpg'
import Footer from '../components/Footer'


const LogoBox = styled.div`
    background-image: linear-gradient(rgba(64, 88, 68, 0.9), rgba(64, 88, 68, 0.7)), url(${Logo});
    background-position: 55% 50%;
    background-size: 70%;
    background-repeat: repeat;
    @media screen and (max-width: 820px) {
        margin-top: 0;
        flex-direction: column;
    }
`

const CoupleBox = styled.div`
    padding: 0 1.5em;
    margin-top: 3em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    @media screen and (max-width: 920px) {
        margin-top: 0;
        flex-direction: column;
    }
`


function Home() {
    
    return (
        
        <Fragment>
            <LogoBox>
                <Presentation />
                {/* <h2 className="title" style={{color: 'rgba(40, 44, 52, 0.8)', display:'inline-block', lineHeight: '2em', marginTop: '2em'}}>The Happy Couple</h2> */}
                <h2 className="title" style={{color: 'rgba(255, 255, 255, 0.7)', display:'inline-block', lineHeight: '2em', marginTop: '2em'}}>The Happy Couple</h2>
                <CoupleBox>
                    <Couple who={Wife} name='La Mariée' />
                    <Kids who={Charlie} />
                    <Kids who={Edouard} />
                    <Couple who={Husband} name='Le Marié' />
                </CoupleBox>
                <p style={{color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.5em', height: 'auto', marginLeft: 'auto', marginRight: 'auto', fontSize: '1.5em', textAlign: 'center', width: '87%'}}>Lorem ipsum dolor sit amet. Sit sequi galisum sit voluptatem culpa et omnis dolor aut quos deleniti ut harum aliquam sit itaque architecto est nihil molestias. Lorem ipsum dolor sit amet. Sit sequi galisum sit voluptatem culpa et omnis dolor aut quos deleniti ut harum aliquam sit itaque architecto est nihil molestias.</p>
                <CountDownTimer />
            </LogoBox>
            <Footer />
        </Fragment>
    )
}

export default Home