import Image from 'next/image';

const SideNav: React.FC = () => {
  return (
    <div className='bg-neutral-950 flex flex-col h-screen items-center justify-between py-4 sticky text-white top-0 w-20'>
      <div>
        <hr className='border-gray-700 my-4' />
      </div>
      <div className='content-start flex flex-col gap-4 h-full'></div>
      <div>
        <Image
          className={`aspect-square rounded-full hover:brightness-110`}
          src='https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png'
          alt='User Name'
          height={56}
          width={56}
        />
      </div>
    </div>
  );
};

export default SideNav;
