import React, { useState, useEffect } from 'react';

const initialForm = {
    car: "",
    price: " ",
    id: null,
}


const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.name || !form.price) {
            alert("Datos incompletos")
            return
        }

        if (form.id === null) {
            createData(form)
        } else {
            updateData(form)
        }

        handleReset()
    }

    const handleReset = (e) => {
        setForm(initialForm)
        setDataToEdit(null)
    }

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="car" placeholder='Car' onChange={handleChange} value={form.car} />
                <input type="text" name="price" placeholder='Price' onChange={handleChange} value={form.price} />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onReset={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm
