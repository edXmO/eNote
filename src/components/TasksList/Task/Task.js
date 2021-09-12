import React, { useEffect, useState } from 'react';
// SVG's
import DeleteNote from '../../../assets/SVG/delete.svg';

// Hooks

import useNote from '../../../hooks/useNote';
import useTask from '../../../hooks/useTask';


import PropTypes from 'prop-types';

const Task = ({ content, id, check}) => {
  const [completed, setCompleted] = useState(check);

  const {updateTask, removeTask} = useTask();

  useEffect(() => {
    updateTask(id, completed);
  }, [completed]);

  const handleChange = () => {
    setCompleted(!completed);
  };

  const handleRemoveClick = (id, e) => {
    e.stopPropagation();
    removeTask(id);
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
