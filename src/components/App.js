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

// OpenIndexedDB - Logic
const openIndexedDB = () => {
  indexedDBNotesInit();
};

// Main App Container - State Management

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [swiper, setSwiper] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const [addingNote, setAddingNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const  [filteredNotes, setFilteredNotes] = useState([]);

  useEffect(() => {
    // Avoid memory leaks on refreshing data
    let isMounted = true;

    if (!('indexedDB' in window)) {
      console.log("This browser doesn't support IndexedDB");
      return;
    }

    if (isMounted) {
      openIndexedDB();
      getItems(setNotes, setTasks);
      getItems(setFilteredNotes, setTasks);
    }

    return () => (isMounted = false);
  }, []);


  const refreshNotes = () => {
    indexedDBNotesInit();
    getItems(setNotes, setTasks);
  };

  const handleSlideChange = (swiperInstance) => {
    setSwiper(swiperInstance);
    setActiveSlide(swiperInstance.activeIndex);
  };

  const onAddNote = () => {
    setAddingNote((prevState) => !prevState);
  };

  const handleSelectedNote = (id, title, text) => {
    setSelectedNote({ id, title, text });
  };


  return (
    <div className="container">
      <Controls activeSlide={activeSlide} swiper={swiper} />
      <Content
        onNoteRemove={refreshNotes}
        handleSlideChange={handleSlideChange}
        setSwiper={setSwiper}
        setNotes={setNotes}
        notes={notes}
        tasks={tasks}
        setSelectedNote={handleSelectedNote}
        setActiveModal={setAddingNote}
        filteredNotes={filteredNotes}
        setFilteredNotes={setFilteredNotes}
      />
      <Modalform
        onBackNav={refreshNotes}
        onAddNote={onAddNote}
        activeSlide={activeSlide}
        activeModal={addingNote}
        setActiveModal={setAddingNote}
        selectedNote={selectedNote}
      />
      <AddBtn activeSlide={activeSlide} onAddNote={onAddNote} />
    </div>
  );
};

export default App;
