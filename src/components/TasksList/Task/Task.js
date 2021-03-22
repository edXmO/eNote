import React, { useEffect, useState } from 'react';
// SVG's
import DeleteNote from '../../../assets/SVG/delete.svg';

// Services
import removeTask from '../../../services/removeTask';
import updateTask from '../../../services/updateTask';

import PropTypes from 'prop-types';

const Task = ({ content, id, check, onNoteRemove }) => {
  const [completed, setCompleted] = useState(check);

  useEffect(() => {
    updateTask(id, completed);
    onNoteRemove();
  }, [completed]);

  const handleChange = () => {
    setCompleted(!completed);
  };

  const handleRemoveClick = (id, e) => {
    e.stopPropagation();
    removeTask(id);
    onNoteRemove();
  };

  return (
    <li className="item item--task">
      <div className="task-container">
        <input
          name="check"
          type="checkbox"
          defaultChecked={completed}
          onChange={() => handleChange()}
          id={id}
        />
        <label htmlFor={id}>
          <span className="task-strike"></span>
          {content}
        </label>
        <button
          className="item__btn remove-note"
          onClick={(e) => handleRemoveClick(id, e)}
        >
          <DeleteNote className="item__icon" />
        </button>
      </div>
    </li>
  );
};

export default Task;

Task.propTypes = {
  content: PropTypes.string,
  taskText: PropTypes.string,
  id: PropTypes.string,
};
