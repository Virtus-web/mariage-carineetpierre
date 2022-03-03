import styled from 'styled-components'

const VideoBox = styled.div`
    padding: 1em;
`

const Player = styled.video`
    object-fit: cover;
`

function Trailers() {

    return (
        <VideoBox>
            <Player controls alt="trailer" width="100%" height="300" poster="../../videos/poster1.png">
                <source src={`../../videos/trailer1.mp4`} type="video/mp4" />
            </Player>
        </VideoBox>
    )
}

export default Trailers
