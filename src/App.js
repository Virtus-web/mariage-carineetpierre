import './utils/style/app.css'
import { useState } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ThemeContext } from './utils/context'
import GlobalStyle from './utils/GlobalStyle'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Event from './pages/Event'
import Gallery from './pages/Gallery'
import About from './pages/About'
import Error from './pages/Error'


const BlocPage = styled.div`
    background-color : rgba(255, 255, 255, 0.4);
    margin-top: 5em;
`

function App() {

    const [modal, setModal] = useState('')
    const activeModal = () => {
        setModal(modal === 'active' ? '' : 'active')
    }

    return (
        <BrowserRouter className="App">
            <GlobalStyle />
            <BlocPage>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/event" component={Event} />
                    <ThemeContext.Provider value={{ modal, activeModal }}>
                        <Route exact path="/gallery" component={Gallery} />
                    </ThemeContext.Provider>
                    <Route exact path="/about" component={About} />
                    <Route path="*" component={Error} />
                </Switch>
                <Footer />
            </BlocPage>
        </BrowserRouter>
    )
}

export default App;
