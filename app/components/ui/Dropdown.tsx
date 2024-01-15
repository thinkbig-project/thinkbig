import { useState } from 'react';

type DropdownProps = {
    error: string;
    id: string;
    label: string;
    options: string[];
    onChange: () => void;
    value: string;
};

const Dropdown: React.FC<DropdownProps> = ({ error, id, label, options, onChange, value }) => {
    const [selected, setSelected] = useState<string | null>(null);
    const [dropdown, setDropdown] = useState<boolean | null>(null);

    const handleClick = () => {
        setDropdown(!dropdown);
    };

    const handleItemClick = (option: string) => {
        setSelected(option);
        setDropdown(!dropdown);
        onChange();
    };

    return (
        <div className='border-4 rounded-lg border-indigo-400 px-4 
                py-2 w-1/4 bg-inherit hover:border-indigo-300
                '
        >
            <label htmlFor={id}>{label}</label>
            <button type="button" id={id} onClick={handleClick}>
                {selected || 'select an assignment'}
            </button>
            {dropdown && (
                <ul>
                    {options.map((option, i) => (
                        <li key={i} onClick={() => handleItemClick(option)}
                            className='hover:bg-indigo-300 hover:rounded-lg 
                            hover:px-2 hover:w-fit'
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
            {error && <span>{error}</span>}
        </div>
    );
};

export default Dropdown;