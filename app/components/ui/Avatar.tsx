import Image from 'next/image';

export interface AvatarProps {
  avatar: string;
  className?: string;
  user: string;
}

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
