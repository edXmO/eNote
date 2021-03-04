import React from 'react';
import DeleteNote from '../../../assets/SVG/delete.svg';
import PropTypes from 'prop-types';

// Services
import removeNote from '../../../services/removeNote';

const Note = ({ title, content, date, id, onNoteRemove }) => {
  const handleRemoveClick = (id) => {
    removeNote(id);
    onNoteRemove();
  };

  return (
    <li className="item item--note">
      <h4 className="item--note__title">{title.slice(0,30)}</h4>
      <p className="item--note__content">{content.slice(0, 35)}</p>
      <span className="item--note__date">{date}</span>
      <button
        className="item__btn remove-note"
        onClick={() => handleRemoveClick(id)}
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
};
