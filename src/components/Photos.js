import { ThemeContext } from '../utils/context'
import { Fragment, useContext, useState } from 'react'
import { useData } from '../utils/hooks/data'
import styled from 'styled-components'
import Lightbox from './Lightbox'


const PhotoBox = styled.div`
    margin: 1em auto 0 auto;
    padding: 1em 0 0 1em;
    ${'' /* width: auto; */}
    width: 25em;
    display: flex;
    flex-direction: row;
    justify-content: flew-start;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 780px) {
        padding: 0.1em;
    }
`

const CardPhoto = styled.img`
    height: 6em;
    width: 6em;
    margin: 1em 1em;
    object-fit: cover;
    border-radius: 0.5em;
    box-shadow: 0 15px 31px 0 rgb(0 7 92 / 38%);
    cursor: pointer;
    @media screen and (max-width: 780px) {
        margin: 0.5em 0.5em;
        height: 5em;
        width: 5em;
    }
`

function Gallery() {

    const { activeModal } = useContext(ThemeContext)

    const [ currentPhoto, setCurrentPhoto ] = useState(0)
    const getCurrentIndex = (target) => {
        setCurrentPhoto(target)
    }

    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/photos`)

    const photosData = data[0]?.locationData

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }
    
    return (
        <Fragment>
            <PhotoBox>
                <h2 style={{textAlign: 'center', width: '100%', color: 'white', fontSize: '2.5em'}}>Gallerie photos du site Les Rhodos</h2>
                {
                    photosData ? (
                        photosData.map((element, index) => {
                            return (
                                <div key={index} onClick={() => {
                                    getCurrentIndex(index+1)
                                    activeModal()
                                }}>
                                    <CardPhoto className="gallery-photo" src={`../../photos/photo_${element}.jpg`} alt="pics" />
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