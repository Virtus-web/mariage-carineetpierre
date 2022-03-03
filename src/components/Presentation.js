import styled from 'styled-components'
import HappyCouple from '../assets/cover.jpg'


const PhotoBox = styled.div`
    margin-top: 1em;
    width: 100%;
    height: 25em;
    position: relative;
`

const Styledpics = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
    justify-content: flex-end;
    align-items: center;
`

const PhotoInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function Presentation() {
    
    return (
        <PhotoBox>
            <Styledpics src={HappyCouple} alt='couple'/>
            <PhotoModal>
                <PhotoInfo>
                    <h2 style={{height: '3em', margin: 0, color: 'rgba(250, 250, 250, 1)', fontSize: '2.5em'}}>Pierre & Nico</h2>
                    <p style={{borderBottom: '0.001em solid white', margin: 0, color: 'rgba(250, 250, 250, 1)', fontSize: '1.5em', fontFamily: 'Amatic SC'}}>Are getting married</p>
                    <p style={{margin: 0, color: 'rgba(250, 250, 250, 1)', fontSize: '1.5em', fontFamily: 'Amatic SC'}}>January 22th 2023</p>
                </PhotoInfo>
            </PhotoModal>
        </PhotoBox>
    )
}

export default Presentation