import Image from 'next/image';
import { prisma } from '@/lib/prisma';

export default async function Home() {
  // Used to test prisma configuration -- keep for now
  // const user = await prisma.user.findFirst({
  //   where: {
  //     discordId: '297864485996068864',
  //   },
  // });

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {/* <h1 className='text-4xl font-bold'>Hello, {user?.username}</h1> // Used to test prisma configuration -- keep for now */}
    </main>
  );
}
