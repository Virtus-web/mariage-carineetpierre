import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import FairePart from '../assets/images/FairePart.jpg'


const HeaderContainer = styled.header`
    border-bottom: 0.01em solid #282c34;
    ${'' /* margin-top: 0.5em; */}
    padding: 0.5em 1em 1.5em 1em;
    position: fixed;
    top: 0;
    left: 20vw;
    right: 20vw;
    z-index: 999;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 3vh;
    @media screen and (max-width: 780px) {
        height: 4vh;
        border-bottom: none;
    }
`

const StyledLink = styled(NavLink)`
    height: 1.30em;
    color: rgba(40, 44, 52, 0.8);
    font-weight: bold;
    font-size: 1em;
    text-decoration: none;
    margin: 0;
    @media screen and (max-width: 780px) {
        display: block;
        padding: 1rem 0 1rem 0;
        font-size: 5vw;
        color: white;
    }
`

// const Logo = styled.img`
//     height: 3em;
//     width: 3em;
// `

function Header() {

    const [scrolling, setScrolling] = useState(false)

    const handleHeader = () => {
        const scrollValue = document.documentElement.scrollTop
        scrollValue > 50 ? setScrolling(true) : setScrolling(false)
    }

    window.addEventListener('scroll', handleHeader)

    const [ showNav, setShowNav ] = useState(false)
    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <HeaderContainer className={scrolling ? "show-header" : "hide-header"}>
            <div className={`nav-container ${showNav ? "show-nav" : "hide-nav"}`}>
                {/* <Logo src={FairePart} alt="logo" /> */}
                <StyledLink exact to='/' className={`nav-link slide-1 ${showNav ? "show-nav" : "hide-nav"}`} onClick={handleShowNav}>Home</StyledLink>
                <StyledLink to='/event' className={`nav-link slide-2 ${showNav ? "show-nav" : "hide-nav"}`} onClick={handleShowNav}>Event</StyledLink>
                <StyledLink to='/gallery' className={`nav-link slide-3 ${showNav ? "show-nav" : "hide-nav"}`} onClick={handleShowNav}>Gallery</StyledLink>
                <StyledLink to='/contact' className={`nav-link slide-4 ${showNav ? "show-nav" : "hide-nav"}`} onClick={handleShowNav}>Contact</StyledLink>
            </div>
            <button className={`nav-burger ${showNav ? "show-nav" : "hide-nav"}`} onClick={handleShowNav}>
                <span className={`burger-bar ${showNav ? "show-nav" : "hide-nav"}`}></span>
            </button>
        </HeaderContainer>
    )
}

export default Header