import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useFinancialRecords } from "../../context/financial-record-context";

const FinancialRecordForm = () => {
  const [description, setDescription] = useState<string>("");
  const [amount, setAmount] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const { addRecord } = useFinancialRecords();
  const { user } = useUser();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newRecord = {
      userId: user?.id ?? "",
      date: new Date(),
      description,
      amount: parseFloat(amount),
      category,
      paymentMethod,
    };
    console.log(newRecord);
    addRecord(newRecord);
    setDescription("");
    setAmount("");
    setCategory("");
    setPaymentMethod("");
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xs p-5 border border-slate-700 rounded-md mx-auto"
    >
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Description:</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Amount:</span>
        </div>
        <input
          className="input input-bordered w-full max-w-xs"
          value={amount}
          onChange={({ target }) => setAmount(target.value)}
        />
      </label>
      <label htmlFor="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Category:</span>
        </div>
        <select
          className="select select-bordered w-full max-w-xs"
          value={category}
          onChange={({ target }) => setCategory(target.value)}
        >
          <option disabled value="">
            Select a Category
          </option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Salary">Salary</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <label htmlFor="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Payment Method:</span>
        </div>
        <select
          className="select select-bordered w-full max-w-xs"
          value={paymentMethod}
          onChange={({ target }) => setPaymentMethod(target.value)}
        >
          <option disabled value="">
            Select a Payment Method
          </option>
          <option value="Credit Card">Credit Card</option>
          <option value="Cash">Cash</option>
          <option value="Bank Transfer">Bank Transfer</option>
        </select>
      </label>
      <button className="btn w-full mt-6">Submit</button>
    </form>
  );
};

export default FinancialRecordForm;
