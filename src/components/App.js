import React, { useState, useEffect } from 'react';
import '../sass/main.scss';

// Services
import getItems from '../services/getItems';
import indexedDBNotesInit from '../services/notesDBInit';

// Components
import Controls from './Controls/Controls';
import Content from './Content/Content';
import AddBtn from './AddBtn/AddBtn';
import Modalform from './Modal/Modal';

// Hooks

import useNote from '../hooks/useNote';
import useTask from '../hooks/useTask';


// OpenIndexedDB - Logic
const openIndexedDB = () => {
  indexedDBNotesInit();
};

// Main App Container - State Management

const App = () => {

  const { allNotes } = useNote();

  const [swiper, setSwiper] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeModal, setActiveModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const handleSlideChange = (swiperInstance) => {
    setSwiper(swiperInstance);
    setActiveSlide(swiperInstance.activeIndex);
  };

  return (
    <div className="container">
      <Controls
        activeSlide={activeSlide}
        swiper={swiper}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
        <Content
        activeSlide={activeSlide}
        handleSlideChange={handleSlideChange}
        setSwiper={setSwiper}
        setActiveModal={setActiveModal}
        />
      <Modalform
        activeSlide={activeSlide}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        selectedNote={selectedNote}
      />
      <AddBtn activeSlide={activeSlide} onAddNote={setActiveModal} />
    </div>
  );
};

export default App;
