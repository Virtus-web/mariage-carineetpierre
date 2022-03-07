import { ThemeContext } from '../utils/context'
import { Fragment, useContext } from 'react'
import { useData } from '../utils/hooks/data'
import styled from 'styled-components'
import Lightbox from './Lightbox'


const PhotoBox = styled.div`
    margin-top: 3em;
    padding: 1em;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 780px) {
        padding: 0.1em;
    }
`

const CardPhoto = styled.img`
    height: 15em;
    width: 15em;
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

    // const modal = document.querySelector(".lightbox")
    // const openLightbox = () => {
    //     return !modal.classList.contains('active') ? modal.classList.add('active') : null
    // }
    
    // const [ active, setActive ] = useState(false)
    // const openLightbox = () => {
    //     setActive(!active)
    // }


    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/photos`)

    const photosData = data[0]?.locationData

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }
    
    return (
        <Fragment>
            <PhotoBox>
                {
                    photosData ? (
                        photosData.map((element, index) => {
                            return (
                                <div key={index} onClick={() => activeModal()}>
                                    <CardPhoto className="gallery-photo" src={`../../photos/${element}`} alt="pics" />
                                </div>
                            )
                        })) : (null)
                }
            </PhotoBox>
            <Lightbox />
        </Fragment>
    )
}

export default Gallery