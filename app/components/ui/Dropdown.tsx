'use client'

import { useState } from 'react';
import { DropdownProps } from '@/types';

const Dropdown: React.FC<DropdownProps> = ({ placeholder, options, selectedOption, onSelectionChange, id, error }) => {

    const [dropdown, setDropdown] = useState<boolean | null>(null);

    const openDropdown = () => {
        setDropdown(!dropdown);
    };

    const handleItemClick = (option: string) => {
        onSelectionChange(option);
        setDropdown(false);
    };

    return (
        <div className='flex justify-between border-4 rounded-3xl border-indigo-400 px-4 
        py-2 w-1/4 bg-inherit hover:border-indigo-300 
        '
        >
            <div>
            {(!selectedOption || selectedOption === '') && placeholder &&
                <label htmlFor={id}>{placeholder}</label>
            }
            <button type="button" id={id} onClick={openDropdown}>
                {selectedOption}
            </button>
            

            {dropdown && (
                <ul>
                    {options.map((option) => (
                        <li key={option} onClick={() => handleItemClick(option)}
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
            <div>
            <span>{String.fromCharCode(8595)}</span>
            </div>
         </div>
                     

    );
};

export default Dropdown;