import axios from "axios";
import { Pencil, Trash2 } from "lucide-react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { IncomeExpenseContext } from "../context/IncomeExpenseContext";
import { formatDate } from "../utils/dateformater";

const IncomeList = () => {
  const { incomeList, setIncomeList } = useContext(IncomeExpenseContext);

  const handleDelete = (id) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${import.meta.env.VITE_API}/deleteIncome/${id}`)
            .then((res) => {
              console.log(res);
              if (res?.status === 200) {
                Swal.fire({
                  title: "Deleted!",
                  text: "Deleted successfully.",
                  icon: "success",
                });
                const remainingItem = incomeList.filter(
                  (item) => item._id !== id
                );
                setIncomeList(remainingItem);
              }
            });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2  divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right bg-gray-200">
            <tr>
              <th className="whitespace-nowrap px-4 py-[14px] font-medium text-gray-900 text-left">
                Source
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
            {incomeList &&
              incomeList.map((income) => (
                <tr key={income._id}>
                  <td className="whitespace-nowrap px-4 py-[14px] font-medium text-gray-900">
                    {income.source}
                  </td>
                  <td className="whitespace-nowrap px-4 py-[14px] text-gray-700 text-center">
                    {formatDate(income.date)}
                  </td>
                  <td className="whitespace-nowrap px-4 py-[14px] text-gray-700 text-center">
                    {income.amount}
                  </td>
                  <td className="whitespace-nowrap px-4 py-[14px] text-gray-700 text-right">
                    <div className="flex justify-end gap-2">
                      <div className="bg-blue-800 text-white px-[8px] py-[5px] rounded-md">
                        <Pencil className="w-4 h-4" />
                      </div>
                      <div
                        onClick={() => handleDelete(income._id)}
                        className="bg-red-600 text-white px-[8px] py-[5px] rounded-md"
                      >
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

export default IncomeList;
