import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
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
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
