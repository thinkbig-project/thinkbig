
import Image from 'next/image';
import assignmentIcon from '@/app/favicon.ico';
import classIcon from '@/app/favicon.ico';
import codeIcon from '@/app/favicon.ico';
import conceptIcon from '@/app/favicon.ico';
import lfsgIcon from '@/app/favicon.ico';
import watchAlongIcon from '@/app/favicon.ico';

interface TypeTagProps {
  type: 'assignment' | 'class' | 'code' | 'concept' | 'lfsg' | 'watchAlong';
}

const TypeTag: React.FC<TypeTagProps> = ({ type }) => {
  const getImageSrc = () => {
    switch (type) {
      case 'assignment':
        return assignmentIcon;
      case 'class':
        return classIcon;
      case 'code':
        return codeIcon;
      case 'concept':
        return conceptIcon;
      case 'lfsg':
        return lfsgIcon;
      case 'watchAlong':
        return watchAlongIcon;
      default:
        return ''; // Placeholder for default or unknown type
    }
  };

  const imageSrc = getImageSrc();

  return (
    <div className="type-tag">
      <Image src={imageSrc} alt={`${type} icon`} width={32} height={32} />
    </div>
  );
};

export default TypeTag;
