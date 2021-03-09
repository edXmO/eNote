import React, {useEffect, useState} from 'react';
// SVG's
import DeleteNote from '../../../assets/SVG/delete.svg';

// Services
import removeTask from '../../../services/removeTask';
import updateTask from '../../../services/updateTask';

import PropTypes from 'prop-types';

const Task = ({content, id, check, onNoteRemove }) => {

  useEffect(() => {
    setChecked(check)
  }, [check])

  const [checked, setChecked] = useState(check)


  const handleChange = (e) => {
    e.preventDefault()
    setChecked(prevState => !prevState)
    onNoteRemove();
  }

  const handleRemoveClick = (id, e) => {
    e.stopPropagation();
    removeTask(id);
    onNoteRemove();
    console.log('removing task')
  };


  return (
    <li className="item item--task" onClick={(e) => handleChange(e)}>
      <div className="task-container">
        <input
        name='check'
        type="checkbox"
        checked={checked}
        onChange={(e) => handleChange(e)}
        id={id} />
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
