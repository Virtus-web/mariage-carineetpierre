import { useData } from '../utils/hooks/data'

function GuestList() {

    const { data, error } = useData (`https://mariage-carineetpierre.herokuapp.com/guestlist`)

    if (error) {
        return <span>Oups il y a eu un problème</span>
    }

  return (
    <div>
        <h2>Liste des invités</h2>
            {
                data ? (
                    data.map((element, index) => {
                        return (
                            <ul key={index}>
                                <li>{element.guestName} {element.guestAnswer}</li>
                            </ul>
                        )
                })) : (null)
            }
    </div>
  )
}

export default GuestList