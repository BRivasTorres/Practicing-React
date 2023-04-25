import React, { useState } from "react";

function Login() {
    return (
        <div>
            <h3>Login</h3>
        </div>
    )
}

function Logout() {
    return (
        <div>
            <h3>Logout</h3>
        </div>
    )
}

//&El renderizado condicional, tal como su nombre lo indica me renderiza ciertos componentes dependiendo la condicion pasada. En este simple ejemplo si el estado es "true", renderiza Login, de lo contrario renderizara Logout.
const RenderizadoCondicional = () => {
    const [state, setState] = useState(false)

    return (
        <>
            <h2>Renderizado condicional</h2>
            {state ? <Login /> : <Logout />}
            {/* <Login />
            <Logout /> */}
        </>
    )
}

export default RenderizadoCondicional