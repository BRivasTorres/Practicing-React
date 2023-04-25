//&El ciclo de vida en react tiene tres etapas.
//*Montaje
//*Actualizacion
//*Desmontaje

import { Component } from "react"

export default class LifeCicle extends Component {
    constructor(props) {
        super(props)
        console.log(0, "iniciando compoenente, aun no esta en el dom")

        this.state = {
            hora: new Date().toLocaleDateString
        }
    }

    render() {
        console.log(4, "componente se pinta en el DOM")
        return (
            <>
                <h2>Life cicle</h2>
                <h3>{this.state.hora}</h3>
            </>
        )
    }
}
