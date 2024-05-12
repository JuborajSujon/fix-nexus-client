import { Helmet } from "react-helmet-async";
import BookedServiceCardContainer from "../components/BookedServiceCardContainer";
import SectionTitle from "../components/SectionTitle";

const BookedService = () => {
  return (
    <div className="py-20">
      <Helmet>
        <title>FixNexus | Booked Services</title>
      </Helmet>
      <SectionTitle title="Booked Services" />
      <BookedServiceCardContainer />
    </div>
  );
};

export default BookedService;
