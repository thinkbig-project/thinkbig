import IssueIcon from "../components/ui/IssueIcon";
import CloseButton from "../components/ui/CloseButton";


const Dashboard = async () => {

  return (
    <>
      <h1>Dashboard</h1>
      <CloseButton />
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
