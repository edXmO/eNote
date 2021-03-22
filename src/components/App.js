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

//Context
import DataContext from '../context/dataContext';

// OpenIndexedDB - Logic
const openIndexedDB = () => {
  indexedDBNotesInit();
};

// Main App Container - State Management

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [swiper, setSwiper] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeModal, setActiveModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

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
      getItems(setFilteredNotes, setFilteredTasks);
    }

    return () => (isMounted = false);
  }, []);

  const refreshNotes = () => {
    indexedDBNotesInit();
    getItems(setNotes, setTasks);
    getItems(setFilteredNotes, setFilteredTasks);
  };

  const handleSlideChange = (swiperInstance) => {
    setSwiper(swiperInstance);
    setActiveSlide(swiperInstance.activeIndex);
  };

  const onAddNote = () => {
    setActiveModal((prevState) => !prevState);
  };

  const handleSelectedNote = (id, title, text) => {
    setSelectedNote({ id, title, text });
  };

  return (
    <div className="container">
      <Controls
        activeSlide={activeSlide}
        swiper={swiper}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
      />
      <DataContext.Provider value={{tasks, notes, filteredTasks, filteredNotes, setFilteredTasks, setFilteredNotes}}>
        <Content
        activeSlide={activeSlide}
        onNoteRemove={refreshNotes}
        handleSlideChange={handleSlideChange}
        setSwiper={setSwiper}
        setNotes={setNotes}
        setSelectedNote={handleSelectedNote}
        setActiveModal={setActiveModal}
        />
      </DataContext.Provider>
      <Modalform
        onBackNav={refreshNotes}
        onAddNote={onAddNote}
        activeSlide={activeSlide}
        activeModal={activeModal}
        setActiveModal={setActiveModal}
        selectedNote={selectedNote}
      />
      <AddBtn activeSlide={activeSlide} onAddNote={onAddNote} />
    </div>
  );
};

export default App;
