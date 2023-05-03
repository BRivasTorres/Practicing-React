import React, { useState, useEffect } from 'react'
import SongForm from './SongSearch/SongForm'
import SongDetails from './SongSearch/SongDetails'
import Loader from './Loader'


const SongSearch = () => {
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     if(search === null) return
    //     const fetchData = async () => {
    //         const[artist, song] = search

    //         let artistUrl = ""
    //         let songUrl ""
    //     }
    // }, [search])

    const handleSearch = (data) => {
        console.log(data)
    }

    return (
        <div>
            <h2>Song Search</h2>
            {loading && <Loader />}
            <SongForm
                handleSearch={handleSearch}
            />
            <SongDetails
                search={search}
                lyric={lyric}
                bio={bio}
            />
        </div>
    )
}

export default SongSearch
