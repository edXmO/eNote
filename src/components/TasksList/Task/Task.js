import React from 'react';
import PropTypes from 'prop-types';


const Task = ({task, taskText, id}) => {
    return (
            <li className='item item--task'>
                <div className='task-container'>
                <input type='checkbox' id={id}/>
                <label htmlFor={id}>
                    <span className='task-strike'></span>
                    {taskText}
                </label>
                </div>
            </li>
    )
}

export default Task;

Task.propTypes = {
    task: PropTypes.string,
    taskText: PropTypes.string
}