import React from 'react';

// Svg's
import Notes from '../../assets/SVG/notes.svg';
import Tasks from '../../assets/SVG/check.svg';
import More from '../../assets/SVG/more.svg';
import Settings from '../../assets/SVG/settings.svg';

const Controls = ({activeSlide, swiper}) => {

  const handleBtnClick = () => {
    if(activeSlide === 0){
      swiper.slideTo(1, 100)
    }
    if(activeSlide === 1){
      swiper.slideTo(0, 100)
    }
  }

  return (
    <div className="controls">
      <div className="controls-box">

        <div className="controls-box__list">
          <button onClick={handleBtnClick}>
          <Notes className={`controls-box__icon ${activeSlide === 0 ? 'controls-box__icon--active': ''}`} />
          </button>
        </div>

        <div className="controls-box__tasks">
          <button onClick={handleBtnClick} >
          <Tasks className={`controls-box__icon ${activeSlide === 1 ? 'controls-box__icon--active': ''}`} />
          </button>
        </div>

        <div className="controls-box__settings">
          {activeSlide === 0 ?
            <More className="controls-box__icon controls-box__icon--options" /> :
            <Settings className="controls-box__icon controls-box__icon--options"/>}
        </div>
      </div>
    </div>
  );
};

export default Controls;
