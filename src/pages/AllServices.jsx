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
