import React, { useState } from "react";

const Eventos = () => {
    let contador = 0
    const [state, setState] = useState(contador)

    function sumar() {
        contador += 1
    }

    return (
        <>
            <h2>Eventos</h2>
            <h3>{contador}</h3>
            <button onClick={sumar}>+</button>
            <button>-</button>
        </>
    )
}

export default Eventos