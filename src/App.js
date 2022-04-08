import './utils/style/app.css'
import { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeContext } from './utils/context'
import GlobalStyle from './utils/GlobalStyle'
import Header from './components/Header'
import Home from './pages/Home'
import Event from './pages/Event'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Error from './pages/Error'


const BlocPage = styled.div`
    ${'' /* background-color : rgba(255, 255, 255, 0.4); */}
    ${'' /* background-color : rgba(64, 88, 68, 0.5); */}
    ${'' /* background-color : rgba(90, 120, 115, .5); */}
    margin-top: 5em;
`

function App() {

    const [modal, setModal] = useState('')
    const activeModal = () => {
        setModal(modal === 'active' ? '' : 'active')
    }

    const [warning, setWarning] = useState('')
    const activeWarning = () => {
        setWarning(warning === 'active' ? '' : 'active')
    }

    return (
        <BrowserRouter className="App">
            <ThemeContext.Provider value={{ modal, activeModal, warning, activeWarning }}>
                <GlobalStyle />
                <BlocPage>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/gallery" component={Gallery} />
                        <Route exact path="/event" component={Event} />
                        <Route exact path="/contact" component={Contact} />
                        <Route path="*" component={Error} />
                    </Switch>
                </BlocPage>
            </ThemeContext.Provider>
        </BrowserRouter>
    )
}

export default App;
