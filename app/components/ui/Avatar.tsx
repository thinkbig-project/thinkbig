import Image from 'next/image';

export interface AvatarProps {
  avatar: string;
}

export default function Avatar({ avatar }: AvatarProps) {
  return (
    <Image
      className='aspect-square rounded-full w-full h-full hover:brightness-110'
      src={avatar}
      alt='Profile picture of the user'
      height={48}
      width={48}
    />
  );
}
