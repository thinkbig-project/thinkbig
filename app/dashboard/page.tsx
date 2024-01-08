import Card from '@/app/components/ui/Card';
import IssueIcon from "../components/ui/IssueIcon";

const Dashboard = async () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <IssueIcon type="assignment" />
        <IssueIcon type="class" />
        <IssueIcon type="code" />
        <IssueIcon type="concept" />
        <IssueIcon type="lfsg" />
        <IssueIcon type="watchAlong" />
        <Card
        type='code'
        title='Bug in crud database'
        desc='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        matches={[
          {
            id: 1,
            name: 'John Doe',
            avatar:
              'https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png',
          },
          {
            id: 2,
            name: 'John Doe',
            avatar:
              'https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png',
          },
          {
            id: 3,
            name: 'John Doe',
            avatar:
              'https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png',
          },
          {
            id: 4,
            name: 'John Doe',
            avatar:
              'https://cdn.discordapp.com/avatars/297864485996068864/86eff9813511d8173f0f0ff9d16ac340.png',
          },
        ]}
      />
      </div>
    </>
  );
};

export default Dashboard;
