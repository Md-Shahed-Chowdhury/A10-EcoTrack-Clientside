// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const handleViewChallenge = () => {
  // Logic to view challenge details
  console.log("View Challenge button clicked");
};
const Slider = () => {
  const [sliderChallenges, setSliderChallenges] = useState([]);
  useEffect(() => {
    fetch("/challenges.json")
      .then((res) => res.json())
      .then((data) => {
        setSliderChallenges([...data.slice(0, 4)]);
      });
  }, []);

  return (
    <div className="h-100 md:h-120 lg:h-150">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {sliderChallenges.map((challenge) => {
          return (
            <SwiperSlide key={challenge._id}>
              <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat flex flex-col gap-20 justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl text-white relative`}
                style={{ backgroundImage: `url(${challenge.imageUrl})` }}
              >
                <div className="w-full h-full bg-black absolute opacity-50 z-0"></div>
                <div className="z-10">{challenge.description}</div>
                <button
                  onClick={handleViewChallenge}
                  className="btn bg-secondary hover:bg-base-300 z-10"
                >
                  View Challenge
                </button>
              </div>
            </SwiperSlide>
          );
        })}

        
      </Swiper>
    </div>
  );
};

export default Slider;
