import React from 'react';
import Task from './Task/Task';
import PropTypes from 'prop-types';

const Tasks = ({ activeSlide }) => {
  return (
    <ul className="list">
      <Task taskText={'Finish the Notes App!'} id={'1'} />
      <Task taskText={'Checking longer note titles!'} id={'2'} />
      <Task taskText={'Finish the Notes App!'} id={'3'} />
      <Task taskText={'Checking longer note titles!'} id={'4'} />
      <Task taskText={'Finish the Notes App!'} id={'5'} />
      <Task taskText={'Checking longer note titles!'} id={'6'} />
      <Task taskText={'Finish the Notes App!'} id={'7'} />
      <Task taskText={'Checking longer note titles!'} id={'8'} />
    </ul>
  );
};

export default Tasks;

Tasks.propTypes = {
  activeSlide: PropTypes.number,
};
