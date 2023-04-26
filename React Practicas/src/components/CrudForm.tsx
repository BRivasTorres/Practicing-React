import React from 'react'

const CrudForm = () => {
    return (
        <div>
            <h3>Agregar</h3>
            <form>
                <input type="text" name="car" placeholder='Car' />
                <input type="text" name="price" placeholder='Price' />
                <input type="submit" />
                <input type="reset" />
            </form>
        </div>
    )
}

export default CrudForm
