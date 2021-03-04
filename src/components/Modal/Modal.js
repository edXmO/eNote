import React, {useState} from 'react';
import Back from '../../assets/SVG/back.svg';
import Tick from '../../assets/SVG/tick.svg';

import PropTypes from 'prop-types';

// Services
import addNote from '../../services/addNote';

const Modalform = ({ activeModal, setActiveModal, onBackNav }) => {

  const [noteSuccess, setNoteSuccess] = useState(false);

  const handleSubmit = e => {
    addNote(e);
    setNoteSuccess(prevState => !prevState);
  }

  const handleClosingModal = (e) => {
    e.preventDefault();
    setNoteSuccess(false);
    onBackNav();
    setActiveModal((prevState) => !prevState);
  };

  return (
    <div
      className={`modal-background ${
        activeModal ? 'modal-background--active' : ''
      }`}
    >
      <form className="modal-form" onSubmit={handleSubmit}>
        <button
          className="modal-background__btn--back"
          onClick={e => handleClosingModal(e)}
        >
          <Back className="modal-background__icon--back modal-background__icon" />
        </button>
        <button type="submit" id="addNote" className="modal-form__btn--tick">
          <Tick className={`modal-form__icon--tick modal-form__icon ${noteSuccess ? 'modal-form__icon--tick--success' : ''}`} />
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

Modalform.propTypes = {
  activeModal: PropTypes.bool,
  setActiveModal: PropTypes.func,
};
