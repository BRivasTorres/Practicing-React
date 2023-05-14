import * as React from 'react';
import { useState } from 'react';
import SelectList from "./SelectList"

const SelectAnidados = () => {
    const [state, setState] = useState("")
    const [town, setTown] = useState("")
    const [suburb, setSuburb] = useState("")

    return (
        <div>
            <h2>Select anidados</h2>
            <h3>Guatemala</h3>
            <SelectList
                title="Estados"
                url=""
                handleChange={(e) => { setState(e.target.value) }}
            />
            {state &&
                <SelectList
                    title="Municipios"
                    url=""
                    handleChange={(e) => { setTown(e.target.value) }}
                />
            }

            {town &&
                <SelectList
                    title="Colonias"
                    url=""
                    handleChange={(e) => { setSuburb(e.target.value) }}
                />
            }
        </div>
    )
}

export default SelectAnidados
