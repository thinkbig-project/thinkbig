'use client';
import { signOut } from 'next-auth/react';
import Avatar from '@/app/components/ui/Avatar';
import type { ProfileProps } from '@/types';
import Image from 'next/image';

const Profile: React.FC<ProfileProps> = ({ src, user }) => {
  const handleClick = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <>
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
    </>
  );
};

export default Profile;
