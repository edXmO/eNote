import React from 'react';
import Back from '../../assets/SVG/back.svg';
import Tick from '../../assets/SVG/tick.svg';

const Modalform = ({ activeSlide, activeModal, setActiveModal }) => {

  const handleClosingModal = (e) => {
    e.preventDefault();
    setActiveModal((prevState) => !prevState);
  };

  return (
    <div
      className={`modal-background ${
        activeModal ? 'modal-background--active' : ''
      }`}
    >
      <form className="modal-form" onSubmit={(e) => e.preventDefault()}>
        <button
          className="modal-background__btn--back"
          onClick={(e) => handleClosingModal(e)}
        >
          <Back className="modal-background__icon--back modal-background__icon" />
        </button>
        <button type="submit" id="addNote" className="modal-form__btn--tick">
          <Tick className="modal-form__icon--tick modal-form__icon" />
        </button>
        <input
          className="modal-form__input--title"
          id="title"
          type="text"
          placeholder="Title"
        />
        <textarea
          id="text"
          className="modal-form__input--content"
          type="text"
        />
      </form>
    </div>
  );
};

export default Modalform;
