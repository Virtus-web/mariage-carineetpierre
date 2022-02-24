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
    border: 0.01em solid rgba(40, 44, 52, 0.8);
    border-radius: 7em;
    padding: 0.5em;
    width: 10em;
    height: 10em;
    margin-bottom: 1em;
`

const ProfilePic = styled.img`
    border-radius: 7em;
    object-fit: cover;
    width: 100%;
    height: 100%;
`

function Couple({who, name}) {
    return (
        <Profile>
            <ImgBox>
                <ProfilePic src={who} alt='wife' />
            </ImgBox>
            <h2 style={{lineHeight: '2em', height: 'auto', margin: 0, fontSize: '2em'}}>{name}</h2>
            <p style={{lineHeight: '1.5em', height: 'auto', margin: 0, fontFamily: 'Amatic SC', textAlign: 'justify', width: '10em'}}>Lorem ipsum dolor sit amet. Sit sequi galisum sit voluptatem culpa et omnis dolor aut quos deleniti ut harum aliquam sit itaque architecto est nihil molestias.</p>
        </Profile>
    )
}

export default Couple