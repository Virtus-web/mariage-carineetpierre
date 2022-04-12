import { Fragment } from 'react'
import Hotel from '../components/Hotel'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Plan from '../assets/images/planHotels.png'
import Bus from '../assets/images/BusBackground.jpg'


const InfoBox = styled.div`
    background-image: linear-gradient(var(--color-bg-light), var(--color-bg-light));
    margin-top: 1em;
    padding: 1em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1380px) {
        background-position: 30% 20%;
        background-size: 200%;
        background-repeat: repeat;
    }
`

const InfoBoxBus = styled.div`
    background: linear-gradient(rgba(255, 255, 255, .7), var(--color-bg-light)), url(${Bus});
    ${'' /* background: linear-gradient(var(--color-bg-light), rgba(255, 255, 255, .5)), url(${Bus}); */}
    background-position: 25% 95%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 1em;
    padding: 1em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1380px) {
        background-position: 30% 20%;
        background-size: 200%;
        background-repeat: repeat;
    }
`

const HotelTitle = styled.h2`
    margin: 1em 0 1em 0;
    color: white;
    font-size: 2em;
    @media screen and (max-width: 340px) {
        font-size: 1em;
    }
`

const HotelContainer = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const PlanBox = styled.img`
    width: 100%;
    height: auto;
    dobject-fit: contain;
`

const TextContainer = styled.p`
    width: 100%;
    height: auto;
    line-height: 2;
    font-size: 2.5em;
    margin: 0;
`

const TextContainerTwo = styled.p`
    width: 40vw;
    height: auto;
    color: white;
    line-height: 1.5;
    font-size: 1.7em;
    text-align: center;
`


function Event() {

    return (
        <Fragment>
            <InfoBox>
                <HotelTitle>Hébergements à proximité</HotelTitle>
                <HotelContainer>
                    <PlanBox src={Plan} alt="plan" />
                    <Hotel />
                </HotelContainer>
            </InfoBox>
            <InfoBoxBus>
                <HotelTitle>Navettes nocturnes</HotelTitle>
                <TextContainer>
                    Profitez du Mariage sans souci et sans danger<br/>
                    Mise en place d’un bus pour prise en charge des invités :<br/>
                </TextContainer>
                <TextContainerTwo>
                    À l'aller pour transfert jusqu’au Chalet des Rhodos<br/>
                    Au retour vers votre lieu d'hébergement jusqu’à 3h du matin<br/>
                </TextContainerTwo>
            </InfoBoxBus>
            <Footer />
        </Fragment>
    )
}

export default Event
