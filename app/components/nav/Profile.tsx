'use client';
import { signOut } from 'next-auth/react';
import Avatar from '@/app/components/ui/Avatar';
import Image from 'next/image';

const Profile: React.FC = () => {
  const handleClick = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <div className='bg-slate-900 flex flex-col h-screen items-center justify-between py-4 sticky text-white top-0 w-20'>
      <div className='content-start flex flex-col gap-4 h-full'>
        {/* nav buttons here */}
      </div>
      <div>
        <Avatar
          src='https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png'
          user='Jon Snow'
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Profile;
