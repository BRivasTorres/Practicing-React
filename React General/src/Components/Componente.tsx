import React, { Component } from "react";

//&Antigua manera en como eran creado los componentes, esta manera se hacia por medio de clases.
// class Componente extends Component {
//     render() {
//         return <h1>Hello im a Component</h1>
//     }
// }

//&Esta es la manera actual de crear un componente, una manera mas clara y legible.
const Componente = () => {
    return <h2>Hello im a Component🙂</h2>
}

export default Componente