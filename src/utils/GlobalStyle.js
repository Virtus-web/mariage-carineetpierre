import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Parisienne', 'Cormorant Garamond', 'Amatic SC', 'Great Vibes', cursive, sans-serif;
        text-align: center;
    }

    a {
        text-decoration: none;
    }

    li {
        list-style:none;
    }
`

export default GlobalStyle