import React, { useState, useEffect } from 'react';
import '../sass/main.scss';

//IndexedDB
import localForage from 'localforage';

// Components
import Controls from './Controls/Controls';
import Content from './Content/Content';
import AddBtn from './AddBtn/AddBtn';
import Modalform from './Modal/Modal';

// IndexedDB Logic
const openNotesIndexedDB = (setNotes) => {
  document.querySelector('.modal-form').addEventListener('submit', addNote);

  let notesData = [];

  dbInit();
  getNotes(setNotes);

  function dbInit() {
      localForage.config({
          driver: localForage.INDEXEDDB,
          name: 'eNote',
          version: 1,
          storeName: 'notes'
      });
  }

  function addNote(e){
      let timeStamp = Date.now().toString();
      let note = {
          type: 'note',
          title: e.target[2].value,
          text: e.target[3].value
      }
      localForage.setItem(timeStamp, note)
      .then(() => console.log('item set'))
      .catch(err => console.error(err, 'could not set the item'))
  }

  function getNotes(setItems){
      localForage.iterate((key, value) => {
          // resulting key/value pair for this callback
          // will be executed for every item in the db
          const { type, title, text } = key;
          let note = {
              timeStamp: value,
              type,
              title,
              text
          } 
          notesData = [...notesData, note];
      }).then(() => setItems(notesData))
        .catch((err) => console.error('could not set the items', err));
  }
};


const App = () => {

  const [notes, setNotes] = useState([]);
  const [swiper, setSwiper] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const [addingNote, setAddingNote] = useState(false);
  
  useEffect(() => {
    if (!('indexedDB' in window)) {
      console.log('This browser doesn\'t support IndexedDB');
      return;
    }
    openNotesIndexedDB(setNotes);
    
  }, []);
  
  
  const handleSlideChange = (swiperInstance) => {
    setSwiper(swiperInstance);
    setActiveSlide(swiperInstance.activeIndex);
  };

  const onAddNote = () => {
    setAddingNote((prevState) => !prevState);
  };

  return (
    <div className="container">
      <Controls activeSlide={activeSlide} swiper={swiper} />
      <Content handleSlideChange={handleSlideChange} setSwiper={setSwiper} />
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
