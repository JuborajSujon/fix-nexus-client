import { Helmet } from "react-helmet-async";
import CardContainer from "../components/CardContainer";
import Carousel from "../components/Carousel";
import BestPart from "../components/BestPart";
import ClientReview from "../components/ClientReview";

const Home = () => {
  return (
    <div className="py-10 md:py-20">
      <Helmet>
        <title>FixNexus | Home</title>
      </Helmet>
      <Carousel />
      <CardContainer />
      <BestPart />
      <ClientReview />
    </div>
  );
};

export default Home;
