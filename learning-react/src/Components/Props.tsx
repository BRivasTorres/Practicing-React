import React from "react";

interface Props {
    cadena: string;
    numero: number;
    boolean: boolean;
    arreglo: number[];
}

const Propiedades = (props: Props) => {
    //&De esta manera accedo y recibo mis propiedaes, tambien puedo utilizar la desestructuracion.
    return (
        <>
            <h2>Props</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean ? "true" : "false"}</li>
            </ul>
        </>
    )
}
export default Propiedades

