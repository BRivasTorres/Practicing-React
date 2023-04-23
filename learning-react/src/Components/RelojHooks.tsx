import Reaact, { useState, useEffect } from 'react'

function Reloj({ hora }) {
    return <h3> {hora} </h3>
}

const RelojHooks = () => {
    const [hour, setHour] = useState(new Date().toLocaleTimeString())
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        let tempo
        if (visible) {
            tempo = setInterval(() => {
                setHour(new Date().toLocaleTimeString())
            }, 1000)
        } else {
            clearInterval(tempo)
        }

        return () => {
            console.log("fase de desmontaje")
        }

    }, [visible])

    return (
        <>
            <h2>Reloj hooks</h2>
            {visible && <Reloj hora={hour} />}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </>
    )
}

export default RelojHooks