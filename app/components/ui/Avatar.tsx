import Image from 'next/image';

export interface AvatarProps {
  avatar: string;
  className?: string;
}

export default function Avatar({ avatar, className }: AvatarProps) {
  return (
    <Image
      className={`aspect-square rounded-full hover:brightness-110 ${className}`}
      src={avatar}
      alt='Profile picture of the user'
      height={48}
      width={48}
    />
  );
}
