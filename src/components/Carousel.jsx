import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide from "./Slide";

const Carousel = () => {
  const bgimg1 = "https://i.ibb.co/kMQ6NSw/Slider1.jpg";
  const bgimg2 = "https://i.ibb.co/SRq3S0Y/Slider2.jpg";
  const bgimg3 = "https://i.ibb.co/sRtRZmV/Slider3.jpg";
  return (
    <div className=" px-2 py-5 mx-auto -z-10 rounded-xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        <SwiperSlide>
          <Slide
            image={bgimg1}
            text="Revive Your Devices with Our Expert Repairs"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg2}
            text="Experience Seamless Repairs for Your Electronics"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            image={bgimg3}
            text="Empowering Your Devices to Perform Like New"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
