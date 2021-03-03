import React, { useState, useEffect } from 'react';
import '../sass/main.scss';

// Services
import addNote from '../services/addNote';
import getNotes from '../services/getNotes';
import dbInit from '../services/dbInit';

// Components
import Controls from './Controls/Controls';
import Content from './Content/Content';
import AddBtn from './AddBtn/AddBtn';
import Modalform from './Modal/Modal';

// IndexedDB Notes - Logic
const openNotesIndexedDB = (setNotes) => {
  document.querySelector('.modal-form').addEventListener('submit', addNote);
  dbInit();
  getNotes(setNotes);
};

// IndexedDB - Tasks Logic

// const openTasksIndexedDB = () => {

// };

// Main App Container - State Management

const App = () => {

  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [swiper, setSwiper] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const [addingNote, setAddingNote] = useState(false);
  
  useEffect(() => {
    if (!('indexedDB' in window)) {
      console.log('This browser doesn\'t support IndexedDB');
      return;
    }
    openNotesIndexedDB(setNotes)
    
  }, [notes]);
  
  
  const handleSlideChange = swiperInstance => {
    setSwiper(swiperInstance);
    setActiveSlide(swiperInstance.activeIndex);
  };

  const onAddNote = () => {
    setAddingNote((prevState) => !prevState);
  };

  return (
    <div className="container">
      <Controls activeSlide={activeSlide} swiper={swiper} />
      <Content
      onNoteRemove={openNotesIndexedDB}
      handleSlideChange={handleSlideChange}
      setSwiper={setSwiper}
      notes={notes}/>
      <Modalform
        onAddNote={onAddNote}
        activeModal={addingNote}
        setActiveModal={setAddingNote}
      />
      <AddBtn activeSlide={activeSlide} onAddNote={onAddNote} />
    </div>
  );
};

export default App;
