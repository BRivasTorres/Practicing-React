import * as React from 'react';
import { useState } from 'react';

const initialForm = {
    artist: "",
    song: ""
}

const SongForm = ({ handleSearch }) => {
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.value]: e.target.value
        })
    }

    const handelSubmit = e => {
        e.preventDefault()

        if (!form.artist || !form.song) {
            alert("Datos incompletos")
            return
        }

        handleSearch(form)
        setForm(initialForm)
    }


    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input
                    type="text"
                    name="artist"
                    placeholder='Nombre del intreprete'
                    onChange={handleChange}
                    value={form.artist}
                />
                <input
                    type="text"
                    name="song"
                    placeholder='Nombre de la cancion'
                    onChange={handleChange}
                    value={form.song}
                />
                <input type="submit" value="Enviar" />
            </form>
        </div>
    )
}

export default SongForm
