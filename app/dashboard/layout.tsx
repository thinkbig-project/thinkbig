import SideNav from '@/app/components/nav/SideNav';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='bg-slate-900 flex flex-row h-screen w-screen'>
      <SideNav />
      {children}
    </div>
  );
};

export default DashboardLayout;
