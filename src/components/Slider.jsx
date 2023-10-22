import { useState } from 'react';
import { Virtual, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import DiscountCard from './CourseCard';


const Slider = () => {
    const [setSwiperRef] = useState(null);
    // Create array with 500 slides
    const [slides] = useState(
      Array.from({ length: 12 }).map((_, index) => `Slide ${index + 1}`)
    );
  
   
  return (
    <div>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        virtual
      >
        {slides.map((index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <DiscountCard/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
