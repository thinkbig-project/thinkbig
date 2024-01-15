import Image from 'next/image';
import assignmentIcon from '@/public/placeholder.png';
import classIcon from '@/public/placeholder.png';
import codeIcon from '@/public/placeholder.png';
import conceptIcon from '@/public/placeholder.png';
import lfsgIcon from '@/public/placeholder.png';
import watchAlongIcon from '@/public/placeholder.png';

import { IssueIconProps } from '@/types'; // type/interface props

const IssueIcon: React.FC<IssueIconProps> = ({ type }) => {
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
    <div className='aspect-square w-8'>
      <Image src={imageSrc} alt={`${type} icon`} />
    </div>
  );
};

export default IssueIcon;
