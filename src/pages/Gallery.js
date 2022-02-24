import { useData } from '../utils/hooks/data'
import styled from 'styled-components'


const GalleryBox = styled.div`
    padding: 1em;
    width: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

const CardPhoto = styled.img`
    height: 15em;
    width: 15em;
    margin: 2em 2em;
    object-fit: cover;
    border-radius: 0.5em;
    box-shadow: 0 15px 31px 0 rgb(0 7 92 / 38%);
`

function Gallery() {

    const { data, error } = useData (`http://localhost:3001/photos`)

    const photosData = data[0]?.locationData

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <GalleryBox>
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
        </GalleryBox>
    )
}

export default Gallery