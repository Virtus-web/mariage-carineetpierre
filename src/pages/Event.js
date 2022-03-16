// import { Fragment } from 'react'
import Hotel from '../components/Hotel'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Plan from '../assets/images/planHotels.png'


const InfoBox = styled.div`
    padding: 1em;
`

const HotelTitle = styled.h2`
    margin: 0 0 1em 0;
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


function Event() {

    return (
        <InfoBox>
            <HotelTitle>Hébergements à proximité</HotelTitle>
            <HotelContainer>
                <PlanBox src={Plan} alt="plan" />
                <Hotel />
            </HotelContainer>
            <Footer />
        </InfoBox>
    )
}

export default Event
