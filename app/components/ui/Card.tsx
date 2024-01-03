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
    <>
      <section className='bg-indigo-950 flex flex-col p-4 rounded-3xl w-1/2'>
        <div className='flex flex-row gap-4 h-12 items-center w-full'>
          <Image src='/placeholder.png' alt='type' height={40} width={40} />
          <h2 className='text-2xl w-full'>{title}</h2>
          <div className='flex flex-row gap-2 justify-end w-full'>
            <Image src='/placeholder.png' alt='type' height={32} width={32} />
            <Image src='/placeholder.png' alt='type' height={32} width={32} />
          </div>
        </div>

        <div className='flex flex-row items-center'>
          <p className='bg-gradient-to-r from-indigo-900 p-2 rounded-lg truncate w-3/4'>
            {desc}
          </p>
          <div className='flex flex-row justify-end w-1/4'>
            {matches.map(match => {
              return (
                <Avatar
                  key={match.id}
                  avatar={match.avatar}
                  className={`z-10 -ml-[1.5rem] border-[0.175rem] border-indigo-950`}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
