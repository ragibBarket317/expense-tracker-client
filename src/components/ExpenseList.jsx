import { Pencil, Trash2 } from "lucide-react";
import { formatDate } from "../utils/dateformater";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
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
              <th className="whitespace-nowrap px-4 py-[14px] font-medium text-gray-900 text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {expenses &&
              expenses.map((expense) => (
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
                  <td className="whitespace-nowrap px-4 py-[14px] text-gray-700 text-right">
                    <div className="flex justify-end gap-2">
                      <div className="bg-blue-800 text-white px-[8px] py-[5px] rounded-md">
                        <Pencil className="w-4 h-4" />
                      </div>
                      <div className="bg-red-600 text-white px-[8px] py-[5px] rounded-md">
                        <Trash2 className="w-4 h-4" />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseList;
