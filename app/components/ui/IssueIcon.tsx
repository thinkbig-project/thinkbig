import Image from 'next/image';
import assignmentIcon from '@/public/placeholder.png';
import classIcon from '@/public/placeholder.png';
import codeIcon from '@/public/placeholder.png';
import conceptIcon from '@/public/placeholder.png';
import lfsgIcon from '@/public/placeholder.png';
import watchAlongIcon from '@/public/placeholder.png';

interface IssueIconProps {
  size: '4' | '8' | '16' | '32' | '64';
  type: 'assignment' | 'class' | 'code' | 'concept' | 'lfsg' | 'watchAlong';
}

const IssueIcon: React.FC<IssueIconProps> = ({ size, type }) => {
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
        return '';
    }
  };

  const imageSrc = getImageSrc();

  return (
    <div className={`aspect-square w-${size}`}>
      <Image src={imageSrc} alt={`${type} icon`} />
    </div>
  );
};

export default IssueIcon;
