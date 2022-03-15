// import { Fragment } from 'react'
// import Guestlist from '../components/GuestList'
// import Form from '../components/Form'
// import "../utils/style/app.css"
import { useState, useContext } from "react"
import { ThemeContext } from '../utils/context'
import Axios from 'axios'
import TextForm from "../components/TextForm"
import RadioForm from "../components/RadioForm"
import SelectForm from "../components/SelectForm"
import ModalForm from "../components/ModalForm"


function Contact() {

    const inputs = [
        {
        // num: 1,
        // valuename: "guestName",
        name: "username",
        type: "text",
        placeholder: "Nom",
        errorMessage:
            "20 lettres, pas plus !",
        label: "Username",
        pattern: "^[A-Za-z]{3,20}$",
        // required: ""
        },
        {
        // num: 2,
        // valuename: "guestMail",
        name: "email",
        type: "email",
        placeholder: "Email",
        errorMessage: "Veuillez renseigner une adresse mail !",
        label: "Email",
        // pattern: "/^[a-z0-9.-_]+@[a-z0-9.-_]{2,}.[a-z]{2,4}$/",
        // required: true
        }
    ]

    const radios = [
        {
        // valuename: "guestAnswer",
        name: "presence",
        type: "radio",
        id: "oui",
        value: "oui",
        errorMessage: "Réponds !",
        label: "oui"
        // required: true
        },
        {
        // valuename: "guestAnswer",
        name: "presence",
        type: "radio",
        id: "non",
        value: "non",
        errorMessage: "Réponds !",
        label: "non"
        // required: true
        }
    ]

    const selects = [
        {
        // num: 5,
        // valuename: "guestNumber",
        // type:"number",
        errorMessage: "Accompagné ou pas ?",
        label: "Nombre de personnes"
        // min: "1",
        // max: "10",
        // required: true
        }
    ]


    // const [values, setValues] = useState({
    //     guestName: "",
    //     guestMail: "",
    //     guestAnswer: "",
    //     guestNumber: ""
    // })

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
    // const [ error, setError ] = useState(true)

    const addToAnswer = (e) => {
        e.preventDefault()
        // console.log(error)
        
        // error ? (console.log('Bug')) : (console.log('Ok'))
        // document.querySelector('#form').checkValidity() ? setError(false) : (console.log('Bug'))

        if (document.querySelector('#form').checkValidity()) {

            // setError(false)
            activeModal()

            Axios.post("https://mariage-carineetpierre.herokuapp.com/guestlist", {
                guestName: guestName,
                guestMail: guestMail,
                guestNumber: guestNumber,
                guestAnswer: guestAnswer
            })
            .then(response => {console.log(response)})//Ici le loader et l'erreur avec redirection
            .catch(error => {console.log(error)})

            console.log('Envoyé')

        } else if (document.querySelector('#form').checkValidity() && warning) {

            // setError(false)
            activeWarning()
            
            Axios.post("https://mariage-carineetpierre.herokuapp.com/guestlist", {
                guestName: guestName,
                guestMail: guestMail,
                guestNumber: guestNumber,
                guestAnswer: guestAnswer
            })
            .then(response => {console.log(response)})//Ici le loader et l'erreur avec redirection
            .catch(error => {console.log(error)})
            
            activeModal()
            console.log('Envoyé')

        } else if (!document.querySelector('#form').checkValidity() && !warning) {

            // e.preventDefault()
            // setError(true)
            activeWarning()
            console.log('Pas envoyé : Erreur présente')

        } else if (!document.querySelector('#form').checkValidity() && warning) {

            // e.preventDefault()
            // setError(true)
            console.log('Pas envoyé : Erreur présente')

        }       
    }

    const { warning, activeWarning, activeModal } = useContext(ThemeContext)


    return (
        <div className="form-container">
            {/* <form onSubmit={addToAnswer} id="form" action="/contact" method="" name="form" onInvalid={() => setError(true)}> */}
            {/* <form onSubmit={addToAnswer} id="form" action="/contact" method="" name="form"> */}
            <form id="form" action="/contact" method="" name="form">
                <h1>Formulaire de réponse</h1>
                <TextForm
                    {...inputs[0]}
                     onChange={(e) => setGuestName(e.target.value)}
                    //  onInvalid={() => true ? console.log('non') : console.log('ok')}
                />
                <TextForm
                    {...inputs[1]}
                    onChange={(e) => setGuestMail(e.target.value)}
                    // onInvalid={() => {
                    //     setError(true)
                    //  }}
                />
                <h2>Présence au mariage ?</h2>
                <div className="radio-box">
                    <RadioForm
                        {...radios[0]}
                        htmlFor={radios[0].name}
                        onChange={(e) => setGuestAnswer(e.target.value)}
                        // onInvalid={() => {
                        //     setError(true)
                        // }}
                    />
                    <RadioForm
                        {...radios[1]}
                        htmlFor={radios[1].name}
                        onChange={(e) => setGuestAnswer(e.target.value)}
                        // onInvalid={() => {
                        //     setError(true)
                        // }}
                    />
                </div>
                <h2>Nombre de personnes</h2>
                <div className="select-box">
                    <SelectForm
                        {...selects}
                        type= "number"
                        min= "1"
                        max= "5"
                        onChange={(e) => setGuestNumber(e.target.value)}
                        // onInvalid={() => {
                        //     setError(true)
                        // }}
                    />
                </div>
                <span className={`form-warning ${warning}`}>Informations manquantes !</span>
                {/* <button disabled={error ? true : false} onClick={addToAnswer}>Répondre</button> */}
                {/* <button onSubmit={() => addToAnswer}>Répondre</button> */}
                <button onClick={addToAnswer}>Répondre</button>
                {/* <button disabled={error ? true : false}>Répondre</button> */}
                {/* <button>Répondre</button> */}
            </form>
            <ModalForm />
        </div>
    )
}

export default Contact
