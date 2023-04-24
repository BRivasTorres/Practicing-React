import React, { useState, useEffect } from 'react'

function Pokemon({ avatar, name }) {
    <figure>
        <img src={avatar} alt={name} />
        <figcaption>{name}</figcaption>
    </figure>
}



const AjaxHooks = () => {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {

    }, [])

    return (
        <>
            <h2>Peticiones AJAX con Hooks</h2>
            {pokemon.length === 0
                ? (<h3>Cargando...</h3>)
                : (pokemon.map(el => {
                    <Pokemon key={el.id} name={el.name} avatar={el.avatar} />
                }))
            }
        </>
    )
}

export default AjaxHooks
