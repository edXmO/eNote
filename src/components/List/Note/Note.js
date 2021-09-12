import React from 'react';
import DeleteNote from '../../../assets/SVG/delete.svg';
import PropTypes from 'prop-types';

// Hooks
import useNote from '../../../hooks/useNote';

const Note = ({
  title,
  content,
  date,
  id,
  setActiveModal,
}) => {

  const { addNote, removeNote } = useNote();

  const handleSelectedNote = (id, title, content) => {
    addNote(e, title, content);
    setActiveModal((prevState) => !prevState);
  };

  const handleRemoveClick = (id, e) => {
    e.stopPropagation();
    removeNote(id);
  };

  return (
    <li
      className="item item--note"
      onClick={() => handleSelectedNote(id, title, content)}
    >
      <h4 className="item--note__title">{title.slice(0, 30)}</h4>
      <p className="item--note__content">{content.slice(0, 40)}</p>
      <span className="item--note__date">{date}</span>
      <button
        className="item__btn remove-note"
        onClick={(e) => handleRemoveClick(id, e)}
      >
        <DeleteNote className="item__icon" />
      </button>
    </li>
  );
};

export default Note;

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
  id: PropTypes.string,
  onNoteRemove: PropTypes.func,
  setSelectedNote: PropTypes.func,
  setActiveModal: PropTypes.func,
};
