import * as React from 'react';
import { useState } from 'react';
import SelectList from "./SelectList"
import Data from "../helpers/Data.js"

const SelectAnidados = () => {
    const [state, setState] = useState("")
    const [town, setTown] = useState("")
    const [suburb, setSuburb] = useState("")
    console.log(Data[state])

    return (
        <div>
            <h2>Select anidados</h2>
            <h3>Guatemala</h3>
            <SelectList
                title="departamento"
                url={Data}
                handleChange={(e) => { setState(e.target.value) }}
            />
            {state &&
                <SelectList
                    title="municipios"
                    url={Data}
                    handleChange={(e) => { setTown(e.target.value) }}
                />
            }

            {town &&
                <SelectList
                    title="colonias"
                    url=""
                    handleChange={(e) => { setSuburb(e.target.value) }}
                />
            }
        </div>
    )
}

export default SelectAnidados
