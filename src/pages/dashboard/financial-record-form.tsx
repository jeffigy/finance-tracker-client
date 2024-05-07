const FinancialRecordForm = () => {
  return (
    <form action="" className="max-w-xs p-5 border border-slate-700 rounded-md">
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Description:</span>
        </div>
        <input className="input input-bordered w-full max-w-xs" />
      </label>
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Amount:</span>
        </div>
        <input className="input input-bordered w-full max-w-xs" />
      </label>
      <label htmlFor="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">Category:</span>
        </div>
        <select
          className="select select-bordered w-full max-w-xs"
          name=""
          id=""
        >
          <option disabled selected value="">
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
          name=""
          id=""
        >
          <option disabled selected value="">
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
