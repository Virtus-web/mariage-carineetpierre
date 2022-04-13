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
    padding: 0.1rem;
    width: 3em;
    height: 3em;
    margin-bottom: 1em;
`

const ProfilePic = styled.img`
    border-radius: 10em;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

const ProfileDetails = styled.h2`
    font-family: 'Cormorant Garamond';
    color: rgba(255, 255, 255, .7);
    line-height: 1.5em;
    font-size: 1em;
    margin: 0;
    @media screen and (max-width: 340px) {
        font-size: .9em;
    }
`

function Couple({who, tel, mail}) {
    return (
        <Profile>
            <ImgBox>
                <ProfilePic src={who} alt='couple' />
            </ImgBox>
            <ProfileDetails>{tel}</ProfileDetails>
            <ProfileDetails>{mail}</ProfileDetails>
        </Profile>
    )
}

export default Couple