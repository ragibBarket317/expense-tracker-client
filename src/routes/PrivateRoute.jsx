import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading...</h1>; // Or use a spinner component
  }
  return (
    <div>
      {user ? (
        <>
          <div className="flex">
            <div className="w-[15%] sticky top-0 h-screen">
              <div>
                <Sidebar />
              </div>
            </div>
            <div className="w-[90%]">
              <Header />
              <div className="mx-auto max-w-screen-full px-4 sm:px-6 lg:px-8">
                <Outlet />
                {children}
              </div>
            </div>
          </div>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </div>
  );
};

export default PrivateRoute;
