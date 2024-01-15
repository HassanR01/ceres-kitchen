'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Categories from './Categories';
// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Categories title="category 1" description="this is so great and delicious, Test it now !" src='/dish1.png' section='ctg1' alt='descripe category' /></SwiperSlide>
        <SwiperSlide><Categories title="category 2" description="this is so great and delicious, Test it now !" src='/dish2.png' section='ctg2' alt='descripe category' /></SwiperSlide>
        <SwiperSlide><Categories title="category 3" description="this is so great and delicious, Test it now !" src='/dish3.png' section='ctg3' alt='descripe category' /></SwiperSlide>
        <SwiperSlide><Categories title="category 4" description="this is so great and delicious, Test it now !" src='/dish4.png' section='ctg4' alt='descripe category' /></SwiperSlide>
      </Swiper>
    </>
  );
}