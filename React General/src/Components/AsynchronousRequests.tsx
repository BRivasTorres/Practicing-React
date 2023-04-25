import React, { Component } from 'react'
function Pokemon(props) {
    return (
        <figure>
            <img src={props.avatar} alt={props.name} />
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AsynchronousRequests extends Component {
    state = {
        pokemons: [],
    }

    componentDidMount(): void {
        let url = "https://pokeapi.co/api/v2/pokemon/"
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                data.results.forEach(el => {
                    fetch(el.url)
                        .then(res => res.json())
                        .then(data => console.log(data))
                });
            })
    }

    render() {
        return (
            <>
                <h2>Petisiones asincronas en componentes de clase</h2>
            </>
        )
    }
}