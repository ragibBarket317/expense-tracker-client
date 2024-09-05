import axios from "axios";
import { useContext } from "react";
import Swal from "sweetalert2";
import { IncomeExpenseContext } from "../context/IncomeExpenseContext";

const AddExpense = () => {
  const { expenseList, setExpenseList, totalExpense, remainingBalance } =
    useContext(IncomeExpenseContext);

  const handleForm = async (e) => {
    e.preventDefault();

    const givenAmount = e.target.amount.value;

    if (parseFloat(givenAmount) > remainingBalance) {
      return Swal.fire({
        icon: "error",
        title: "Insafficent balance. Please add some money.",
      });
    }

    try {
      let form = e.target;
      const source = form.source.value;
      const amount = form.amount.value;
      const date = form.date.value;
      console.log(source, amount, date);

      const response = await axios.post(
        `${import.meta.env.VITE_API}/addExpense`,
        { source, amount, date }
      );
      if (response?.status === 201) {
        setExpenseList([...expenseList, response.data]);
        Swal.fire({
          icon: "success",
          title: "Expense added successfully!!",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Add Your Expense
          </h1>

          <form onSubmit={handleForm} className="mb-0 mt-6 space-y-4 ">
            <div>
              <label>Source</label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm mt-1"
                  placeholder="Enter source"
                  name="source"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password">Amount</label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4 pe-12 text-sm shadow-sm mt-1"
                  placeholder="Enter amount"
                  name="amount"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password">Date</label>

              <div className="relative">
                <input
                  type="date"
                  className="w-full rounded-lg border-[1px] border-gray-200 p-4  text-sm shadow-sm mt-1"
                  name="date"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Add Expense
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddExpense;
