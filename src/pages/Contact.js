// import { Fragment } from 'react'
// import Guestlist from '../components/GuestList'
// import Form from '../components/Form'
// import "../utils/style/app.css"
import { useState, useContext } from "react"
import { ThemeContext } from '../utils/context'
import styled from 'styled-components'
import Axios from 'axios'
import TextForm from "../components/TextForm"
import RadioForm from "../components/RadioForm"
import SelectForm from "../components/SelectForm"
import ModalForm from "../components/ModalForm"


const FormBox = styled.div`
    background-image: linear-gradient(var(--color-bg-light), var(--color-bg-light));
    padding: 1em;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1380px) {
        background-position: 30% 20%;
        background-size: 200%;
        background-repeat: repeat;
    }
`


function Contact() {

    // const inputs = [
    //     {
    //     // num: 1,
    //     // valuename: "guestName",
    //     name: "username",
    //     type: "text",
    //     placeholder: "Nom",
    //     errorMessage: "30 lettres, pas plus !",
    //     label: "Username",
    //     pattern: "^[A-Za-z ]{3,30}$"
    //     // required: ""
    //     },
    //     {
    //     // num: 2,
    //     // valuename: "guestMail",
    //     name: "email",
    //     type: "email",
    //     placeholder: "Email",
    //     errorMessage: "Veuillez renseigner une adresse mail !",
    //     label: "Email"
    //     // pattern: "/^[a-z0-9.-_]+@[a-z0-9.-_]{2,}.[a-z]{2,4}$/",
    //     // required: true
    //     }
    // ]

    // const radios = [
    //     {
    //     // valuename: "guestAnswer",
    //     // name: "presence",
    //     type: "radio",
    //     id: "oui",
    //     value: "oui",
    //     errorMessage: "Réponds !",
    //     label: "oui"
    //     // required: true
    //     },
    //     {
    //     // valuename: "guestAnswer",
    //     // name: "presence",
    //     type: "radio",
    //     id: "non",
    //     value: "non",
    //     errorMessage: "Réponds !",
    //     label: "non"
    //     // required: true
    //     }
    // ]

    // const selects = [
    //     {
    //     // num: 5,
    //     // valuename: "guestNumber",
    //     // type:"number",
    //     errorMessage: "Accompagné ou pas ?",
    //     label: "Nombre de personnes"
    //     // min: "1",
    //     // max: "10",
    //     // required: true
    //     }
    // ]


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
            // activeModalForm()

            Axios.post("https://mariage-carineetpierre.herokuapp.com/guestlist", {
                guestName: guestName,
                guestMail: guestMail,
                guestNumber: guestNumber,
                guestAnswer: guestAnswer
            })
            .then(response => {console.log(response)})//Ici le loader et l'erreur avec redirection
            .catch(error => {console.log(error)})

            activeModalForm()
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
            
            activeModalForm()
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

    const { warning, activeWarning, activeModalForm } = useContext(ThemeContext)


    return (
        <FormBox className="form-container">
            {/* <form onSubmit={addToAnswer} id="form" action="/contact" method="" name="form" onInvalid={() => setError(true)}> */}
            {/* <form onSubmit={addToAnswer} id="form" action="/contact" method="" name="form"> */}
            <form id="form" action="/contact" method="" name="form">
                <h1>Formulaire de réponse</h1>
                {/* //ICI */}
                <TextForm
                    type= "text"
                    name= "username"
                    placeholder= "Nom"
                    errorMessage= "30 lettres, pas plus !"
                    label= "Username"
                    pattern= "^[A-Za-z ]{3,30}$"
                    
                    onChange={(e) => setGuestName(e.target.value)}
                    //  onInvalid={() => true ? console.log('non') : console.log('ok')}
                />
                <TextForm
                    type= "email"
                    name= "email"
                    placeholder= "Email"
                    errorMessage= "Veuillez renseigner une adresse mail !"
                    label= "Username"
                    // pattern= "/^[a-z0-9.-_]+@[a-z0-9.-_]{2,}\.[a-z]{2,4}$/"

                    onChange={(e) => setGuestMail(e.target.value)}
                    // onInvalid={() => {
                    //     setError(true)
                    //  }}
                />
                <h2>Présence au mariage ?</h2>
                <div className="radio-box">
                    <RadioForm
                        type= "radio"
                        id= "oui"
                        name="presence"
                        value= "oui"
                        errorMessage= "Réponds !"
                        label= "oui"
                        htmlFor="oui"
                        onChange={(e) => setGuestAnswer(e.target.value)}
                        // onInvalid={() => {
                        //     setError(true)
                        // }}
                    />
                    <RadioForm
                        type= "radio"
                        id= "non"
                        name="presence"
                        value= "non"
                        errorMessage= "Réponds !"
                        label= "non"
                        htmlFor="non"
                        onChange={(e) => setGuestAnswer(e.target.value)}
                        // onInvalid={() => {
                        //     setError(true)
                        // }}
                    />
                </div>
                <h2>Nombre de personnes</h2>
                <div className="select-box">
                    <SelectForm
                        errorMessage= "Accompagné ou pas ?"
                        label= "Nombre de personnes"
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
        </FormBox>
    )
}

export default Contact
