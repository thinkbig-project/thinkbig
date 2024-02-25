'use client'

import Link from 'next/link';
import { ButtonProps } from '@/types'; // type/interface props



const Button: React.FC<ButtonProps> = ({ title, href, type = 'button' }) => {

  const buttonClasses = `bg-violet-600 hover:bg-violet-700 
  text-white font-bold py-3 px-8 rounded-full 
  bg-opacity-75 text-lg`

  // If href is provided, render button as Next.js Link.
  if (href) {
    return (
      <Link href={href}
        className={buttonClasses}>
        {title}
      </Link>
    );
  }

  // Otherwise, return button with type specified by props.
  return (
    <button
      type={type}
      className={buttonClasses}
    >
      {title}
    </button>
  )
};

export default Button; 
