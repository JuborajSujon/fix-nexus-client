import ManageServicesCardContainer from "../components/ManageServicesCardContainer";
import SectionTitle from "../components/SectionTitle";

const ManageServices = () => {
  return (
    <div className="py-20">
      <SectionTitle title="My Services" />

      <ManageServicesCardContainer />
    </div>
  );
};

export default ManageServices;
