
import Image from 'next/image';
import assignmentIcon from '@/path/to/assignment-icon.png';
import classIcon from '@/path/to/class-icon.png';
import codeIcon from '@/path/to/code-icon.png';
import conceptIcon from '@/path/to/concept-icon.png';
import lfsgIcon from '@/path/to/lfsg-icon.png';
import watchAlongIcon from '@/path/to/watch-along-icon.png';

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
