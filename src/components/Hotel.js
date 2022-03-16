import { Fragment } from 'react'
import { useData } from '../utils/hooks/data'
import styled from 'styled-components'
import star from '../assets/outils/star.png'


const HotelBox = styled.div`
    padding: 0 auto 0 auto;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`

//Link ?
const HotelCard = styled.a`
    text-decoration: none;
    color: black;
    border-radius: 0.7em;
    margin: 1em 1em;
    position: relative;
    height: 9em;
    width: 9em;
    cursor: pointer;
`

const HotelModal = styled.div`
    width: auto;
    height: auto;
    border-radius: 0.7em;
    background-color: rgba(200, 200, 200, 0.3);
    padding: 0.5em;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 200;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

const HotelImg = styled.img`
    z-index: 100;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 0.7em;
    box-shadow: 0 15px 31px 0 rgb(0 7 92 / 38%);
    transition: transform .1s;
`

const TextBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const HotelName = styled.h3`
    font-size: 1em;
    margin: 0;
`

const StarBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const StarImg = styled.img`
    width: 0.5em;
    height: 0.5em;
`

const HotelNum = styled.p`
    z-index: 300;
    position: absolute;
    top: 4em;
    left: -0.5em;
    background-color: rgba(0, 50, 0, 0.8);
    padding: 0.1em;
    width: 1.2em;
    height: 1.2em;
    border-radius: 1em;
    font-size: 1.5em;
    color: white;
`


const range = [1, 2, 3, 4]

//redirect ou Link
function Hotel() {

    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/hotels`)

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

    return (
        <Fragment>
            <HotelBox>
                {
                    data ? (
                        data.map((element, index) => {
                            return (
                                <HotelCard key={index} className="zoom" href={element.site} target="_blank">
                                    <HotelImg src={`../../hotels/heb${element.photo}`} alt={element.nom} />
                                    <HotelModal>
                                    <TextBox>
                                        <HotelName>{element.nom}</HotelName>
                                        <StarBox>
                                            {range.map((rangeStar, index) =>
                                                element.star >= rangeStar ? (
                                                    <Fragment key={index}>
                                                        <StarImg src={star} alt="hotel-star" />
                                                    </Fragment>
                                                ) : null
                                            )}
                                        </StarBox>
                                    </TextBox>
                                    <HotelNum>{element.num}</HotelNum>
                                    </HotelModal>
                                </HotelCard>
                            )
                        })) : (null)
                }
            </HotelBox>
        </Fragment>
    )
}

export default Hotel

        // <Link>
        //     <HotelBox>
        //         <HotelImg src={picture} alt={`hotel${num}`} />
        //         <HotelNum>
        //             <span>Pastille</span>
        //         </HotelNum>
        //     </HotelBox>
        // </Link>