import React, { useState } from 'react'

const Hooks = (props) => {
    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)

    return (
        <>
            <h1>Hello</h1>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
        </>

    )
}

export default Hooks