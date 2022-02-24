import styled from 'styled-components'
import { Link } from 'react-router-dom'

//Grossir le texte
//Lien amenant direct au niveau du formulaire dans la page


const FooterContainer = styled.footer`
    background-color: #282c34;
    margin-top: 3em;
    padding: 1em 2em 1em 2em;
    color: white;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
`

function Footer() {

    return (
        <FooterContainer>
            <StyledLink to='/carineEtpierre/event'>Répoonse souhaitée avant le 30 Septembre</StyledLink>
        </FooterContainer>
    )
}

export default Footer