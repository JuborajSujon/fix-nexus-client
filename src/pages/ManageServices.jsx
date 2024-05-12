import { Helmet } from "react-helmet-async";
import ManageServicesCardContainer from "../components/ManageServicesCardContainer";
import SectionTitle from "../components/SectionTitle";

const ManageServices = () => {
  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | Manage Services</title>
      </Helmet>
      <SectionTitle title="My Services" />

      <ManageServicesCardContainer />
    </div>
  );
};

export default ManageServices;
