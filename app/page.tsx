import { getUserSession } from '@/lib/session';
const Home = async () => {
  const user = await getUserSession();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      {JSON.stringify(user)}
    </main>
  );
};

export default Home;
