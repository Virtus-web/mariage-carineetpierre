import { Fragment } from 'react'
import Hotel from '../components/Hotel'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Plan from '../assets/images/planHotels.png'
import Bus from '../assets/images/BusBackground.jpg'
import Mode from '../assets/images/skieur.jpg'
import Choice from '../assets/images/Choice.jpg'
import Couple from '../components/Couple'
import Elle from '../assets/images/Elle.jpg'
import Lui from '../assets/images/Lui.jpg'


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
    @media screen and (max-width: 340px) {
        ${'' /* background: linear-gradient(var(--color-bg-light)), rgba(255, 255, 255, .7), url(${Bus}); */}
        background: linear-gradient(rgba(255, 255, 255, .3), var(--color-bg-light)), url(${Bus});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 70%;
    }
`

const InfoBoxMode = styled.div`
    background: linear-gradient(rgba(255, 255, 255, .7), var(--color-bg-light)), url(${Mode});
    ${'' /* background: linear-gradient(var(--color-bg-light), rgba(255, 255, 255, .5)), url(${Bus}); */}
    background-position: 25% 20%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 1em;
    padding: 1em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 340px) {
        ${'' /* background: linear-gradient(var(--color-bg-light)), rgba(255, 255, 255, .7), url(${Bus}); */}
        background: linear-gradient(rgba(255, 255, 255, .3), var(--color-bg-light)), url(${Mode});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 70%;
    }
`

const InfoBoxRandom = styled.div`
    background: linear-gradient(rgba(255, 255, 255, .7), var(--color-bg-light)), url(${Choice});
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
    @media screen and (max-width: 340px) {
        ${'' /* background: linear-gradient(var(--color-bg-light)), rgba(255, 255, 255, .7), url(${Bus}); */}
        background: linear-gradient(rgba(255, 255, 255, .7), var(--color-bg-light)), url(${Choice});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: 10%;
    }
`

const HotelTitle = styled.h2`
    margin: 1em 0 1em 0;
    color: white;
    font-size: 3em;
    @media screen and (max-width: 340px) {
        font-size: 1.3em;
        ${'' /* color: rgba(40, 44, 52, 0.8); */}
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
    @media screen and (max-width: 340px) {
        width: 80%;
    }
`

const TextContainer = styled.div`
    width: 100%;
    height: auto;
    line-height: 2;
    font-size: 2.5em;
    margin: 0;
    @media screen and (max-width: 340px) {
        font-size: 1.3em;
        line-height: 1.3;
    }
`

const TextContainerTwo = styled.div`
    width: 100%;
    height: auto;
    color: white;
    line-height: 1.5;
    font-size: 2em;
    text-align: center;
    @media screen and (max-width: 340px) {
        font-size: 1em;
    }
`

const ContactBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 340px) {
        flex-direction: column;
    }
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
            <InfoBoxMode>
                <HotelTitle>Température</HotelTitle>
                <TextContainer>
                    Favorisez la chaleur au style...<br/>
                    Sans oublier le photographe qui rode !<br/>
                </TextContainer>
                <TextContainerTwo>
                    Un vestiaire restera donc à disposition pour changer de tenue<br/>
                </TextContainerTwo>
            </InfoBoxMode>
            <InfoBoxRandom>
                <HotelTitle>Une question ?</HotelTitle>
                <TextContainer>
                    Pas sûre du choix de ta robe? Cravate ou noeud pape?<br/>
                    Les enfants sont-ils les bienvenus?<br/>
                </TextContainer>
                <TextContainerTwo>
                    Si tu as la moindre question ou commentaire, n'hésite pas à nous contacter<br/>
                    <ContactBox>
                        <Couple who={Elle} tel="+33643069036" mail="pedenau.carine@gmail.com" />
                        <Couple who={Lui} tel="+33685527325" mail="pierre.bultel@hotmail.fr" />
                    </ContactBox>
                </TextContainerTwo>
            </InfoBoxRandom>
            <Footer />
        </Fragment>
    )
}

export default Event
