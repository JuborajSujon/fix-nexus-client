import { useEffect } from "react";
import ManageServiceCard from "./ManageServiceCard";
import useAxiosGeneral from "../hooks/useAxiosGeneral";

const ManageServicesCardContainer = () => {
  const axiosGeneral = useAxiosGeneral();

  useEffect(() => {}, []);
  return (
    <div className="grid grid-cols-1 gap-4">
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
    </div>
  );
};

export default ManageServicesCardContainer;
