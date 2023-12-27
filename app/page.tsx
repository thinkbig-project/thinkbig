import { getUserSession } from '@/lib/session';
import Image from 'next/image';
import { prisma } from '@/lib/prisma';
import Button from '@/app/components/ui/Button';

const Home = async () => {
  const user = await getUserSession();

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 overflow-hidden h-screen mx-auto'>
      <div className='container mx-auto'>
        <div className='flex flex-row justify-center'>
          <div className='w-2/4 bg-gray-800 border-2 border-gray-200 p-5 pt-10 pb-10 rounded-3xl'>
            <div className='flex justify-center mt-8'>
              <Image
                src={'/thinkbig-logo.svg'}
                width={500}
                height={150}
                alt={'thinkbig logo'}
              />
            </div>
            <div className='flex justify-center ml-9 mr-9 mt-9'>
              <p className='pt-5'>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                sed diam voluptua. At vero eos et accusam et justo duo dolores
                et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
                est Lorem ipsum dolor sit amet.
              </p>
            </div>
            <div className='flex justify-center pt-10 mb-8'>
              <Button title='Sign in' href='/api/auth/signin' />
            </div>
          </div>
        </div>

        <footer className='fixed inset-x-0 bottom-0 border-x-transparent bg-footer-texture'>
          <div className='flex justify-stretch mr-5 ml-5 mb-9'>
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
      </div>
    </main>
  );
};

export default Home;
