import { useEffect, useState } from "react";
import BookedServiceCard from "./BookedServiceCard";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const BookedServiceCardContainer = () => {
  const [bookedServices, setBookedServices] = useState([]);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosSecure.get(`/booked-services/${user?.email}`);
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
