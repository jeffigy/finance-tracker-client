import { useUser } from "@clerk/clerk-react";
import FinancialRecordForm from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import { useFinancialRecords } from "../../context/financial-record-context";
import { useMemo } from "react";

const Dashboard = () => {
  const { user } = useUser();

  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });

    return totalAmount;
  }, [records]);
  return (
    <>
      <h1 className="text-3xl font-semibold mb-5 mx-auto">
        Welcome {user?.firstName}! Here are your Finances
      </h1>
      <FinancialRecordForm />
      <div>Total Monthly: ${totalMonthly}</div>
      <FinancialRecordList />
    </>
  );
};

export default Dashboard;
