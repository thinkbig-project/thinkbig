import Image from 'next/image';
import type { AvatarProps } from '@/types';

export default function Avatar({ src, className, user, onClick }: AvatarProps) {
  return (
    <div className={`aspect-square h-12 w-12 ${className}`}>
      <Image
        className={`aspect-square rounded-full hover:brightness-110`}
        src={src}
        alt={`Profile picture of the ${user}.`}
        height={48}
        width={48}
        onClick={onClick}
      />
    </div>
  );
}
