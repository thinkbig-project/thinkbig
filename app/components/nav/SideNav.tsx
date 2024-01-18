import Profile from '@/app/components/nav/Profile';

const SideNav: React.FC = () => {
  return (
    <div className='bg-slate-900 flex flex-col h-screen items-center justify-between left-0 py-4 sticky text-white top-0 w-20'>
      <div>
        <Profile />
      </div>
    </div>
  );
};

export default SideNav;
