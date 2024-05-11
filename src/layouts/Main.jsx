import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Outlet */}

      <Outlet />

      {/* Footer */}

      <h1>Footer</h1>
    </div>
  );
};

export default Main;
