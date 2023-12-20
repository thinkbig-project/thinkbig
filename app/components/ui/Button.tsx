

import Link from 'next/link';

interface ButtonProps {
  title: string;
}

const Button: React.FC<ButtonProps> = ({ title }) => {
  return (
    <Link href="/app/api/auth/signin">
      <a className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
        {title}
      </a>
    </Link>
  );
};

export default Button;
