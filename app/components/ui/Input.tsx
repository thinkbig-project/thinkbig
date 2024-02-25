'use client'

import { useState } from 'react';
import { InputProps } from '@/types';

const Input: React.FC<InputProps> = ({
  disabled,
  error,
  id,
  label,
  onChange,
  readOnly,
  type,
  name,
  value,
  size
}) => {
  const [showToolTip, setShowToolTip] = useState<boolean>(false);

  const inputSizeClasses = {
    small: 'w-1/3 h-8',
    medium: 'w-2/3 h-12',
    large: 'w-full h-20',
    default: 'w-full h-12'
  }

  const inputClasses = `input appearance-none bg-indigo-950 block border-4 ${inputSizeClasses[size ?? 'default']} px-4 peer rounded-3xl text-sm  focus:border-indigo-400 focus:outline-none focus:ring-0
    ${disabled
      ? 'border-indigo-900 text-indigo-400'
      : 'border-indigo-800 text-indigo-300'
    }`;

  const labelClasses = `absolute bg-transparent duration-300 mx-2 origin-[0] px-2 scale-75 text-xs top-2 left-2 transform -translate-y-[0.8rem] z-20 peer-focus:scale-75 peer-focus:top-2 peer-focus:left-4 peer-focus:-translate-y-[0.8rem] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2
    ${disabled
      ? 'peer-focus:text-indigo-900 text-indigo-400'
      : 'peer-focus:text-indigo-300 text-indigo-100'
    }`;

  const borderLeftClasses = `absolute bg-indigo-800 rounded-full h-[0.28rem] w-[0.28rem] top-0 left-[1.25rem] z-20 peer-focus:bg-indigo-400`;
  const borderCenterClasses = `absolute bg-indigo-950 duration-300 h-[0.28rem] w-0 top-0 left-[1.3rem] z-10 peer-focus:w-[5rem]`;
  const borderRightClasses = `absolute bg-indigo-800 duration-300 rounded-full h-[0.28rem] w-[0.28rem] top-0 left-[1.25rem] z-20 peer-focus:left-[6.25rem] peer-focus:bg-indigo-400`;



  return (
    <div className={'flex flex-col '}>
      <div className='relative'>
        <input
          disabled={disabled}
          id={id}
          onChange={onChange}
          placeholder='' // Changing this will break the label placement
          readOnly={readOnly}
          type={type}
          name={name}
          value={value}
          className={inputClasses}
        />
        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
        <div className={borderLeftClasses} />
        <div className={borderCenterClasses} />
        <div className={borderRightClasses} />
      </div>
      <div className=' h-8 pl-5'>
        <div className='relative inline-block'>
          <button
            className='text-blue-300 text-[0.7rem] underline'
            onMouseEnter={() => setShowToolTip(true)}
            onMouseLeave={() => setShowToolTip(false)}
          >
            {error && value ? 'Invalid input' : ''}
          </button>
          {showToolTip && (
            <div
              className={`absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-gray-700 text-white rounded shadow-lg transition w-max whitespace-pre-line z-50 ${error && showToolTip ? 'opacity-100' : 'opacity-0'
                }`}
            >
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;
