import CardContainer from "../components/CardContainer";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="py-10 md:py-20">
      <Carousel />
      <CardContainer />
    </div>
  );
};

export default Home;
