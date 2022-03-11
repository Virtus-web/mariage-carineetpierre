// import { Fragment } from 'react'
// import Guestlist from '../components/GuestList'
// import Form from '../components/Form'
import "../utils/style/app.css"
import { useState } from "react"
import Axios from 'axios'
import TextForm from "../components/TextForm"
import RadioForm from "../components/RadioForm"
import SelectForm from "../components/SelectForm"


function Contact() {

    // const [values, setValues] = useState({
    //     guestName: "",
    //     guestMail: "",
    //     guestAnswer: "",
    //     guestNumber: ""
    // })

    const inputs = [
        {
        num: 1,
        valuename: "guestName",
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
            "Que des lettres connard, et pas plus de 10 !",
        label: "Username",
        pattern: "^[A-Za-z]{3,10}$",
        required: true
        },
        {
        num: 2,
        valuename: "guestMail",
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Un mail on a dit, connard !",
        label: "Email",
        // pattern: "/^[a-z0-9.-_]+@[a-z0-9.-_]{2,}.[a-z]{2,4}$/",
        required: true
        }
    ]

    const radios = [
        {
        num: 3,
        valuename: "guestAnswer",
        name: "presence",
        type: "radio",
        id: "oui",
        errorMessage: "Réponds, connard !",
        label: "oui",
        required: true
        },
        {
        num: 4,
        valuename: "guestAnswer",
        name: "presence",
        type: "radio",
        id: "non",
        errorMessage: "Réponds, connard !",
        label: "non",
        required: true
        }
    ]

    const selects = [
        {
        num: 5,
        valuename: "guestNumber",
        errorMessage: "Accompagné ou pas, connard !",
        label: "Nombre de personnes",
        required: true
        }
    ]

    // const onChange = (e) => {
    //     setValues({ ...values, [e.target.valuename]: e.target.value })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }


    const [ guestName, setGuestName ] = useState("")
    const [ guestMail, setGuestMail ] = useState("")
    const [ guestNumber, setGuestNumber ] = useState("")
    const [ guestAnswer, setGuestAnswer ] = useState("")

    const addToAnswer = (e) => {
        e.preventDefault()
        
        Axios.post("https://mariage-carineetpierre.herokuapp.com/guestlist", {
            guestName: guestName,
            guestMail: guestMail,
            guestNumber: guestNumber,
            guestAnswer: guestAnswer
        })
    }


    return (
        <div className="app">
            <form action="#" method="post" name="form">
                <h1>Formulaire de réponse</h1>
                <TextForm
                    {...inputs[0]}
                     onChange={(e) => {setGuestName(e.target.value)}}
                />
                <TextForm
                    {...inputs[1]}
                    onChange={(e) => {setGuestMail(e.target.value)}}
                />
                <h2>Présence au mariage ?</h2>
                <div className="radio-box">
                    <RadioForm
                        {...radios[0]}
                        htmlFor={radios[0].id}
                        onChange={(e) => {setGuestAnswer(e.target.value)}}
                    />
                    <RadioForm
                        {...radios[1]}
                        htmlFor={radios[1].id}
                        onChange={(e) => {setGuestAnswer(e.target.value)}}
                    />
                </div>
                <h2>Nombre de personnes</h2>
                <div className="select-box">
                    <SelectForm
                        {...selects}
                        onChange={(e) => {setGuestNumber(e.target.value)}}
                    />
                </div>
                <button onClick={addToAnswer}>Répondre</button>
            </form>
        </div>
    )
}

export default Contact
