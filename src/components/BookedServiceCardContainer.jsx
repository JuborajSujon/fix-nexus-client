import BookedServiceCard from "./BookedServiceCard";

const BookedServiceCardContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-4 px-4">
      <BookedServiceCard />
      <BookedServiceCard />
      <BookedServiceCard />
      <BookedServiceCard />
      <BookedServiceCard />
      <BookedServiceCard />
      <BookedServiceCard />
    </div>
  );
};

export default BookedServiceCardContainer;
