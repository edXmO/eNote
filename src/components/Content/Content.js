import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import NoteList from '../List/List';
import Tasks from '../TasksList/Tasks';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper Styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Content = ({ handleSlideChange, setSwiper }) => {
  return (
    <Swiper
      onInit={(swiper) => setSwiper(swiper)}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      className="content"
      slidesPerView={1}
    >
      <SwiperSlide className="content__swiper-child">
        <Searchbar />
        <NoteList />
      </SwiperSlide>

      <SwiperSlide className="content__swiper-child">
        <Searchbar />
        <Tasks />
      </SwiperSlide>
    </Swiper>
  );
};

export default Content;
