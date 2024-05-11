import { Link } from "react-router-dom";
import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const CardContainer = () => {
  return (
    <div className="py-10 md:py-20">
      <SectionTitle
        title="Popular Services"
        desctiption="Browse our popular services below and schedule an appointment with us today to get your gadgets working like new again."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </div>

      <div className="flex justify-center mt-14">
        <Link
          to="/services"
          className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
          <span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#864508] to-[#0026ff] group-hover:from-[#ff6600c4] group-hover:via-[#545fff] group-hover:to-[#ff8a05] absolute"></span>
          <span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
            <span className="relative text-white">Show All Services</span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CardContainer;
