import React, { useState, useEffect } from 'react';
import '../sass/main.scss';

import registerServiceWorker from '../registerServiceWorker';


// Services
// import addNote from '../services/addNote';
import getNotes from '../services/getNotes';
import dbInit from '../services/dbInit';


// Components
import Controls from './Controls/Controls';
import Content from './Content/Content';
import AddBtn from './AddBtn/AddBtn';
import Modalform from './Modal/Modal';

// IndexedDB Notes - Logic
const openNotesIndexedDB = () => {
  dbInit();
};

// IndexedDB - Tasks Logic

// const openTasksIndexedDB = () => {

// };

// Main App Container - State Management

const App = () => {

  const [notes, setNotes] = useState([]);
  const [swiper, setSwiper] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const [addingNote, setAddingNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({})

  useEffect(() => {
    // Avoid memory leaks on refreshing data
    let isMounted = true;

    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB");
      return;
    }   
    
    if('serviceWorker' in navigator) {
      navigator.registerServiceWorker().then(() => {
          console.log('Service Worker Registered');
      });
    }
      
    if (isMounted) {
      openNotesIndexedDB();
      getNotes(setNotes);
    }

    return () => (isMounted = false);
  }, []);

  const refreshNotes = () => {
    dbInit();
    getNotes(setNotes);
  };

  const handleSlideChange = (swiperInstance) => {
    setSwiper(swiperInstance);
    setActiveSlide(swiperInstance.activeIndex);
  };

  const onAddNote = () => {
    setAddingNote((prevState) => !prevState);
  };

  const handleSelectedNote = (id, title, text) => {
    console.log(id, title, text);
    setSelectedNote({id, title, text});
  }


  return (
    <div className="container">
      <Controls 
        activeSlide={activeSlide} 
        swiper={swiper} />
      <Content
        onNoteRemove={refreshNotes}
        handleSlideChange={handleSlideChange}
        setSwiper={setSwiper}
        notes={notes}
        setSelectedNote={handleSelectedNote}
        setActiveModal={setAddingNote}
      />
      <Modalform
        onBackNav={refreshNotes}
        onAddNote={onAddNote}
        activeModal={addingNote}
        setActiveModal={setAddingNote}
        selectedNote={selectedNote}
      />
      <AddBtn 
        activeSlide={activeSlide} 
        onAddNote={onAddNote} />
    </div>
  );
};

export default App;
