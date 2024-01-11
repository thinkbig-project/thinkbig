import { useState } from 'react';
import Avatar from '@/app/components/ui/Avatar';
import CrudButton from '@/app/components/ui/CrudButton';
import IssueIcon from '@/app/components/ui/IssueIcon';

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

const Card: React.FC<CardProps> = ({ type, title, desc, matches }) => {
  const [expanded, setExpanded] = useState(true);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <section
        id='container'
        className='bg-indigo-950 flex flex-row p-4 rounded-2xl w-1/2'
        onClick={handleClick}
      >
        <div
          id='left-container'
          className='flex flex-col gap-4 items-start w-3/4'
        >
          <div id='title-container' className='flex flex-row gap-4 max-w-full w-3/4'>
            <IssueIcon size='8' type='assignment' />
            <h2 className='text-2xl w-full'>{title}</h2>
          </div>
          <p
            className={`bg-gradient-to-r from-indigo-900 p-2 rounded-lg w-full ${
              expanded
                ? 'bg-indigo-900'
                : 'bg-gradient-to-r from-indigo-900 truncate'
            }`}
          >
            {desc}
          </p>
        </div>
        <div
          id='right-container'
          className='flex flex-col justify-center w-1/4'
        >
          <div
            id='avatar-placeholder'
            className={`flex flex-row justify-end w-full ${
              expanded ? 'h-full' : null
            }`}
          >
            {matches.map((match) => {
              return (
                <Avatar
                  key={match.id}
                  avatar={match.avatar}
                  className={`z-10 -ml-[1.5rem] border-[0.175rem] border-indigo-950`}
                  user='user'
                />
              );
            })}
          </div>
          {expanded && (
            <div className='align-bottom flex justify-end self-end w-full'>
              <div className='flex flex-row gap-2'>
                <CrudButton type='update' />
                <CrudButton type='delete' />
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Card;
