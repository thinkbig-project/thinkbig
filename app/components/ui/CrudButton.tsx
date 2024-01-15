import React from 'react';
import Image from 'next/image';
import createIcon from '@/public/placeholder.png';
import updateIcon from '@/public/placeholder.png';
import deleteIcon from '@/public/placeholder.png';

import { CrudButtonProps } from '@/types'; // type/interface props

const CrudButton: React.FC<CrudButtonProps> = ({ type, ...props }) => {
  const getImgSrc = () => {
    switch (type) {
      case 'create':
        return createIcon;
      case 'update':
        return updateIcon;
      case 'delete':
        return deleteIcon;
      default:
        return '';
    }
  };

  return (
    <button
      {...props}
      className='bg-indigo-500 h-9 p-1 rounded w-9 hover:bg-indigo-700 active:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-300 fill-white transition-all'
    >
      <Image src={getImgSrc()} alt={`${type} icon`} />
    </button>
  );
};
export default CrudButton;
