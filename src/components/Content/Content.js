import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import Searchbar from '../Searchbar/Searchbar';
import NoteList from '../List/List';
import Tasks from '../TasksList/Tasks';
import { Swiper, SwiperSlide } from 'swiper/react';
// Swiper Styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import useNote from '../../hooks/useNote';
import useTask from '../../hooks/useTask';

const Content = ({
  handleSlideChange,
  setSwiper,
  setActiveModal,
  activeSlide,
}) => {

  const { allNotes } = useNote();
  const { allTasks } = useTask();

  const [ filteredNotes, setFilteredNotes ] = useState(allNotes);
  const [ filteredTasks, setFilteredTasks ] = useState(allTasks);

  const filterListBy = term => {
    // Filtering notes
    if(!activeSlide){
      const filtered = [...allNotes];
      filtered.filter(note => note.title.toLowerCase().includes(term.toLowerCase()));
      setFilteredNotes(filtered);
    } else {
      // Filtering tasks
      const filtered = [...allTasks];
      filtered.filter(task => task.title.toLowerCase().includes(term.toLowerCase()));
      setFilteredTasks(filtered);
    }
  }

  return (
    <Swiper
      onInit={swiper => setSwiper(swiper)}
      onSlideChange={swiper => handleSlideChange(swiper)}
      className="content"
      slidesPerView={1}
    >
      <SwiperSlide className="content__swiper-child">
        <Searchbar
          filterListBy={filterListBy}
          activeSlide={activeSlide}
        />
        <NoteList
          notes={filteredNotes}
          setActiveModal={setActiveModal}
        />
      </SwiperSlide>

      <SwiperSlide className="content__swiper-child">
        <Searchbar
          filterListBy={filterListBy}
          activeSlide={activeSlide}
        />
        <Tasks
          tasks={filteredTasks}
          setActiveModal={setActiveModal}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Content;

Content.propTypes = {
  handleSlideChange: PropTypes.func,
  setSwiper: PropTypes.func,
  onNoteRemove: PropTypes.func,
  setSelectedNote: PropTypes.func,
  setActiveModal: PropTypes.func,
};
