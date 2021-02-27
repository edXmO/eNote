import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import Notes from '../Notes/Notes';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// Swiper Styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

// Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Content = () => {
    return (
        <Swiper
        autoHeight={false}
        className='content'
        slidesPerView={1}>
            <SwiperSlide className='content__swiper-child'>
               <Searchbar />
               <Notes />
            </SwiperSlide>
            <SwiperSlide className='content__swiper-child'>
               <Searchbar />
               <Notes />
            </SwiperSlide>
        </Swiper>
    )
}

export default Content;