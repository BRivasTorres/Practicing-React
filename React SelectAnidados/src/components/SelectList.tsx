import { useFetch } from "../hooks/useFetch.js"
import Loader from "./Loader.js";
interface SelectListProps {
    title: string;
    url: string[];
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectList: React.FC<SelectListProps> = ({ title, url, handleChange }) => {
    const options = url
    const id = ""
    const label: string = title.charAt(0).toUpperCase() + title.slice(1)

    return (
        <>
            <label htmlFor={id}>{label}</label>
            <select name={id} id={id} onChange={handleChange}>
                <option value="">Elige un {title}</option>
                {options.map((el, index) => <option value={el[title]} key={index} >{el[title]}</option>)}
            </select>
        </>
    )
}

export default SelectList
