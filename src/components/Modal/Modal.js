import React, { useState, useReducer, useEffect } from 'react';
import Back from '../../assets/SVG/back.svg';
import Tick from '../../assets/SVG/tick.svg';

import PropTypes from 'prop-types';

import initialState from '../../helpers/initialState';

// Hooks 
import useNote from '../../hooks/useNote';
import useTask from '../../hooks/useTask';

// Controlled Form Reducer
const formReducer = (state, action) => {
  const { title, text } = action.payload;
  switch (action.type) {
    case 'INPUT':
      return { ...state, title };
    case 'TEXT':
      return { ...state, text };
    default:
      return;
  }
};

const INITIAL_STATE = initialState.notes;

const Modalform = ({
  activeModal,
  setActiveModal,
  selectedNote,
  activeSlide,
}) => {

  const { addNote, updateNote } = useNote();
  const { addTask } = useTask();


  useEffect(() => {
    if (JSON.stringify(selectedNote) === '{}') {
      return;
    } else {
      setEditing((prevState) => !prevState);
      formState.title = selectedNote.title;
      formState.text = selectedNote.text;
    }
  }, []);

  const [editing, setEditing] = useState(false);
  const [formState, dispatch] = useReducer(formReducer, INITIAL_STATE);

  const handleChange = (type, e) => {
    e.preventDefault();
    const { name, value } = e.target;
    dispatch({
      type: type,
      payload: {
        [name]: value,
      },
    });
  };


  const handleSubmit = (e) => {
    if (!activeSlide && editing) {
        const { id } = selectedNote;
        const { title, text } = formState;
        updateNote(e, id, title, text);
        setTimeout(() => {
          handleClosingModal(e, true);
        }, 500);
        return;
      }
      const { title, text } = formState;
      addNote(e, title, text);
      setTimeout(() => {
        handleClosingModal(e, true);
      }, 500);
      setEditing(false);
    if (activeSlide) {
      const { title } = formState;
      addTask(e, title, false);
      setTimeout(() => {
        handleClosingModal(e, true);
      }, 500);
    }
  };

  const handleClosingModal = (e) => {
    e.preventDefault();
    formState.title = '';
    formState.text = '';
    setEditing(false);
    setActiveModal((prevState) => !prevState);
  };

  return (
    <div
      className={`modal-background ${
        activeModal ? 'modal-background--active' : ''
      }`}
    >
      <form autoComplete="off" className="modal-form" onSubmit={handleSubmit}>
        <button
          className="modal-background__btn--back"
          onClick={(e) => handleClosingModal(e)}
        >
          <Back className="modal-background__icon--back modal-background__icon" />
        </button>
        <button type="submit" id="addNote" className="modal-form__btn--tick">
          <Tick className={'modal-form__icon'} />
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
          disabled={activeSlide}
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
  selectedNote: PropTypes.object,
};
