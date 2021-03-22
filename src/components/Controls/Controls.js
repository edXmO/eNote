import React from 'react';

import PropTypes from 'prop-types';

// Svg's
import Notes from '../../assets/SVG/notes.svg';
import Tasks from '../../assets/SVG/check.svg';
import More from '../../assets/SVG/more.svg';
import Settings from '../../assets/SVG/settings.svg';

const Controls = ({ activeSlide, swiper, setActiveModal }) => {

  const handleActiveModal = () => {
    setActiveModal((prevState) => !prevState);
  };

  return (
    <div className="controls">
      <div className="controls-box">
        <div className="controls-box__list">
          <button onClick={() => swiper.slideTo(0, 100)}>
            <Notes
              className={`controls-box__icon ${
                !activeSlide ? 'controls-box__icon--active' : ''
              }`}
            />
          </button>
        </div>

        <div className="controls-box__tasks">
          <button onClick={() => swiper.slideTo(1, 100)}>
            <Tasks
              className={`controls-box__icon ${
                activeSlide ? 'controls-box__icon--active' : ''
              }`}
            />
          </button>
        </div>

        <div className="controls-box__settings">
          {!activeSlide ? (
            <button onClick={() => handleActiveModal()}>
              <More className="controls-box__icon controls-box__icon--options" />
            </button>
          ) : (
            <button onClick={() => handleActiveModal()}>
              <Settings className="controls-box__icon controls-box__icon--options" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Controls;

Controls.propTypes = {
  activeSlide: PropTypes.number,
  swiper: PropTypes.object,
  setActiveModal: PropTypes.func
};
