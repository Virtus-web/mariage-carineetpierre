import { Fragment } from 'react'
import styled from 'styled-components'
import Photos from '../components/Photos'
import Trailers from '../components/Trailers'
import Ornement from '../assets/images/Ornement4.svg'
import Footer from '../components/Footer'


const GalleryBox = styled.div`
    background-image: linear-gradient(rgba(64, 88, 68, 0.9), rgba(64, 88, 68, 0.7)), url(${Ornement});
    background-position: 30% 50%;
    background-size: 200%;
    background-repeat: repeat;
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


function Gallery() {

    return (
        
        <Fragment>
            <GalleryBox>
                <Trailers />
                <Photos />
            </GalleryBox>
            <Footer />
        </Fragment>
    )
}

export default Gallery