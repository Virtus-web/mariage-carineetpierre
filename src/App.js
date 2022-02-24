import './App.css'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
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
    return (
        <BrowserRouter className="App">
            <GlobalStyle />
            <BlocPage>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/event" component={Event} />
                    <Route exact path="/gallery" component={Gallery} />
                    <Route exact path="/about" component={About} />
                    <Route path="*" component={Error} />
                </Switch>
                <Footer />
            </BlocPage>
        </BrowserRouter>
    )
}

export default App;
