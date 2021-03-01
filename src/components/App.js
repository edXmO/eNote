import React, { useState } from 'react';
import '../sass/main.scss';

// Components
import Controls from './Controls/Controls';
import Content from './Content/Content';
import AddBtn from './AddBtn/AddBtn';
import Modalform from './Modal/Modal';

const App = () => {
  const [swiper, setSwiper] = useState();
  const [activeSlide, setActiveSlide] = useState(0);
  const [addingNote, setAddingNote] = useState(false);

  const handleSlideChange = (swiperInstance) => {
    setSwiper(swiperInstance);
    setActiveSlide(swiperInstance.activeIndex);
  };

  const onAddNote = () => {
    setAddingNote(prevState => !prevState);
  }

  return (
    <div className="container">
      <Controls activeSlide={activeSlide} swiper={swiper} />
      <Content handleSlideChange={handleSlideChange} setSwiper={setSwiper} />
      <Modalform onAddNote={onAddNote} activeModal={addingNote} setActiveModal={setAddingNote} />
      <AddBtn activeSlide={activeSlide} onAddNote={onAddNote} />
    </div>
  );
};

export default App;
