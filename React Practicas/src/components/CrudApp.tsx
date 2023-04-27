import React, { useState } from 'react';
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"


interface DB {
    id: number;
    car: string;
    price: string;
}

const initialDb: DB[] = [
    {
        id: 1,
        car: "Buggati Mistral Roadster",
        price: "5 millions",
    },
    {
        id: 2,
        car: "Buggati La Voiture",
        price: "12 millions",
    },
    {
        id: 3,
        car: "Buggati Divo",
        price: "5.4 millions",
    },
    {
        id: 1,
        car: "Mustang Muscle",
        price: "83,000",
    },
    {
        id: 1,
        car: "Rolls-Royce Phantom",
        price: "350,000",
    }
]

const CrudApp = () => {
    const [db, setDb] = useState(initialDb)
    return (
        <div>
            <h2>Crud App</h2>
            <CrudForm />
            <CrudTable data={db} />
        </div>
    )
}

export default CrudApp
