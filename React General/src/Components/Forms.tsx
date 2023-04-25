import React, { useState } from 'react'

const Forms = () => {
    // const [name, setName] = useState("")
    // const [carro, setCarro] = useState("")
    // const [filosofos, setFilosofos] = useState("")

    const [form, setForm] = useState({})

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        alert("formulario enviado")
    }

    return (
        <>
            <h2>Hola forms</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"></label>
                    <input
                        type="text"
                        id='name'
                        name="name"
                        value={name.for}
                        onChange={handleChange}
                    />
                </div>

                <div>

                    <p>Elige carro favorito</p>
                    <input
                        type="radio"
                        id='buggati'
                        name='carro'
                        value="buggati"
                        onChange={handleChange}
                    />
                    <label htmlFor="buggati">Bugatti</label>
                    <input
                        type="radio"
                        id='Mustang Muscle'
                        name='carro'
                        value="Mustang Muscle"
                        onChange={handleChange}
                    />
                    <label htmlFor="Mustang Muscle">Mustang Muscle</label>
                    <input
                        type="radio"
                        id='Roll Roys'
                        name='carro'
                        value="Roll Roys"
                        onChange={handleChange}
                    />
                    <label htmlFor="Roll Roys">Roll Roys</label>
                </div>

                <div>
                    <p>Elige tu filosofo favorito</p>
                    <select name="filosofo" id="">
                        <option value="">---</option>
                        <option value="hegel">Hegel</option>
                        <option value="heideger">Heideger</option>
                        <option value="spinoza">Spinoza</option>
                        <option value="aristoteles">Aristoteles</option>
                        <option value="nietsche">Nietsche</option>
                    </select>
                </div>

                <input type="submit" />
            </form>
        </>
    )
}

export default Forms