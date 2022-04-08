import { Fragment } from 'react'
import styled from 'styled-components'
import Presentation from '../components/Presentation'
import Couple from '../components/Couple'
import CountDownTimer from '../components/CountDownTimer'
import Kids from '../assets/images/kids.jpg'
import Logo from '../assets/images/FairePart.jpg'
import Footer from '../components/Footer'


const LogoBox = styled.div`
    ${'' /* background-image: linear-gradient(rgba(64, 88, 68, 0.9), rgba(64, 88, 68, 0.7)), url(${Logo}); */}
    background-image: linear-gradient(var(--color-bg-light), var(--color-bg-light)), url(${Logo});
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
    justify-content: center;
    align-items: center;
    width: auto;
    @media screen and (max-width: 920px) {
        margin-top: 0;
        flex-direction: column;
    }
`

const TextOne = styled.p`
    ${'' /* color: rgba(255, 255, 255, 0.7); */}
    color: white;
    line-height: 1.5em;
    height: auto;
    margin: 1em auto 1em auto;
    font-size: 2em;
    text-align: center;
    width: 95%;
    @media screen and (max-width: 640px) {
        font-size: 1em;
    }
`


const TextTwo = styled.p`
    color: white;
    line-height: 1.3em;
    height: auto;
    margin: 2em auto 0 auto;
    font-size: 1.5em;
    text-align: center;
    width: 50%;
    @media screen and (max-width: 640px) {
        font-size: 1em;
    }
`

const TextThree = styled.p`
    ${'' /* color: rgba(255, 255, 255, 0.7); */}
    color: white;
    line-height: 1.3em;
    height: auto;
    margin: 1em auto 0 auto;
    font-size: 2em;
    text-align: center;
    width: 95%;
    @media screen and (max-width: 640px) {
        font-size: 1em;
    }
`


function Home() {
    
    return (
        
        <Fragment>
            <Presentation />
            <LogoBox>
                {/* <h2 className="title" style={{color: 'rgba(40, 44, 52, 0.8)', display:'inline-block', lineHeight: '2em', marginTop: '2em'}}>The Happy Couple</h2> */}
                <h2 className="title" style={{color: 'rgba(255, 255, 255, 0.7)', display:'inline-block', lineHeight: '2em', marginTop: '0.5em', fontSize: '2em'}}>Chers Amis</h2>
                <TextOne>C'est avec la plus grande joie et beaucoup d'émotion que Carine & Pierre, entourés de leurs parents Annick & Yves, Patricia & Pascal, ainsi que de leurs enfants Charlie et Edouard, vous invitent à célébrer leur mariage</TextOne>
                <CoupleBox>
                    <Couple who={Kids} name='La Mariée' />
                </CoupleBox>
                <TextTwo>Chalet Les Rhodos Col des Aravis Entre la Clusaz et Megève, 74220 La Clusaz</TextTwo>
                <TextThree>Nous serions très heureux de pouvoir partager ce moment unique avec vous au milieu des montagnes enneigées.</TextThree>
            </LogoBox>
            <CountDownTimer />
            <Footer />
        </Fragment>
    )
}

export default Home