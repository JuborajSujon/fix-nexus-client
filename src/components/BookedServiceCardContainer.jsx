import ManageServiceCard from "./ManageServiceCard";

const BookedServiceCardContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
      <ManageServiceCard />
    </div>
  );
};

export default BookedServiceCardContainer;
