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

function LightboxTheme({currentPhoto}) {
    
    const { modalTheme, activeModalTheme } = useContext(ThemeContext)

    const [ numberTheme, setNumberTheme ] = useState(0)

    useEffect(() => {
        setNumberTheme(parseInt(currentPhoto));
    }, [currentPhoto])

    const nextSlide = () => {
        numberTheme === 7 ? setNumberTheme(1) : setNumberTheme(numberTheme + 1)
        console.log(numberTheme)
    }
    const prevSlide = () => {
        numberTheme === 1 ? setNumberTheme(7) : setNumberTheme(numberTheme - 1)
        console.log(numberTheme)
    }

    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/photos`)

    const photosData = data[0]?.locationData

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

    //Attention modifier json et bdd et src pour lightbox et pjotos pour l'extension

    return (
        <div className={`lightbox ${modalTheme}`}>
            <button className="lightbox__close" onClick={() => {
                setNumberTheme(0)
                activeModalTheme()
            }}>Close</button>
            <button className="lightbox__prev" onClick={() => prevSlide()}>Previous</button>
            <button className="lightbox__next" onClick={() => nextSlide()}>Next</button>
            <div className="lightbox__container">
                {
                    photosData ? (
                        photosData.map((element, index) => {
                    
                            return (
                                <div key={index} className={`photo-box${numberTheme === (index + 1) ? " anim" : ""}`}>
                                    {
                                        numberTheme < 8 ? (
                                            <Photo src={`../../photos/photo_${numberTheme}.jpeg`} alt="pics" />
                                        ) : (
                                            <Photo src={`../../photos/photo_${numberTheme}.jpg`} alt="pics" />
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

export default LightboxTheme