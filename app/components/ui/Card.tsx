import Image from 'next/image';
import Avatar from '@/app/components/ui/Avatar';

interface CardProps {
  type: string;
  title: string;
  desc: string;
  matches: object[];
}

const handleClick = () => {
  console.log('click');
};

const Card: React.FC<CardProps> = ({ type, title, desc, matches }) => {
  return (
    <section className=''>
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
          <Avatar src={user.} alt={'user'}/>
      </div>
    </section>
  );
};

export default Card;
