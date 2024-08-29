import { ChartColumnIncreasing, CircleDollarSign, Store } from "lucide-react";
import BarChart from "../components/BarChart";

const DashboardPage = () => {
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
            <h2 className="font-bold text-xl text-gray-600">0 Tk</h2>
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
            <h2 className="font-bold text-xl text-gray-600">0 Tk</h2>
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
            <h2 className="font-bold text-xl text-gray-600">0 Tk</h2>
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
          <div className="p-[50px] bg-white rounded-lg shadow-md"></div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
