import React from 'react';
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

const Content = ({
  handleSlideChange,
  setSwiper,
  notes,
  onNoteRemove,
  setSelectedNote,
  setActiveModal,
  tasks,
  filteredNotes,
  setFilteredNotes,
  filteredTasks,
  setFilteredTasks
}) => {
  return (
    <Swiper
      onInit={(swiper) => setSwiper(swiper)}
      onSlideChange={(swiper) => handleSlideChange(swiper)}
      className="content"
      slidesPerView={1}
    >
      <SwiperSlide className="content__swiper-child">
        <Searchbar 
        notes={notes} 
        filteredNotes={filteredNotes}
        setFilteredNotes={setFilteredNotes}
        />
        <NoteList
          notes={notes}
          filteredNotes={filteredNotes}
          onNoteRemove={onNoteRemove}
          setSelectedNote={setSelectedNote}
          setActiveModal={setActiveModal}
        />
      </SwiperSlide>

      <SwiperSlide className="content__swiper-child">
        <Searchbar
        tasks={tasks}
        filteredTasks={filteredTasks}
        setFilteredTasks={setFilteredTasks}
        />
        <Tasks
          onNoteRemove={onNoteRemove}
          filteredTasks={filteredTasks}
          tasks={tasks}
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
  notes: PropTypes.array,
  tasks: PropTypes.array,
  onNoteRemove: PropTypes.func,
  setSelectedNote: PropTypes.func,
  setActiveModal: PropTypes.func,
  filteredTasks: PropTypes.array,
  filteredNotes:PropTypes.array,
  setFilteredTasks: PropTypes.func,
  setFilteredNotes: PropTypes.func
}
