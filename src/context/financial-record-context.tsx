import { useUser } from "@clerk/clerk-react";
import { createContext, useContext, useEffect, useState } from "react";
export interface FinancialRecord {
  _id?: string;
  userId: string;
  date: Date;
  description: string;
  amount: number;
  category: string;
  paymentMethod: string;
}

type FinancialRecordContextType = {
  records: FinancialRecord[];
  addRecord: (record: FinancialRecord) => void;
  updateRecord: (id: string, newRecord: FinancialRecord) => void;
  deleteRecord: (id: string) => void;
};

export const FinancialRecordContext = createContext<
  FinancialRecordContextType | undefined
>(undefined);

export const FinancialRecordProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [records, setRecords] = useState<FinancialRecord[]>([]);

  const { user } = useUser();

  const fetchRecords = async () => {
    if (!user) return;
    const res = await fetch(
      `http://localhost:4000/financial-records/getAllByUserId/${user.id}`
    );
    if (res.ok) {
      const records = await res.json();
      console.log(records);
      setRecords(records);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, [user]);

  const addRecord = async (record: FinancialRecord) => {
    const res = await fetch("http://localhost:4000/financial-records", {
      method: "POST",
      body: JSON.stringify(record),
      headers: {
        "Content-Type": "application/json",
      },
    });
    try {
      if (res.ok) {
        const newRecord = await res.json();
        setRecords((prev) => [...prev, newRecord]);
      }
    } catch (error) {}
  };

  const updateRecord = async (id: string, newRecord: FinancialRecord) => {
    const response = await fetch(
      `http://localhost:4000/financial-records/${id}`,
      {
        method: "PUT",
        body: JSON.stringify(newRecord),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    try {
      if (response.ok) {
        const newRecord = await response.json();
        setRecords((prev) =>
          prev.map((record) => {
            if (record._id === id) {
              return newRecord;
            } else {
              return record;
            }
          })
        );
      }
    } catch (err) {}
  };

  const deleteRecord = async (id: string) => {
    const res = await fetch(`http://localhost:4000/financial-records/${id}`, {
      method: "DELETE",
    });
    try {
      if (res.ok) {
        const deletedRecord = await res.json();
        setRecords((prev) =>
          prev.filter((record) => record._id !== deletedRecord._id)
        );
      }
    } catch (error) {}
  };

  return (
    <FinancialRecordContext.Provider
      value={{ records, addRecord, updateRecord, deleteRecord }}
    >
      {children}
    </FinancialRecordContext.Provider>
  );
};

export const useFinancialRecords = () => {
  const context = useContext<FinancialRecordContextType | undefined>(
    FinancialRecordContext
  );

  if (!context) {
    throw new Error(
      "useFinancial records must be used within a FinancialRecordsProvider"
    );
  }

  return context;
};
