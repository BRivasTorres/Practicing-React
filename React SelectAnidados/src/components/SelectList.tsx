import { useFetch } from "../hooks/useFetch.js"
import Loader from "./Loader.js";
interface SelectListProps {
    title: string;
    url: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectList: React.FC<SelectListProps> = ({ title, url, handleChange }) => {
    // const { data, error, loading } = useFetch(url)

    // if (!data) return null
    // if (error) {
    //     return `Error ${error.status}: ${error.statusText}`
    // }

    // const id = `select-${title}`
    // const label: string = title.charAt(0).toUpperCase() + title.slice(1)
    // const options = data.response[title]

    const id = `select-${title}`
    const label: string = title.charAt(0).toUpperCase() + title.slice(1)
    const options = url[0].departamento
    console.log(options)

    return (
        <>
            <label htmlFor={id}>{label}</label>
            {/* {loading && <Loader />} */}
            <select name={id} id={id} onChange={handleChange}>
                <option value="">Elige un {title}</option>
                {/* {data && options.map((el) => <option value={el.tile} >{el.title}</option>)} */}
            </select>
        </>
    )
}

export default SelectList
