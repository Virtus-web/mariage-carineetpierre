import { ThemeContext } from '../utils/context'
import { Fragment, useContext, useState } from 'react'
import { useData } from '../utils/hooks/data'
import styled from 'styled-components'
import Lightbox from './Lightbox'


const PhotoBox = styled.div`
    margin: 1em auto 0 auto;
    padding: 1em 0 0 2em;
    ${'' /* width: auto; */}
    width: 25em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 780px) {
        width: 15em;
        padding: 1em 0 0 0;
    }
    @media screen and (max-width: 480px) {
        width: 10em;
    }
    @media screen and (max-width: 360px) {
        flex-direction: column;
        width: auto;
        padding: 0;
    }
`

const CardPhoto = styled.img`
    height: 9em;
    width: 9em;
    margin: 1em 1em;
    object-fit: cover;
    border-radius: 0.5em;
    box-shadow: 0 15px 31px 0 rgb(0 7 92 / 38%);
    cursor: pointer;
    @media screen and (max-width: 780px) {
        margin: 0.5em 0.5em;
        height: 4em;
        width: 4em;
    }
    @media screen and (max-width: 360px) {
        height: 7em;
        width: 7em;
    }
`

const GalleryTitle = styled.div`
    margin: 1em auto 0 auto;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 2.5em;
    @media screen and (max-width: 780px) {
        width: 80%;
        font-size: 1.5em;
    }
`

function Gallery() {

    const { activeModal } = useContext(ThemeContext)

    const [ currentPhoto, setCurrentPhoto ] = useState(0)

    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/photos`)

    const photosData = data?.locationData

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }
    
    return (
        <Fragment>
            <GalleryTitle>Gallerie photos du site Les Rhodos</GalleryTitle>
            <PhotoBox>
                {
                    photosData ? (
                        photosData.map((element, index) => {
                            return (
                                <div key={index} onClick={() => {
                                    setCurrentPhoto(index+1)
                                    activeModal()
                                }}>
                                    <CardPhoto className="gallery-photo" src={`../../photos/photo_${element}`} alt="pics" />
                                </div>
                            )
                        })) : (null)
                }
            </PhotoBox>
            <Lightbox currentPhoto={currentPhoto} />
        </Fragment>
    )
}

export default Gallery