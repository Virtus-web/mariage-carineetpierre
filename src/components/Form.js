import { useState } from 'react'
import { useData } from '../utils/hooks/data'
import Axios from 'axios'
import styled from 'styled-components'


const FormContainer = styled.div`
    background-color: #282c34;
    margin-top: 3em;
    padding: 1em 2em 1em 2em;
    color: white;
`

const FormBox = styled.div`
    font-family: 'Cormorant Garamond';
    with: 100vw;
    height: auto;
    padding: 2em 0 0 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const Box = styled.div`
    height: 10em;
    display: flex;
    flex-direction: column;
`

const InputLabel = styled.label`
    margin: 0;
    font-size: 1em;
`

const Input = styled.input`
    margin: 0;
    width: 25vw;
    height: 3em;
`

//Step 1 on rentre le mail (avec un btn connexion) et les autres boutons sont disabled
//Si on est dans la base le bouton annulation se disdisabled et sinon l'autre
//condition si oui ou non alors required enlevé et disable ajouté
//From scratch pour les message d'erreur et le massage réponse envoyée !
//Et si déjà répondu alors message déjà répondu
//Mettre un bouton Annulation disable tant que l'adresse mail n'a pas été reconnue

function Footer() {

    const [ guestName, setGuestName ] = useState("")
    const [ guestMail, setGuestMail ] = useState("")
    const [ guestNumber, setGuestNumber ] = useState("")
    const [ guestAnswer, setGuestAnswer ] = useState("")
    const [ newAnswer, setNewAnswer ] = useState("")

    const addToAnswer = () => {
        Axios.post("http://localhost:3001/guestlist", {
            guestName: guestName,
            guestMail: guestMail,
            guestNumber: guestNumber,
            guestAnswer: guestAnswer
        })
    }

    const updateToAnswer = (id) => {
        setNewAnswer("Non")
        Axios.put("http://localhost:3001/guestlist", {
            id: id,
            newAnswer: newAnswer
        })
    }

    const { data, error } = useData (`http://localhost:3001/guestlist`)

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <FormContainer>
            <InputLabel>Réponse souhaitée avant le 30 Septembre</InputLabel>
            <FormBox action="#" method="post" name="form">
                <Box>
                    <Input disabled className="input" type="text" id="name" placeholder='NOM' required onChange={(e) => {setGuestName(e.target.value)}}/>
                    <div style={{marginTop: '2.5em', width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <div>
                            <Input disabled style={{width: '1.3em', height: '1.3em'}} type="radio" id="choice1" name="presence" value="oui" onChange={(e) => {setGuestAnswer(e.target.value)}} />
                            <InputLabel htmlFor="presence">Oui</InputLabel>
                        </div>
                        <div style={{marginLeft: '2em'}}>
                            <Input disabled style={{width: '1.3em', height: '1.3em'}} type="radio" id="choice2" name="presence" value="non" onChange={(e) => {setGuestAnswer(e.target.value)}} />
                            <InputLabel htmlFor="presence">Non</InputLabel>
                        </div>
                    </div>
                </Box>
                <Box>
                    <Input className="input" type="email" id="email" placeholder='EMAIL' required onChange={(e) => {setGuestMail(e.target.value)}} />

                    <InputLabel style={{marginTop: '1.5em', width: '25vw'}}>Nombre de personnes
                        <select disabled style={{marginLeft: '1em', fontSize:'0.9em', width: '2.5em', height: '1.5em'}} id="number" onChange={(e) => {setGuestNumber(e.target.value)}}>
                            <option value={1} required>1</option>
                            <option value={2} required>2</option>
                            <option value={3} required>3</option>
                            <option value={4} required>4</option>
                            <option value={5} required>5</option>
                        </select>
                    </InputLabel>
                </Box>
            </FormBox>
            <button style={{fontSize: '1.3em', margin: '0 0 2em 0', height: '3em', boxShadow: '0 0.5rem 1rem 0.01rem rgba(255, 255, 255, 0.3)'}} disabled onClick={addToAnswer}>Envoyer la réponse</button>
            <button style={{fontSize: '1.3em', margin: '0 0 2em 0', height: '3em', boxShadow: '0 0.5rem 1rem 0.01rem rgba(255, 255, 255, 0.3)'}} disabled onClick={
                () => updateToAnswer(data._id)
            }>Annulation</button>
        </FormContainer>
    )
}

export default Footer