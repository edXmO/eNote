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
  const [activeModal, setActiveModal] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

  const handleSlideChange = swiperInstance => {
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
