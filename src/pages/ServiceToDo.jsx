import { Helmet } from "react-helmet-async";
import SectionTitle from "../components/SectionTitle";
import ServiceToDoCard from "../components/ServiceToDoCard";
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import useAxiosGeneral from "../hooks/useAxiosGeneral";

const ServiceToDo = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useAuth();
  const axiosGeneral = useAxiosGeneral();

  // ensure that the new page starts at the top when navigating
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // get data from the server
  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosGeneral.get(
        `/booked-services/${user?.email}`
      );
      setBookedServices(data);
    };
    getData();
  }, []);

  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | Service To Do</title>
      </Helmet>
      <SectionTitle title="Service To Do" />
      <div className="grid grid-cols-1 gap-4">
        {bookedServices?.map((bookedService) => (
          <ServiceToDoCard
            key={bookedService._id}
            bookedService={bookedService}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceToDo;
