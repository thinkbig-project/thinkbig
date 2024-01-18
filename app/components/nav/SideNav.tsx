import Profile from '@/app/components/nav/Profile';

const SideNav: React.FC = () => {
  return (
    <div className='bg-slate-900 flex flex-col h-screen items-center justify-between left-0 py-4 sticky text-white top-0 w-20'>
      <div className='content-start flex flex-col gap-4 h-full'>
        {/* nav buttons here */}
      </div>
      <div>
        <Profile
          src='https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png'
          user='John Doe'
        />
      </div>
    </div>
  );
};

export default SideNav;
