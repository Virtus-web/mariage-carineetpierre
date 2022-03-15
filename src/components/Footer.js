import styled from 'styled-components'
import { Link } from 'react-router-dom'

//Grossir le texte
//Lien amenant direct au niveau du formulaire dans la page


const FooterContainer = styled.footer`
    background-color: #282c34;
    padding: 2em;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1.5em;
    opacity: .5;
    cursor: pointer;
    transition: opacity .3s;
    @media screen and (max-width: 340px) {
        font-size: 1em;
    }
`

function Footer() {

    return (
        <FooterContainer>
            <StyledLink className="text-link" to='/contact'>Réponse souhaitée avant le 30 Septembre</StyledLink>
        </FooterContainer>
    )
}

export default Footer