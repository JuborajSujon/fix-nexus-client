import { Link, NavLink } from "react-router-dom";
import useAuth from "./../hooks/useAuth";
import ThemeController from "./ThemeController";

const Navbar = () => {
  const { userSignOut, setUser, user, isHovered, setIsHovered } = useAuth();

  // handle user info show or hide on navbar
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnterRemove = () => {
    setIsHovered(false);
  };

  const handleLogout = () => {
    userSignOut()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navList = (
    <>
      <li className="">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-900 dark:text-orange-400 border-b-4 border-orange-400 hover:border-slate-300"
              : "hover:text-slate-900 hover:bg-orange-400 dark:text-orange-400 dark:hover:text-slate-900"
          }>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          onMouseOver={handleMouseEnterRemove}
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-slate-900 dark:text-orange-400 border-b-4 border-orange-400 hover:border-slate-300"
              : "hover:text-slate-900 hover:bg-orange-400 dark:text-orange-400 dark:hover:text-slate-900"
          }>
          Services
        </NavLink>
      </li>
      <li className="relative">
        <Link
          onMouseOver={handleMouseEnter}
          className="text-slate-900 dark:text-orange-400  hover:bg-orange-400">
          Dashboard
        </Link>
        {isHovered && (
          <ul
            tabIndex={0}
            onMouseLeave={handleMouseLeave}
            className="menu menu-sm dropdown-content mt-12 z-[1] py-3 px-4 shadow dark:bg-slate-900 rounded-md w-56 absolute space-y-2">
            <li>
              <NavLink
                to="/add-service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-slate-900 dark:text-orange-400 border-b-4 border-orange-400 hover:border-slate-300"
                    : "hover:text-slate-900 hover:bg-orange-400 dark:text-orange-400 dark:hover:text-slate-900"
                }>
                Add Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/manage-service"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-slate-900 dark:text-orange-400 border-b-4 border-orange-400 hover:border-slate-300"
                    : "hover:text-slate-900 hover:bg-orange-400 dark:text-orange-400 dark:hover:text-slate-900"
                }>
                Manage Service
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/booked-services"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-slate-900 dark:text-orange-400 border-b-4 border-orange-400 hover:border-slate-300"
                    : "hover:text-slate-900 hover:bg-orange-400 dark:text-orange-400 dark:hover:text-slate-900"
                }>
                Booked-Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service-to-do"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-slate-900 dark:text-orange-400 border-b-4 border-orange-400 hover:border-slate-300"
                    : "hover:text-slate-900 hover:bg-orange-400 dark:text-orange-400 dark:hover:text-slate-900"
                }>
                Service-To-Do
              </NavLink>
            </li>
          </ul>
        )}
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/add-craft"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-900 dark:text-orange-400 border-b-4 border-orange-400 hover:border-slate-300"
                  : "hover:text-slate-900 hover:bg-orange-400 dark:text-orange-400 dark:hover:text-slate-900"
              }>
              Add Craft Item
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/my-craft-list"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-slate-900 dark:text-orange-400 border-b-4 border-orange-400 hover:border-slate-300"
                  : "hover:text-slate-900 hover:bg-orange-400 dark:text-orange-400 dark:hover:text-slate-900"
              }>
              My Art & Craft List
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div
      onMouseLeave={handleMouseLeave}
      className="navbar bg-white dark:bg-slate-900 dark:text-slate-300 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost min-h-9 h-9 px-2  md:hidden hover:bg-orange-500 hover:text-slate-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="2 2 20 20"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2">
            {navList}
          </ul>
        </div>
        <Link
          to={"/"}
          className="btn btn-ghost hover:bg-slate-400 text-xl sm:text-2xl md:text-3xl lg:text-4xl italic font-bold  min-h-12 h-12 -ml-2 ">
          <img
            className="w-36"
            src="https://i.ibb.co/j5Sqs26/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal text-sm font-semibold px-1 space-x-2">
          {navList}
        </ul>
      </div>
      <div className="navbar-end  space-x-2">
        {/*Theme toggle Controller*/}
        <div className="hidden sm:block">
          <ThemeController />
        </div>

        {user ? (
          <div className="relative">
            <div className="flex items-center  gap-1 sm:gap-2">
              <div>
                <button
                  onClick={handleLogout}
                  className="px-2 rounded-md border border-orange-400 hover:bg-orange-400 hover:text-slate-900 text-base  font-semibold min-h-8 h-8 sm:min-h-10 sm:h-10">
                  Logout
                </button>
              </div>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar hover:bg-orange-500 min-h-8 h-10 w-10  sm:min-h-12 sm:h-12 sm:w-12">
                <div className="w-12 rounded-full">
                  <img
                    className=""
                    src={
                      user?.photoURL || "https://i.ibb.co/Jn1jJHN/avater.png"
                    }
                  />
                </div>
              </label>
            </div>
          </div>
        ) : (
          <div className="flex">
            <Link
              to="/login"
              className="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-indigo-600 text-indigo-600 dark:border-white dark:text-white">
              <span className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-indigo-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-indigo-600 dark:text-orange-600 transition duration-300 group-hover:text-white ease">
                Login
              </span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
