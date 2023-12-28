import TypeTag from "../components/ui/TypeTag";

const Dashboard = async () => {
  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <TypeTag type="assignment" />
        <TypeTag type="class" />
        <TypeTag type="code" />
        <TypeTag type="concept" />
        <TypeTag type="lfsg" />
        <TypeTag type="watchAlong" />
      </div>
    </>
  );
};

export default Dashboard;
