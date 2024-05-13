import { useEffect, useState } from "react";
import ManageServiceCard from "./ManageServiceCard";
import useAxiosGeneral from "../hooks/useAxiosGeneral";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";

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

  // Delete Service
  const handleDelete = async (id) => {
    try {
      const { data } = await axiosGeneral.delete(`/services/${id}`);
      if (data.acknowledged) {
        toast.success("Service Deleted Successfully", { autoClose: 1500 });
        const newServices = services.filter((service) => service._id !== id);
        setServices(newServices);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4">
      {services?.map((service) => (
        <ManageServiceCard
          key={service._id}
          service={service}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ManageServicesCardContainer;
