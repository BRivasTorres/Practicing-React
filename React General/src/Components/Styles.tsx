import React from 'react'
import "./Styles.css"

const Styles = () => {
    return (
        <>
            <h1 className='estilos'>Formas de dar estilos en Reat</h1>
            <h2 className='estilos-externos'>Estilos Externos</h2>
            <h2 className='estilos-en-linea' style={{ fontSize: "1.5rem", backgroundColor: "red" }} > Estilos en linea</h2 >
        </>
    )
}


export default Styles