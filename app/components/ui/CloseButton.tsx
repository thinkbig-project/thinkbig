import Image from 'next/image';

interface CloseButtonProps {
  onClose?: () => void;
}

const CloseButton: React.FC<CloseButtonProps> = ({ onClose }) => {
  return (
    <button
      type='button'
      onClick={onClose}
      className='bg-indigo-400 hover:bg-indigo-300 
            rounded-full outline-0 p-1 shadow-lg'
    >
      <Image src='/crossbones.png' alt='Close' width={16} height={16} />
    </button>
  );
};

export default CloseButton;
