import React, { useState, useReducer, useEffect } from 'react';
import Back from '../../assets/SVG/back.svg';
import Tick from '../../assets/SVG/tick.svg';

import PropTypes from 'prop-types';

import initialState from '../../helpers/initialState';

// Services
import addNote from '../../services/addNote';
import updateNote from '../../services/updateNote';

// Controlled Form Reducer
const formReducer = (state, action) => {
  const { title, text} = action.payload;
  switch (action.type) {
    case 'INPUT':
      return { ...state, title};
    case 'TEXT':
      return { ...state, text};
    default:
      return;
  }
};

const INITIAL_STATE = initialState.notes;

const Modalform = ({ activeModal, setActiveModal, onBackNav, selectedNote}) => {

  useEffect(() => {
    if(JSON.stringify(selectedNote) === '{}'){
      console.log('adding new note')
    } else {
      setEditing(prevState => !prevState);
      formState.title = selectedNote.title;
      formState.text = selectedNote.text;
    }
  }, [selectedNote]);

  const [editing, setEditing] = useState(false);
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const [noteSuccess, setNoteSuccess] = useState(false);
  
  const handleChange = (type, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch({
      type: type,
      payload: {
        [name]: value
      },
    });
  };

  const handleSubmit = (e) => {
      if (editing) {
        const { id } = selectedNote;
        updateNote(e, id ,formState.title, formState.text);
        setTimeout(() => {
          handleClosingModal(e, true);
        }, 500)
        return;
      }
      const { title, text } = formState;
      addNote(e, title, text);
      setTimeout(() => {
        handleClosingModal(e, true);
      }, 500)
      setEditing(false);
  };

  const handleClosingModal = (e, success) => {
    e.preventDefault();
    formState.title = '';
    formState.text = '';
    setEditing(false);
    setNoteSuccess(success);
    onBackNav();
    setActiveModal(prevState => !prevState);
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
          onClick={(e) => handleClosingModal(e, false)}
        >
          <Back className="modal-background__icon--back modal-background__icon" />
        </button>
        <button type="submit" id="addNote" className="modal-form__btn--tick">
          <Tick
            className={`modal-form__icon--tick modal-form__icon ${
              noteSuccess ? 'modal-form__icon--tick--success' : ''
            }`}
          />
        </button>
        <input
          className="modal-form__input--title"
          id="title"
          type="text"
          placeholder="Title"
          name="title"
          value={formState.title || ''}
          onChange={(e) => handleChange('INPUT', e)}
        />
        <textarea
          id="text"
          className="modal-form__input--content"
          type="text"
          name="text"
          value={formState.text || ''}
          onChange={(e) => handleChange('TEXT', e)}
        />
      </form>
    </div>
  );
};

export default Modalform;

Modalform.propTypes = {
  activeModal: PropTypes.bool,
  setActiveModal: PropTypes.func,
  onBackNav: PropTypes.func,
};
