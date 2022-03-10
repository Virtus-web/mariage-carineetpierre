import styled from 'styled-components'


const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    @media screen and (max-width: 540px) {
        margin-top: 3em;
    }
`

const ImgBox = styled.div`
    border: none;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 7em;
    padding: 0.5em;
    width: 7em;
    height: 7em;
    margin-bottom: 1em;
    @media screen and (max-width: 1120px) {
        width: 5em;
        height: 5em;
    }
    @media screen and (max-width: 920px) {
        width: 7em;
        height: 7em;
    }
    @media screen and (max-width: 540px) {
        width: 5em;
        height: 5em;
    }
    @media screen and (max-width: 340px) {
        width: 4em;
        height: 4em;
    }
`

const ProfilePic = styled.img`
    border-radius: 7em;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

function Kids({who, name}) {
    return (
        <Profile>
            <ImgBox>
                <ProfilePic src={who} alt='kids' />
            </ImgBox>
            <h2 style={{color: 'white', lineHeight: '2em', height: 'auto', margin: 0, fontSize: '2em'}}>{name}</h2>
        </Profile>
    )
}

export default Kids