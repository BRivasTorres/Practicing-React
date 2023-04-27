import React from 'react'

const CrudTableRow = ({ el }) => {
    return (
        <div>
            <tr>
                <td>{el.car}</td>
                <td>{el.price}</td>
                <td>
                    <button>Editar</button>
                    <button>Eliminar</button>
                </td>
            </tr>
        </div>
    )
}

export default CrudTableRow
