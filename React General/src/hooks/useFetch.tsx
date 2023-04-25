import { useState, useEffect } from 'react'
import { json } from 'stream/consumers'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async (url: unknown) => {
            let res = await fetch(url)
            let json = await res.json()
        }
    }, [url])

    return { data, isPending, error }
}

export default useFetch