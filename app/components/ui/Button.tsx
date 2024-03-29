import Link from 'next/link';

import { ButtonProps } from '@/types'; // type/interface props

const Button: React.FC<ButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}
      className="bg-violet-600 hover:bg-violet-700 
        text-white font-bold py-3 px-8 rounded-full 
        bg-opacity-75 text-lg">

      {title}

    </Link>
  );
};

export default Button; 
