import { useContext } from "react";
import { IncomeExpenseContext } from "../context/IncomeExpenseContext";

const LatestExpense = () => {
  const { allExpense } = useContext(IncomeExpenseContext);
  console.log(allExpense);

  //   const latestExpense = allExpense.slice(-5).reverse();
  //   console.log(latestExpense);
  return (
    <div>
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right bg-gray-200">
          <tr>
            <th className="whitespace-nowrap px-4 py-[14px] font-medium text-gray-900 text-left">
              Name
            </th>
            <th className="whitespace-nowrap px-4 py-[14px] font-medium text-gray-900">
              Date
            </th>
            <th className="whitespace-nowrap px-4 py-[14px] font-medium text-gray-900">
              Amount
            </th>
          </tr>
        </thead>

        {/* <tbody className="divide-y divide-gray-200">
          {latestExpense &&
            latestExpense.map((expense) => (
              <tr key={expense._id}>
                <td className="whitespace-nowrap px-4 py-[14px] font-medium text-gray-900">
                  {expense.source}
                </td>
                <td className="whitespace-nowrap px-4 py-[14px] text-gray-700 text-center">
                  {formatDate(expense.date)}
                </td>
                <td className="whitespace-nowrap px-4 py-[14px] text-gray-700 text-center">
                  {expense.amount}
                </td>
              </tr>
            ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default LatestExpense;
