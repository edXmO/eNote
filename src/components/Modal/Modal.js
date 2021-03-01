import React from 'react';
import Back from '../../assets/SVG/back.svg';
import Tick from '../../assets/SVG/tick.svg';

const Modalform = ({ activeSlide }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submitting note');
  };

  return (
    <div className="modal-background">
      <form className="modal-form" onSubmit={(e) => handleSubmit(e)}>
        <button className="modal-form__btn--back">
          <Back className="modal-form__icon--back modal-form__icon" />
        </button>
        <button type="submit" className="modal-form__btn--tick">
          <Tick className="modal-form__icon--tick modal-form__icon" />
        </button>
        <input
          className="modal-form__input--title"
          id="title"
          type="text"
          placeholder="Title"
        />
        <textarea className="modal-form__input--content" type="text" />
      </form>
    </div>
  );
};

export default Modalform;
