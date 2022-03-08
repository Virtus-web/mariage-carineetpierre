import styled from 'styled-components'

const VideoBox = styled.div`
    width: 100%;
    padding: 0;
    margin: 0;
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
