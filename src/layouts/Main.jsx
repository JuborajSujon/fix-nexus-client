import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Outlet */}

      <div className="min-h-[calc(100vh-306px)">
        <Outlet />
      </div>

      {/* Footer */}

      <h1>Footer</h1>
    </div>
  );
};

export default Main;
