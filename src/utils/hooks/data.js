import { useState, useEffect } from 'react'
import Axios from 'axios'


export function useData(url) {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    useEffect(() => {
        Axios.get(url)
        .then((response) => {
            setData(response.data)
        })
        .catch((error) => {
            console.log(error)
            setError(true)
        })
    }, [url])

    return { data, error }
}
