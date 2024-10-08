import AddExpense from "../components/AddExpense";
import ExpenseList from "../components/ExpenseList";

const ExpensesPage = () => {
  return (
    <div className="pb-[30px]">
      <div className="flex items-center justify-between mb-5">
        <h1 className="mt-5 mb-5 text-xl font-bold">Expenses</h1>
        <div>
          {/* <a
          className="inline-block rounded border border-indigo-600 bg-indigo-600 px-6 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
          href="#"
        >
          Add Income
        </a> */}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="p-[30px] bg-white rounded-lg shadow-md">
            <ExpenseList />
          </div>
        </div>
        <div>
          <div className="p-[40px] bg-white rounded-lg shadow-md">
            <AddExpense />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;
