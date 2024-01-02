import Image from 'next/image';
import Avatar from '@/app/components/ui/Avatar';

interface CardProps {
  type: string;
  title: string;
  desc: string;
  matches: Matches[];
}

interface Matches {
  id: number;
  name: string;
  avatar: string;
}

const handleClick = () => {
  console.log('click');
};

const Card: React.FC<CardProps> = ({ type, title, desc, matches }) => {
  return (
    <section className='w-1/2'>
      <div>
        <Image src='/placeholder.png' alt='type' height={50} width={50} />
        <h2>{title}</h2>
        <div>
          <Image src='/placeholder.png' alt='type' height={50} width={50} />
          <Image src='/placeholder.png' alt='type' height={50} width={50} />
        </div>
      </div>
      <div>
        <p>{desc}</p>
        <div>
          {matches.map((match) => (
            <Avatar key={match.id} avatar={match.avatar} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
