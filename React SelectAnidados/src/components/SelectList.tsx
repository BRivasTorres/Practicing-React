interface SelectListProps {
    title: string;
    url: string;
    handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};


const SelectList: React.FC<SelectListProps> = ({ title, string, handleChange }) => {
    return (
        <div>
            <select name="" id="">
                <option value="">---</option>
            </select>
        </div>
    )
}

export default SelectList
