import { useState, useEffect } from 'react'


export function useCall(url) {

    const [data, setData] = useState({})
    const [error, setError] = useState(false)

    useEffect(() => {
        if (!url) return

            async function fetchData() {
                try {
                    const response = await fetch(url)
                    const data = await response.json()
                    setData(data)  
                } catch (error) {
                    console.log(error)
                    setError(true)
                }
            }

        fetchData()
    }, [url])

    return { data, error }
}
