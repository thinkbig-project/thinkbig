'use client';
import { useState } from 'react';
import { signOut } from 'next-auth/react';
import Avatar from '@/app/components/ui/Avatar';
import type { ProfileProps } from '@/types';

const Profile: React.FC<ProfileProps> = ({ src, user }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = () => {
    signOut({
      callbackUrl: '/',
    });
  };

  return (
    <>

      <div
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
      >
        <Avatar
          className='border-4 border-transparent h-14 w-14 rounded-full hover:border-4 hover:border-indigo-600'
          src={src}
          user={user}
          onClick={handleClick}
        />
      </div>
    </>
  );
};

export default Profile;
