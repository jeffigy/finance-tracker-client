const FinancialRecordForm = () => {
  return (
    <div>
      <form action="">
        <div></div>
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
      </form>
    </div>
  );
};

export default FinancialRecordForm;
