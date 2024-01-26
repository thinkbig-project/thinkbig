import { useEffect, useState } from 'react';
import CloseButton from './CloseButton';
import Tag from '@/app/components/ui/Tag';
import type { TagMenuProps } from '@/types';

const TagMenu = ({ onClick, tagList, tagTitles, chosenTags }: TagMenuProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    console.log('Is menu open? ', isMenuOpen);
  }, [isMenuOpen, setIsMenuOpen]);

  return (
    <>
      <div className='relative'>
        <div className='flex flex-col h-fit text-left w-fit'>
          <button
            className='font-semibold h-fit w-fit hover:text-blue-400'
            onClick={() => handleClick()}
          >
            Tags
          </button>
          <section className='flex flex-row gap-2 h-fit py-2 w-fit'>
            {chosenTags && chosenTags.length > 0 ? (
              chosenTags?.map((tag, i) => (
                <Tag name={tag} key={`chosenTags-${tag}-${i}`} />
              ))
            ) : (
              <p className='h-fit text-sm text-gray-500'>
                Click to select relevant tags.
              </p>
            )}
          </section>
        </div>
        {isMenuOpen && (
          <section className='absolute bg-[#1B1A48] flex flex-col items-start p-2 rounded-lg w-80'>
            <section className='border-b border-white border-opacity-10 flex flex-row justify-between pb-2 w-full'>
              <h2>Select relevant tags.</h2>
              <CloseButton onClick={() => handleClick()} />
            </section>
            <section className='flex flex-col gap-2 py-2 w-full'>
              {tagList?.map((tag, i) => (
                <button
                  key={`${tag}-${i}`}
                  className='flex flex-row gap-2 justify-start pl-4 p-2 rounded-full text-sm w-full hover:bg-blue-800'
                  onClick={() => onClick(tag)}
                >
                  <Tag name={tag} /> - {tagTitles[i]}
                </button>
              ))}
            </section>
          </section>
        )}
      </div>
    </>
  );
};

export default TagMenu;
