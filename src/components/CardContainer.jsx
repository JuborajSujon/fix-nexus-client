import SectionTitle from "./SectionTitle";
import ServiceCard from "./ServiceCard";

const CardContainer = () => {
  return (
    <div className="py-10 md:py-20">
      <SectionTitle
        title="Popular Services"
        desctiption="Browse our popular services below and schedule an appointment with us today to get your gadgets working like new again."
      />
      <div>
        <ServiceCard />
      </div>
    </div>
  );
};

export default CardContainer;
