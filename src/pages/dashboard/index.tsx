import { useUser } from "@clerk/clerk-react";
import FinancialRecordForm from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";

const Dashboard = () => {
  const { user } = useUser();
  return (
    <div className="">
      <h1 className="text-3xl font-semibold mb-5">
        Welcome {user?.firstName}! Here are your Finances
      </h1>
      <FinancialRecordForm />
      <FinancialRecordList />
    </div>
  );
};

export default Dashboard;
