import '../utils/style/lightbox.css'
import { ThemeContext } from '../utils/context'
import { useContext, useState, useEffect } from 'react'
import { useData } from '../utils/hooks/data'
import styled from 'styled-components'


const Photo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`

//mediafactory

function Lightbox({currentPhoto}) {
    
    const { modal, activeModal } = useContext(ThemeContext)

    const [ number, setNumber ] = useState(0)

    useEffect(() => {
        setNumber(currentPhoto);
    }, [currentPhoto])

    const nextSlide = () => number === photosData.length ? setNumber(1) : setNumber(number + 1)
    const prevSlide = () => number === 1 ? setNumber(photosData.length) : setNumber(number - 1)

    const { data, error } = useData (`../../photo-data.json`)

    const photosData = data?.locationData

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    // const mediafactory = (media) => {
    //     let mediaHTML = "";

    //     if (media.image) {
    //         mediaHTML = 
    //         ` <a href="#">
    //             <img src="./images/photos/${media.image}" alt="${media.title}" class="photo__content__items" id="item${media.id}" onclick="openLightbox('img', event)"/>
    //         </a>
    //         ` 
    //     }else if (media.video) {
    //         mediaHTML = 
    //         ` <a href="#">
    //             <video controls alt="${media.title}" class="photo__content__items" id="item${media.id}" onclick="openLightbox('video', event)">
    //                 <source src="./images/photos/${media.video}" type="video/mp4">
    //             </video>
    //         </a>
    //         `
    //     }

    //     return mediaHTML
    // }


    // const extension = (pic) => {
    //     const ext = pic.split('.')[1] === "jpeg" ? "jpeg" : "jpg"
    //     return ext
    // }

    // console.log(element.split('.')[1])
    // console.log(photosData.indexOf(element))

    return (
        <div className={`lightbox ${modal}`}>
            <button className="lightbox__close" onClick={() => {
                setNumber(0)
                activeModal()
            }}>Close</button>
            <button className="lightbox__prev" onClick={() => prevSlide()}>Previous</button>
            <button className="lightbox__next" onClick={() => nextSlide()}>Next</button>
            <div className="lightbox__container">
                {
                    photosData ? (
                        photosData.map((element, index) => {
                    
                            return (
                                <div key={index} className={`photo-box${number === (index + 1) ? " anim" : ""}`}>
                                    {
                                        number < 8 ? (
                                            <Photo src={`../../photos/photo_${number}.jpeg`} alt="pics" />
                                        ) : (
                                            <Photo src={`../../photos/photo_${number}.jpg`} alt="pics" />
                                        )
                                    }
                                </div>
                            )
                        })) : (null)
                }
            </div>
        </div>
    )
}

export default Lightbox