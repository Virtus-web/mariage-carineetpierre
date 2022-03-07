import '../utils/style/lightbox.css'
import { ThemeContext } from '../utils/context'
import { useContext } from 'react'
// import { useState } from 'react'


// const itemsGallery = Array.from(document.querySelectorAll('.photo__content__items'));
// let i = itemsGallery.indexOf(event.target);

function Lightbox() {

    // const modal = document.querySelector(".lightbox")
    // const handleClick = () => {
        
    //     return modal.classList.contains('active') ? modal.classList.remove('active') : null
    // }

    const { modal, activeModal } = useContext(ThemeContext)

    return (
        <div className={`lightbox ${modal}`}>
            <button className="lightbox__close" onClick={() => activeModal()}>Close</button>
            <button className="lightbox__prev">Previous</button>
            <button className="lightbox__next">Next</button>
            <div className="lightbox__container">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Lightbox