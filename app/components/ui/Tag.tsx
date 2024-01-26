import { TagProps } from '@/types';

const Tag: React.FC<TagProps> = ({ name }) => {
  const mainTagStyle =
    'text-xs font-bold px-2.5 py-0.5 rounded';
  let conditionalTagStyle: string = '';

  switch (name) {
    case 'css':
      conditionalTagStyle += 'bg-[#0959df] text-white';
      break;
    case 'ejs':
      conditionalTagStyle += 'bg-[#98265b] text-white';
      break;
    case 'html':
      conditionalTagStyle += 'bg-[#2d2b6b] text-white';
      break;
    case 'js':
      conditionalTagStyle += 'bg-[#dfdd09] text-black';
      break;
    case 'mongo':
      conditionalTagStyle += 'bg-[#00c55b] text-black';
      break;
    case 'node':
      conditionalTagStyle += 'bg-[#6Da460] text-black';
      break;
    case 'react':
      conditionalTagStyle += 'bg-[#5fdafb] text-black';
      break;
    default:
      conditionalTagStyle += '#EAD02A text-black';
  }

  return (
    <span className={`${conditionalTagStyle} ${mainTagStyle}`}>{name}</span>
  );
};

export default Tag;
