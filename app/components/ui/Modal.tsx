interface ModalProps {
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ title, onClose, children }) => {
  return (
    // modal overlay
    <div className='fixed top-0 left-0 w-full h-full flex items-start p-8 bg-black bg-opacity-50 z-40'>
      <div className='relative p-8 bg-[#242262] rounded-2xl w-full max-w-4xl overflow-hidden flex-col flex text-white z-50'>
        {/* modal header */}
        <div className='flex justify-between mb-8 text-xl'>
          <h2>{title}</h2>
          <button onClick={onClose}>Close</button>
        </div>
        {/* divider */}
        <div className='border-b-2 border-gray-600 mb-8'></div>
        {/* modal content */}
        <div className='max-h-[calc(100vh-14rem)] overflow-y-auto scrollbar-content'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
