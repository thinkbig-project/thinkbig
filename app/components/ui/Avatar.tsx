import Image from 'next/image';
import type { AvatarProps } from '@/types';

export default function Avatar({ src, className, user, onClick }: AvatarProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        className={`rounded-full hover:brightness-110`}
        src={src}
        alt={`Profile picture of the ${user}.`}
        fill={true}
        onClick={onClick}
      />
    </div>
  );
}
