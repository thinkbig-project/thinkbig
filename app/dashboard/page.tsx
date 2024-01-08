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
      </div>
    </>
  );
};

export default Dashboard;
