import React from 'react';
import Notes from '../../assets/SVG/notes.svg';
import Tasks from '../../assets/SVG/check.svg';
import More from '../../assets/SVG/more.svg';

const Controls = () => {
  return (
    <div className="controls">
      <div className="controls-box">
        <div className="controls-box__notes">
          <Notes className="controls-box__icon controls-box__icon--active" />
        </div>

        <div className="controls-box__tasks">
          <Tasks className="controls-box__icon" />
        </div>

        <div className="controls-box__settings">
          <More className="controls-box__icon" />
        </div>
      </div>
    </div>
  );
};

export default Controls;
