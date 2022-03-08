import '../utils/style/lightbox.css'
import { ThemeContext } from '../utils/context'
import { useContext, useState } from 'react'
import { useData } from '../utils/hooks/data'
import styled from 'styled-components'


const Photo = styled.img`
    width: 100vw;
    height: 100vh;
    object-fit: contain;
`


function Lightbox({currentPhoto}) {
    
    const { modal, activeModal } = useContext(ThemeContext)
    
    const [ num, setNum ] = useState(0)
    let slider = num + currentPhoto
    console.log(num, slider, currentPhoto)

    const nextSlide = () => slider === photosData.length ? setNum(1-currentPhoto) : setNum(num + 1)
    const prevSlide = () => slider === 1 ? setNum(photosData.length-currentPhoto) : setNum(num - 1)

    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/photos`)

    const photosData = data[0]?.locationData

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <div className={`lightbox ${modal}`}>
            <button className="lightbox__close" onClick={() => {
                setNum(0)
                activeModal()
            }}>Close</button>
            <button className="lightbox__prev" onClick={() => prevSlide()}>Previous</button>
            <button className="lightbox__next" onClick={() => nextSlide()}>Next</button>
            <div className="lightbox__container">
                {
                    photosData ? (
                        photosData.map((element, index) => {
                            return (
                                <div key={index} className={`photo-box${slider === index+1 ? " anim" : ""}`}>
                                    <Photo src={`../../photos/photo_${slider}.jpg`} alt="pics" />
                                </div>
                            )
                        })) : (null)
                }
            </div>
        </div>
    )
}

export default Lightbox