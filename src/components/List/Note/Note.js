import React from 'react';
import PropTypes from 'prop-types';

const Note = ({ title, content, date }) => {
  return (
    <li className="item item--note">
      <h4 className="item--note__title">{title}</h4>
      <p className="item--note__content">{content}</p>
      <span className="item--note__date">{date}</span>
    </li>
  );
};

export default Note;

Note.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  date: PropTypes.string,
};
