import styled from 'styled-components'
import Photos from '../components/Photos'
import Trailers from '../components/Trailers'


const GalleryBox = styled.div`
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