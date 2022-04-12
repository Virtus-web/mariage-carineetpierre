import styled from 'styled-components'
import HappyCouple from '../assets/images/cover.jpg'


const PhotoBox = styled.div`
    margin-top: 1em;
    margin-bottom: 2em;
    width: 100%;
    height: 30em;
    position: relative;
`

const Styledpics = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${'' /* object-position: 5em; */}
    z-index: 100;
`

const PhotoModal = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(200, 200, 200, 0.6);
    position: absolute;
    top: 0;
    z-index: 200;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const PhotoInfo = styled.div`
    height: 100%;
    padding: 1em 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


const TextNames = styled.h2`
    ${'' /* color: rgba(255, 255, 255, 0.7); */}
    color: white;
    height: 3em;
    margin: 0;
    font-size: 5em;
    @media screen and (max-width: 640px) {
        font-size: 3.5em;
    }
    @media screen and (max-width: 340px) {
        font-size: 2em;
    }
`

function Presentation() {
    
    return (
        <PhotoBox>
            <Styledpics src={HappyCouple} alt='couple'/>
            <PhotoModal>
                <PhotoInfo className="names">
                    <TextNames>Carine & Pierre</TextNames>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <p style={{borderBottom: '0.001em solid white', margin: 0, color: 'rgba(250, 250, 250, 1)', fontSize: '1.5em', fontFamily: 'Amatic SC'}}>Are getting married</p>
                        <p style={{margin: 0, color: 'rgba(250, 250, 250, 1)', fontSize: '1.5em', fontFamily: 'Amatic SC'}}>January 22th 2023</p>
                    </div>
                </PhotoInfo>
            </PhotoModal>
        </PhotoBox>
    )
}

export default Presentation