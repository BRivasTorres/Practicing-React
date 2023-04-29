import React from 'react'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
    let { car, price, id } = el

    return (
        <div>
            <tr>
                <td>{car}</td>
                <td>{price}</td>
                <td>
                    <button  >Editar</button>
                    <button >Eliminar</button>
                </td>
            </tr >
        </div >
    )
}

export default CrudTableRow
