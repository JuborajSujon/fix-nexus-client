import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle";
import ServiceToDoCard from "../components/ServiceToDoCard";

const ServiceToDo = () => {
  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | Service To Do</title>
      </Helmet>
      <SectionTitle title="Service To Do" />
      <div className="grid grid-cols-1 gap-4">
        <ServiceToDoCard />
        <ServiceToDoCard />
        <ServiceToDoCard />
        <ServiceToDoCard />
        <ServiceToDoCard />
        <ServiceToDoCard />
      </div>
    </div>
  );
};

export default ServiceToDo;
