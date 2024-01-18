import Profile from '@/app/components/nav/Profile';

const SideNav: React.FC = () => {
  return (
    <div className='bg-slate-900 flex flex-col h-screen items-center justify-between py-4 sticky text-white top-0 w-20'>
      <div className='content-start flex flex-col gap-4 h-full'>
        {/* nav buttons here */}
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default SideNav;
