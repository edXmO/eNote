import React from 'react';
import Notes from '../../assets/SVG/notes.svg';
import Tasks from '../../assets/SVG/check.svg';
import More from '../../assets/SVG/more.svg';

const Controls = ({swiper}) => {



  return (
    <div className="controls">
      <div className="controls-box">
        <div className="controls-box__notes">
          <button onClick={() => swiper.slideTo(0, 100)}>
          <Notes className={`controls-box__icon ${swiper.realIndex === 0 ? 'controls-box__icon--active' : ''}`} />
          </button>
        </div>

        <div className="controls-box__tasks">
          <button onClick={() => swiper.slideTo(1, 100)} >
          <Tasks className={`controls-box__icon ${swiper.realIndex === 1 ? 'controls-box__icon--active' : ''}`} />
          </button>
        </div>

        <div className="controls-box__settings">
          <More className="controls-box__icon" />
        </div>
      </div>
    </div>
  );
};

export default Controls;
