import styled from 'styled-components'


const Profile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 1em;
    @media screen and (max-width: 540px) {
        margin-top: 3em;
    }
`

const ImgBox = styled.div`
    border: 1px solid rgba(40, 44, 52, 0.8);
    background-color: rgba(40, 44, 52, 0.8);
    border-radius: 10em;
    padding: 0.5em;
    width: 15em;
    height: 15em;
    margin-bottom: 1em;
    @media screen and (max-width: 540px) {
        padding: 0.1em;
        width: 7em;
        height: 7em;
    }
`

const ProfilePic = styled.img`
    border-radius: 10em;
    object-fit: cover;
    width: 100%;
    height: 100%;
`


function Enfants({who}) {
    return (
        <Profile>
            <ImgBox>
                <ProfilePic src={who} alt='enfants' />
            </ImgBox>
        </Profile>
    )
}

export default Enfants