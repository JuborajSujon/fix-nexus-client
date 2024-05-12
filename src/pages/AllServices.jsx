import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";

const AllServices = () => {
  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | All Services</title>
      </Helmet>

      <SectionTitle title="All Services" />

      <div className="px-4 flex items-center justify-between pb-7">
        <h3 className="text-2xl font-semibold mb-4">
          Total Services Found: <span className="text-slate-600">10</span>
        </h3>
        <label className="input input-bordered flex items-center max-w-sm w-full gap-2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6 opacity-70 cursor-pointer">
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <div className="flex sticky bottom-5 items-center justify-center mt-10">
        <a
          href="#"
          className="px-4 py-2 mx-1 capitalize bg-orange-400 text-slate-900 font-semibold rounded-md cursor-not-allowed hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </a>

        <a
          href="#"
          className="hidden px-4 py-2 mx-1 transition-colors duration-300 transform bg-orange-400 text-slate-900 font-semibold rounded-md sm:inline  hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200">
          1
        </a>

        <a
          href="#"
          className="px-4 py-2 mx-1 text-slate-900 font-semibold transition-colors duration-300 transform bg-orange-400 rounded-md  hover:bg-blue-500 dark:hover:bg-blue-500 hover:text-white dark:hover:text-gray-200 pr-7">
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AllServices;
