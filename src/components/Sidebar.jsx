import {
  ChartNoAxesCombined,
  LayoutGrid,
  ShieldPlus,
  Store,
} from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
const Sidebar = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <div className="flex h-screen flex-col justify-between border-e bg-white">
        <div className="px-4 py-5">
          <span className="place-content-center text-xl font-extrabold text-gray-600">
            $Expense<span className="text-blue-700">Tracker</span>
          </span>

          <ul className="mt-6 space-y-1">
            <li>
              <Link
                to="/dashboard"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-4 h-4" />
                  Dashboard
                </div>
              </Link>
            </li>
            <li>
              <Link
                to="/income"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <div className="flex items-center gap-2">
                  <ChartNoAxesCombined className="w-4 h-4" />
                  Incomes
                </div>
              </Link>
            </li>

            <li>
              <Link
                to="/expense"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <div className="flex items-center gap-2">
                  <Store className="w-4 h-4" />
                  Expenses
                </div>
              </Link>
            </li>

            <li>
              <a
                href="#"
                className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              >
                <div className="flex items-center gap-2">
                  <ShieldPlus className="w-4 h-4" />
                  Upgrade
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              className="size-10 rounded-full object-cover"
            />

            <div>
              {user?.token && (
                <p className="text-xs">
                  <strong className="block font-medium">{user.name}</strong>

                  <span> {user.email} </span>
                </p>
              )}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
