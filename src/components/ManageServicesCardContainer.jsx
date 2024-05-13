import { useEffect, useState } from "react";
import ManageServiceCard from "./ManageServiceCard";
import useAxiosGeneral from "../hooks/useAxiosGeneral";
import useAuth from "../hooks/useAuth";

const ManageServicesCardContainer = () => {
  const [services, setServices] = useState([]);
  const { user } = useAuth();
  const axiosGeneral = useAxiosGeneral();

  useEffect(() => {
    const getData = async () => {
      const { data } = await axiosGeneral(`/manage-services/${user?.email}`);
      setServices(data);
    };
    getData();
  }, [user?.email]);
  return (
    <div className="grid grid-cols-1 gap-4">
      {services?.map((service) => (
        <ManageServiceCard key={service._id} service={service} />
      ))}
    </div>
  );
};

export default ManageServicesCardContainer;
