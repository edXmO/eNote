import React from 'react';
import Task from './Task/Task';
import PropTypes from 'prop-types';

const Tasks = ({ activeSlide }) => {
  return (
    <ul className="list">
      <Task taskText={'Finish the Notes App!'} id={'1'} />
      <Task taskText={'Checking longer note titles!'} id={'2'} />
    </ul>
  );
};

export default Tasks;

Tasks.propTypes = {
  activeSlide: PropTypes.number,
};
