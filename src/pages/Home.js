import styled from 'styled-components'
import Presentation from '../components/Presentation'
import Couple from '../components/Couple'
import CountDownTimer from '../components/CountDownTimer'
// import Wife from '../assets/Wife.jpg'
import Husband from '../assets/Husband.jpg'
import Husband2 from '../assets/Husband2.jpg'


const CoupleBox = styled.div`
    margin-top: 3em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media screen and (max-width: 540px) {
        margin-top: 0;
        flex-direction: column;
    }
`

function Home() {
    
    return (
        <div>
            <Presentation />
            <h2 className="title" style={{color: 'rgba(40, 44, 52, 0.8)', display:'inline-block', lineHeight: '2em', marginTop: '2em'}}>The Happy Couple</h2>
            <CoupleBox>
                <Couple who={Husband2} name='Nico' />
                <Couple who={Husband} name='Pierre' />
            </CoupleBox>
            <CountDownTimer />
        </div>
    )
}

export default Home