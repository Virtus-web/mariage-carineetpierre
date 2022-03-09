import styled from 'styled-components'
import Photos from '../components/Photos'
import Trailers from '../components/Trailers'
import Ornement from '../assets/images/Ornement4.svg'


const GalleryBox = styled.div`
    background-image: linear-gradient(rgba(64, 88, 68, 0.9), rgba(64, 88, 68, 0.7)), url(${Ornement});
    background-position: 30% 30%;
    background-size: cover;
    background-repeat: no-repeat;
    padding: 1em;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


function Gallery() {

    return (
        <GalleryBox>
            <Trailers />
            <Photos />
        </GalleryBox>
    )
}

export default Gallery