import { useState } from 'react'
// import { useData } from '../utils/hooks/data'
import Axios from 'axios'
import styled from 'styled-components'


const FormContainer = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    margin-top: 3em;
    padding: 1em 2em 1em 2em;
    color: white;
`

const FormBox = styled.div`
    font-family: 'Cormorant Garamond';
    margin-top: 3em;
    with: 100vw;
    height: 50vh;
    padding: 2em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Box = styled.div`
    height: 10em;
    width: 100%;
    margin-bottom: 1em;
    display: flex;
    flex-direction: column;
`

const InputLabel = styled.label`
    margin: 0;
    font-size: 1.5em;
`

const Input = styled.input`
    width: 25vw;
    height: 3em;
    margin: 0 auto;
    font-size: 1.3em;
`

const BtnForm = styled.button`
    width: auto;
    height: 2em;
    color:black;
    font-size: 1.5em;
    margin: 3em 0 2em 0;
    box-shadow: 0 0.5rem 1rem 0.01rem rgba(255, 255, 255, 0.3);
`

//Step 1 on rentre le mail (avec un btn connexion) et les autres boutons sont disabled
//Si on est dans la base le bouton annulation se disdisabled et sinon l'autre
//condition si oui ou non alors required enlevé et disable ajouté
//From scratch pour les message d'erreur et le massage réponse envoyée !
//Et si déjà répondu alors message déjà répondu
//Mettre un bouton Annulation disable tant que l'adresse mail n'a pas été reconnue

function Form() {

    const [ guestName, setGuestName ] = useState("")
    const [ guestMail, setGuestMail ] = useState("")
    const [ guestNumber, setGuestNumber ] = useState("")
    const [ guestAnswer, setGuestAnswer ] = useState("")
    // const [ newAnswer, setNewAnswer ] = useState("")

    const addToAnswer = () => {
        Axios.post("https://mariage-carineetpierre.herokuapp.com/guestlist", {
            guestName: guestName,
            guestMail: guestMail,
            guestNumber: guestNumber,
            guestAnswer: guestAnswer
        })
    }

    // const updateToAnswer = (id) => {
    //     setNewAnswer("Non")
    //     Axios.put("https://mariage-carineetpierre.herokuapp.com/guestlist", {
    //         id: id,
    //         newAnswer: newAnswer
    //     })
    // }

    // const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/guestlist`)

    // if (error) {
    //     return <span>Oups il y a eu un problème</span>
    // }

    return (
        <FormContainer>
            <InputLabel>Formulaire de réponse</InputLabel>
            <FormBox action="#" method="post" name="form">
                <Box>
                    <Input className="input" type="text" id="name" placeholder='NOM' required onChange={(e) => {setGuestName(e.target.value)}}/>
                    <Input style={{marginTop: '1em'}} className="input" type="email" id="email" placeholder='EMAIL' required onChange={(e) => {setGuestMail(e.target.value)}} />
                </Box>

                <Box style={{marginTop: '3em'}}>
                    <InputLabel style={{marginBottom: '1em', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}> Présence au mariage ?</InputLabel>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <div>
                            <Input style={{width: '1.3em', height: '1.3em'}} type="radio" id="choice1" name="presence" value="oui" onChange={(e) => {setGuestAnswer(e.target.value)}} />
                            <InputLabel style={{marginLeft: '0.5em'}} htmlFor="presence">Oui</InputLabel>
                        </div>
                        <div style={{marginLeft: '2em'}}>
                            <Input style={{width: '1.3em', height: '1.3em'}} type="radio" id="choice2" name="presence" value="non" onChange={(e) => {setGuestAnswer(e.target.value)}} />
                            <InputLabel style={{marginLeft: '0.5em'}} htmlFor="presence">Non</InputLabel>
                        </div>
                    </div>
                </Box>

                <Box style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <InputLabel>Nombre de personnes</InputLabel>
                        <select style={{marginTop: '1em', fontSize:'1.5em', width: '2.5em', height: '1.5em'}} id="number" onChange={(e) => {setGuestNumber(e.target.value)}}>
                            <option value={1} required>1</option>
                            <option value={2} required>2</option>
                            <option value={3} required>3</option>
                            <option value={4} required>4</option>
                        </select>
                </Box>
            </FormBox>
            <BtnForm onClick={addToAnswer}>Envoyer la réponse</BtnForm>
            {/* <button style={{fontSize: '1.3em', margin: '0 0 2em 0', height: '3em', boxShadow: '0 0.5rem 1rem 0.01rem rgba(255, 255, 255, 0.3)'}} onClick={
                () => updateToAnswer(data._id)
            }>Annulation</button> */}
        </FormContainer>
    )
}

export default Form