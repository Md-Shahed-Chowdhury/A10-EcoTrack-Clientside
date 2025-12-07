import useAxios from "../../hooks/axios";
// export default Slider;
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Slider.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { useNavigate } from "react-router";

export default function Slider() {
    const [sliderChallenges, setSliderChallenges] = useState([]);
  const axiosInstance = useAxios();
   useEffect(() => {
   
       axiosInstance.get('/challenges')
       .then(data =>{
         setSliderChallenges([...data.data.slice(0,4)]);
       })
     }, [axiosInstance]);
     const navigate = useNavigate();
     const handleViewChallenge = (id) => {
    console.log("View Challenge button clicked");
    navigate(`/challenges/${id}`);
  };
   
  return (
    <div className="h-150">
      <Swiper
        cssMode={true}
        navigation={true}
        loop={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        
      >
        {
          sliderChallenges.map((challenge)=>{
            return(
                <SwiperSlide key={challenge._id}>
          <div
                className={`w-full h-full bg-cover bg-center bg-no-repeat flex flex-col gap-20 justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl text-white relative`}
                style={{ backgroundImage: `url(${challenge.imageUrl})` }}
              >
                <div className="w-full h-full bg-black absolute opacity-50 z-0"></div>
                <div className="z-10">{challenge.description}</div>
                <button onClick={()=>handleViewChallenge(challenge._id)}
                 
                  className="btn bg-secondary hover:bg-base-300 z-10"
                >
                  View Challenge
                </button>
              </div>
            </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </div>
  );
}
