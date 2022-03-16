import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Background from '../assets/images/Background.jpg'


const Bloc = styled.div`
    background-image: linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 70, 0, 0.5)), url(${Background});
    background-position: 25% 40%;
    background-size: 100%;
    margin-top: 3em;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 10vh;
    @media screen and (max-width: 780px) {
        ${'' /* height: 15vh; */}
        background-size: cover;
        padding-bottom: 3vh;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const TimeBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Number = styled.div`
    width: 2em;
    color: white;
    font-family: 'Amatic SC';
    font-weight: bold;
    border: 3px solid white;
    line-height: 2em;
    font-size: 3em;
    @media screen and (max-width: 780px) {
        border: 1.5px solid white;
        font-size: 1.5em;
        width: 1em;
    }
`

const Item = styled.span`
    color: white;
    font-family: 'Amatic SC';
    font-weight: bold;
    line-height: 2em;
    font-size: 3em;
    @media screen and (max-width: 780px) {
        font-size: 1em;
    }
`

const Welcome = styled.p`
    font-family: 'Amatic SC', 'Cormorant Garamond';
    color: rgba(40, 44, 52, 0.8);
    height: auto;
    margin: 0 auto 0 auto;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 640px) {
        font-size: 1em;
    }
`

const Explication = styled.p`
    font-family: 'Amatic SC', 'Cormorant Garamond';
    color: rgba(40, 44, 52, 0.8);
    line-height: 1em;
    height: auto;
    margin: 1em auto 2em auto;
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    width: 90%;
    @media screen and (max-width: 640px) {
        font-size: 1em;
    }
`


const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00'
}

const timestampMs = new Date("01/22/2023 11:00:00").getTime()

function CountDownTimer() {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRemainingTime(getRemainingTime())
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    function getRemainingTime() {

        let delta =  timestampMs - new Date().getTime()

        return {
            seconds: Math.floor((delta % (1000*60)) / 1000),
            minutes: Math.floor((delta % (1000*60*60)) / (1000*60)),
            hours: Math.floor((delta % (1000*60*60*24)) / (1000*60*60)),
            days: Math.floor(delta / (1000*60*60*24))
        }
    }
    

    return (        
        <Bloc>
            <Welcome>Bienvenue sur le site, pensez à confirmer votre présence dans l'onglet formulaire !</Welcome>
            <Explication>A très bientôt, nous comptons les jours...</Explication>
            {
                remainingTime.seconds < 0 ? (
                    <span>Tu vas te marier !</span>
                ) : (
                    <Container>
                        <TimeBox>
                            <Number>{remainingTime.days}</Number>
                            <Item>Jours</Item>
                        </TimeBox>
                        <TimeBox>
                            <Number>{remainingTime.hours}</Number>
                            <Item>heures</Item>
                        </TimeBox>
                        <TimeBox>
                            <Number>{remainingTime.minutes}</Number>
                            <Item>minutes</Item>
                        </TimeBox>
                        <TimeBox>
                            <Number>{remainingTime.seconds}</Number>
                            <Item>Secondes</Item>
                        </TimeBox>
                    </Container>
                )
            }
        </Bloc>
    )
}

export default CountDownTimer