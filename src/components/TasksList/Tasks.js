import React from 'react';
import Task from './Task/Task';
import PropTypes from 'prop-types';

// Hooks
import useTask from '../../hooks/useTask';

const Tasks = () => {

  const { allTasks, addTask } = useTask();  

  const renderTasks = allTasks && allTasks.map((task) => {
    const { id, content, check } = task;
    return (
      <Task
        content={content}
        check={check}
        id={id}
        key={id}
      />
    );
  });

  return !allTasks?.length ? 
    <div style={{display: 'flex', height: "auto", height: "100%", flexDirection: 'column', alignItems: 'center', justifyContent:"center", backgroundColor: "black"}}>
      <p style={{paddingBottom: '2rem', fontSize: '1.6rem', fontWeight: "bold", color: "gainsboro"}}>You don't have any saved tasks...</p>
    </div>
    :
    <ul className="list">{renderTasks}</ul>;
};

export default Tasks;

Tasks.propTypes = {
  onNoteRemove: PropTypes.func,
};
