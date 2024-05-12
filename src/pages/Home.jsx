import { Helmet } from "react-helmet-async";
import CardContainer from "../components/CardContainer";
import Carousel from "../components/Carousel";
import TopSeller from "../components/TopSeller";
import BestPart from "../components/BestPart";

const Home = () => {
  return (
    <div className="py-10 md:py-20">
      <Helmet>
        <title>FixNexus | Home</title>
      </Helmet>
      <Carousel />
      <CardContainer />
      <TopSeller />
      <BestPart />
    </div>
  );
};

export default Home;
