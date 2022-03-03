import { useData } from '../utils/hooks/data'
import styled from 'styled-components'


const PhotoBox = styled.div`
    margin-top: 3em;
    padding: 1em;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media screen and (max-width: 780px) {
        padding: 0.1em;
    }
`

const CardPhoto = styled.img`
    height: 15em;
    width: 15em;
    margin: 2em 2em;
    object-fit: cover;
    border-radius: 0.5em;
    box-shadow: 0 15px 31px 0 rgb(0 7 92 / 38%);
    @media screen and (max-width: 780px) {
        margin: 0.5em 0.5em;
        height: 5em;
        width: 5em;
    }
`

function Gallery() {

    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/photos`)

    const photosData = data[0]?.locationData

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <PhotoBox>
            {
                photosData ? (
                    photosData.map((element, index) => {
                        return (
                            <div key={index}>
                                <CardPhoto src={`../../photos/${element}`} alt="pics" />
                            </div>
                        )
                    })) : (null)
            }
        </PhotoBox>
    )
}

export default Gallery