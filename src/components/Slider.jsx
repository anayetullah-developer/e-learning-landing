import { useEffect, useState } from 'react';
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
    const [jsonData, setJsonData] = useState([]);
    console.log(jsonData);

  useEffect(() => {
    // Make a GET request to fetch JSON data
    fetch('../../public/data/courseData.json')
      .then(response => response.json())
      .then(data => {
        // Update the state with the JSON data
        setJsonData(data);
      })
      .catch(error => {
        // Handle any errors here
        console.error('Error:', error);
      });
  }, []); 
   
  return (
    <div>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={25}
        navigation={true}
        virtual
      >
        {jsonData.map((item, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <DiscountCard key={index} course={item}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
