import React from 'react';
import PropTypes from 'prop-types';

const Note= ({title, content, date}) => {
    return (
            <div className='note'>
                <h4 className='note__title'>{title}</h4>
                <p className='note__content'>{content}</p>
                <span className='note__date'>{date}</span>
            </div>
    )
}

export default Note;

Note.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
    date: PropTypes.string
}