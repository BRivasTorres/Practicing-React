import { useState } from "react";

interface MyProps {
    mensaje: string;
}


const ComponentsComunication = () => {
    const [state, setState] = useState(0)

    const incrementarContador = (e) => {
        state + 1
    }

    return (
        <>
            <h2>Comunicacion entre componentes</h2>
            <Hijo
                mensaje="Mensaje para el hijo 1"
            />
        </>
    )
}

function Hijo(props: MyProps) {
    return <h3>{props.mensaje}</h3>
}

export default ComponentsComunication