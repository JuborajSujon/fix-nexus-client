import { useEffect, useState } from "react";
import BookedServiceCard from "./BookedServiceCard";
import useAuth from "../hooks/useAuth";
import useAxiosGeneral from "../hooks/useAxiosGeneral";

const BookedServiceCardContainer = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useAuth();
  const axiosGeneral = useAxiosGeneral();

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
    <div className="grid grid-cols-1 gap-12 px-4">
      {bookedServices?.map((bookedService) => (
        <BookedServiceCard
          key={bookedService._id}
          bookedService={bookedService}
        />
      ))}
    </div>
  );
};

export default BookedServiceCardContainer;
