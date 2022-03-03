import { useState } from 'react'
import Axios from 'axios'

function Information() {

    const [ image, setImage ] = useState("")

    const addImage = () => {
        Axios.post("https://mariage-carineetpierre.herokuapp.com/testlist", {
            image: image
        })
    }

    return (

        <div>
            <input type="file" name="test" onChange={(e) => {setImage(e.target.value)}}></input>
            <button style={{fontSize: '1.3em', margin: '0 0 2em 0', height: '3em', boxShadow: '0 0.5rem 1rem 0.01rem rgba(255, 255, 255, 0.3)'}} onClick={addImage}>Envoyer la réponse</button>
        </div>
        
    )
}

export default Information
