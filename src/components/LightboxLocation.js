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

function LightboxLocation({currentPhoto}) {
    
    const { modalLocation, activeModalLocation } = useContext(ThemeContext)

    const [ numberLocation, setNumberLocation ] = useState(0)

    useEffect(() => {
        setNumberLocation(currentPhoto);
    }, [currentPhoto])

    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/photos`)

    const photosData = data[0]?.locationData

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    const nextSlide = () => numberLocation >= (photosData.length) ? setNumberLocation(8) : setNumberLocation(numberLocation + 1)
    const prevSlide = () => numberLocation <= 8 ? setNumberLocation(photosData.length) : setNumberLocation(numberLocation - 1)

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

    //Attention modifier json et bdd et src pour lightbox et pjotos pour l'extension

    // Ca fonctionnait avec location & lightboxlocation avant de créer celle pour le theme
    //Essayer d'enlever les condition > ou < 8 ci-dessous
    return (
        <div className={`lightbox ${modalLocation}`}>
            <button className="lightbox__close" onClick={() => {
                setNumberLocation(0)
                activeModalLocation()
            }}>Close</button>
            <button className="lightbox__prev" onClick={() => prevSlide()}>Previous</button>
            <button className="lightbox__next" onClick={() => nextSlide()}>Next</button>
            <div className="lightbox__container">
                {
                    photosData ? (
                        photosData.map((index) => {
                    
                            return (
                                <div key={index} className={`photo-box${numberLocation === (index + 1) ? " anim" : ""}`}>
                                    {
                                        numberLocation < 8 ? (
                                            <Photo src={`../../photos/photo_${numberLocation}.jpeg`} alt="pics" />
                                        ) : (
                                            <Photo src={`../../photos/photo_${numberLocation}.jpg`} alt="pics" />
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

export default LightboxLocation