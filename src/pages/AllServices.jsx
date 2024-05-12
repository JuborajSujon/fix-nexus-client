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
    </div>
  );
};

export default AllServices;
