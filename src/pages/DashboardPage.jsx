import { ChartColumnIncreasing, CircleDollarSign, Store } from "lucide-react";
import { useContext } from "react";
import BarChart from "../components/BarChart";
import LatestExpense from "../components/LatestExpense";
import { AuthContext } from "../context/AuthContext";
import { IncomeExpenseContext } from "../context/IncomeExpenseContext";

const DashboardPage = () => {
  const { user } = useContext(AuthContext);
  const { totalIncome, totalExpense, remainingBalance } =
    useContext(IncomeExpenseContext);

  console.log("user: ", user);

  // const totalIncome = incomeList.reduce(
  //   (acc, income) => acc + parseFloat(income.amount),
  //   0
  // );
  // // console.log(totalIncome);
  // const totalExpense = expenseList.reduce(
  //   (acc, expense) => acc + parseFloat(expense.amount),
  //   0
  // );

  // const remainingBalance = totalIncome - totalExpense;

  console.log(remainingBalance);

  return (
    <div className="pb-[30px]">
      <h1 className="mt-5 mb-5 text-xl font-bold">Dashboard</h1>

      <div className="grid grid-cols-3 gap-10">
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 p-2">
              <CircleDollarSign className="w-4 h-4 text-white" />
            </div>

            <h2 className="text-md">Balance</h2>
          </div>
          <div className="flex h-24 justify-center items-center">
            <h2 className="font-bold text-xl text-gray-600">
              {remainingBalance} Tk
            </h2>
          </div>
        </div>
        <div className="bg-white  rounded-lg p-5 shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 p-2">
              <ChartColumnIncreasing className="w-4 h-4 text-white" />
            </div>

            <h2 className="text-md">Incomes</h2>
          </div>
          <div className="flex h-24 justify-center items-center">
            <h2 className="font-bold text-xl text-gray-600">
              {totalIncome} Tk
            </h2>
          </div>
        </div>
        <div className="bg-white rounded-lg p-5 shadow-md">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-600 p-2">
              <Store className="w-4 h-4 text-white" />
            </div>

            <h2 className="text-md">Expenses</h2>
          </div>
          <div className="flex h-24 justify-center items-center">
            <h2 className="font-bold text-xl text-gray-600">
              {totalExpense} Tk
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <div className="col-span-2">
          <div className="p-4 bg-white rounded-lg shadow-md">
            <BarChart />
          </div>
        </div>
        <div>
          <div className="p-[20px] bg-white rounded-lg shadow-md">
            <h2 className="mb-5">Latest Expense</h2>
            <LatestExpense />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
