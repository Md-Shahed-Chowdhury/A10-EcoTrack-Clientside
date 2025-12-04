
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Slider.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const handleViewChallenge = () => {
    // Logic to view challenge details
    console.log("View Challenge button clicked");
}
const Slider = () => {

    return (
        <div className='h-100 md:h-120 lg:h-150'>
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
        <SwiperSlide>
            <div className='bg-[url(https://cdn.pixabay.com/photo/2023/02/14/04/39/volunteer-7788809_1280.jpg)] w-full h-full bg-cover
            bg-center bg-no-repeat flex flex-col gap-20 justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl text-white relative'>
            <div className='w-full h-full bg-black absolute opacity-50'></div>
            <div className='z-1'>Avoid single-use plastic for one month</div>
            <button onClick={handleViewChallenge} className='btn bg-secondary hover:bg-base-300 z-1 '>View Challenge</button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg)] w-full h-full bg-cover
            bg-center bg-no-repeat flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl text-white relative'>
            <div className='w-full h-full bg-black absolute opacity-50'></div>
            <div className='absolute'>Avoid meat every Monday for a month</div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='bg-[url(https://cdn.pixabay.com/photo/2021/01/04/12/54/running-tap-5887452_1280.jpg)] w-full h-full bg-cover
            bg-center bg-no-repeat flex justify-center items-center font-bold text-3xl md:text-4xl lg:text-5xl text-white relative'>
            <div className='w-full h-full bg-black absolute opacity-50'></div>
            <div className='absolute'>Reduce daily water usage by taking 5-minute showers</div>
            </div>
        </SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Slider;