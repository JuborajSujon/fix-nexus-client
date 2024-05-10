import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      {/* Navbar */}
      <h1>Navbar</h1>

      {/* Outlet */}

      <Outlet />

      {/* Footer */}

      <h1>Footer</h1>
    </div>
  );
};

export default Main;
