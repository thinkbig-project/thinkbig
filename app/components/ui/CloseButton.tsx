import Image from 'next/image';
import type { CloseButtonProps } from '@/types';

const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => {
  return (
    <button
      type='button'
      onClick={onClick}
      className='bg-indigo-400 hover:bg-indigo-300 
            rounded-full outline-0 p-1 shadow-lg'
    >
      <Image src='/crossbones.png' alt='Close' width={16} height={16} />
    </button>
  );
};

export default CloseButton;
