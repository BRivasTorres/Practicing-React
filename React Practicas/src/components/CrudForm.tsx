import React, { useState, useEffect } from 'react';

const initialForm = {
    name: "",
    price: " ",
    id: null,
}


const CrudForm = () => {
    const [form, setForm] = useState(initialForm)

    const handleChange = (e) => { }
    const handleSubmit = (e) => { }
    const handleReset = (e) => { }

    return (
        <div>
            <h3>Agregar</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="car" placeholder='Car' onChange={handleChange} value={form.name} />
                <input type="text" name="price" placeholder='Price' onChange={handleChange} value={form.price} />
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpiar" onReset={handleReset} />
            </form>
        </div>
    )
}

export default CrudForm
