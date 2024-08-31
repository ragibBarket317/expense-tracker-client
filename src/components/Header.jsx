import { LogOut, Sun } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  const { setToken } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div>
      <header className="bg-white border-b">
        <div className="mx-auto max-w-screen-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between w-full h-16">
            <div>
              <div className="relative">
                <label htmlFor="Search" className="sr-only">
                  {" "}
                  Search{" "}
                </label>

                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="w-full rounded-md border-[1px] border-gray-200 pl-2 py-2.5 pe-10 shadow-sm sm:text-sm"
                />

                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700"
                  >
                    <span className="sr-only">Search</span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="px-[6px] py-[5px] bg-gray-100 rounded-lg">
                <Sun className="w-6 h-6 text-gray-500" />
              </div>
              <div className="px-[6px] py-[5px] bg-gray-100 rounded-lg cursor-pointer">
                <LogOut
                  onClick={handleLogout}
                  className="w-6 h-6 text-gray-500"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
