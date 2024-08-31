import axios from "axios";
import { ChartColumnIncreasing, CircleDollarSign, Store } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import BarChart from "../components/BarChart";
import { AuthContext } from "../context/AuthContext";

const DashboardPage = () => {
  const [allIncome, setAllIncome] = useState([]);
  const [allExpense, setAllExpense] = useState([]);
  const { user } = useContext(AuthContext);

  const totalIncome = allIncome.reduce(
    (acc, income) => acc + parseFloat(income.amount),
    0
  );
  // console.log(totalIncome);
  const totalExpense = allExpense.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );

  const remainingBalance = totalIncome - totalExpense;

  // console.log(remainingBalance);

  useEffect(() => {
    const getIncomes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/getIncome`
        );
        if (response?.status === 200) {
          setAllIncome(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getIncomes();
  }, [allIncome]);

  useEffect(() => {
    const getExpense = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/getExpense`
        );
        if (response?.status === 200) {
          setAllExpense(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getExpense();
  }, [allExpense]);

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
            <h2>Latest Expense</h2>
            {/* <LatestExpense /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
