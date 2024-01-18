import { getUserSession } from '@/lib/session';
import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import EmojiParallaxContainer from '@/app/components/parallax/EmojiParallaxContainer';
import EmojiParallaxItem from '@/app/components/parallax/EmojiParallaxItem';

export default async function Home() {
  const user = await getUserSession();

  return (
    <>
      <EmojiParallaxContainer>
        <EmojiParallaxItem />
      </EmojiParallaxContainer>
      <main className='flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden h-screen'>
        <div className='container w-5/12 border-2 border-gray-200 rounded-3xl bg-white bg-opacity-20 backdrop-blur-md drop-shadow-md p-6'>
          <div className='flex justify-center'>
            <Image
              src={'/thinkbig-logo.svg'}
              width={500}
              height={500}
              priority={true}
              alt={'thinkbig logo'}
              style={{
                padding: '2rem',
              }}
            />
          </div>
          <div className='flex flex-col justify-center'>
            <h2 className='font-bold text-2xl text-center'>In Active Development!</h2>
            <p className='py-4 text-md'>
              Each time a pull request is merged into development, you will see the changes here in real time.
            </p>
          </div>
          <div className='flex justify-center pt-8'>
            <Button title='Sign in' href='/api/auth/signin' />
          </div>
        </div>
        <footer className='fixed inset-x-0 bottom-0 m-9 border-4 border-x-transparent bg-gray-800'>
          <div className='flex justify-stretch'>
            <div className='flex-1'>
              <p>
                <strong>Address:</strong>
              </p>
              <p>
                Placeholder Street
                <br />
                Placeholder Apartments
                <br />
                123456
                <br />
                Placeholder City
              </p>
            </div>
            <div className='flex-1'>
              <p>
                <strong>Content Menu:</strong>
              </p>
              <a href=''>Main</a>
              <br />
              <a href=''>About</a>
              <br />
              <a href=''>Team</a>
              <br />
              <a href=''>Contact us</a>
            </div>
            <div>
              <p>
                <strong>Socials:</strong>
              </p>
              <a href='https://github.com/thinkbig-project'>GitHub</a>
              <br />
              <a href='https://100devs.org/'>100Devs</a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
