import React from 'react';
import Task from './Task/Task';
import PropTypes from 'prop-types';

const Tasks = ({ tasks, onNoteRemove, filteredTasks }) => {

  const renderTasks = filteredTasks.map((task) => {
    const {id, content, check} = task;
    return <Task content={content} check={check} id={id} key={id} onNoteRemove={onNoteRemove}/>
  })
  
  return (
    <ul className="list">{!tasks ? null : renderTasks}</ul>
  );
};

export default Tasks;

Tasks.propTypes = {
  tasks: PropTypes.array,
  onNoteRemove: PropTypes.func, 
  filteredTasks: PropTypes.array
};
