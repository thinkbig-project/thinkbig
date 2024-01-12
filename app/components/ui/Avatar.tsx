import Image from 'next/image';

import { AvatarProps } from '@/types'; // type/interface props

export default function Avatar({ avatar, className, user }: AvatarProps) {
  return (
    <div className={`aspect-square h-12 w-12 ${className}`}>
      <Image
        className={`aspect-square rounded-full hover:brightness-110`}
        src={avatar}
        alt={`Profile picture of the ${user}.`}
        height={48}
        width={48}
      />
    </div>
  );
}
