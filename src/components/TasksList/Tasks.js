import React, {useContext} from 'react';
import Task from './Task/Task';
import PropTypes from 'prop-types';

//Context
import DataContext from '../../context/dataContext';

const Tasks = ({ onNoteRemove }) => {

  const { tasks, filteredTasks } = useContext(DataContext);

  const renderTasks = filteredTasks.map((task) => {
    const { id, content, check } = task;
    return (
      <Task
        content={content}
        check={check}
        id={id}
        key={id}
        onNoteRemove={onNoteRemove}
      />
    );
  });

  return <ul className="list">{!tasks ? null : renderTasks}</ul>;
};

export default Tasks;

Tasks.propTypes = {
  onNoteRemove: PropTypes.func,
};
