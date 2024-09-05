import axios from "axios";
import { createContext, useEffect, useState } from "react";

const IncomeExpenseContext = createContext();

const IncomeExpenseProvider = ({ children }) => {
  const [incomeList, setIncomeList] = useState([]);
  const [expenseList, setExpenseList] = useState([]);

  const reversedIncomeList = incomeList.slice().reverse();
  console.log(reversedIncomeList);
  const reversedExpenseList = expenseList.slice().reverse();

  const totalIncome = incomeList.reduce(
    (acc, income) => acc + parseFloat(income.amount),
    0
  );
  // console.log(totalIncome);
  const totalExpense = expenseList.reduce(
    (acc, expense) => acc + parseFloat(expense.amount),
    0
  );

  const remainingBalance = totalIncome - totalExpense;

  useEffect(() => {
    const getIncome = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/getIncome`
        );
        if (response?.status === 200) {
          setIncomeList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getIncome();
  }, []);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API}/getExpense`
        );
        if (response?.status === 200) {
          setExpenseList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    getIncome();
  }, []);

  return (
    <IncomeExpenseContext.Provider
      value={{
        incomeList,
        setIncomeList,
        expenseList,
        setExpenseList,
        reversedIncomeList,
        reversedExpenseList,
        totalIncome,
        totalExpense,
        remainingBalance,
      }}
    >
      {children}
    </IncomeExpenseContext.Provider>
  );
};

export { IncomeExpenseContext, IncomeExpenseProvider };
