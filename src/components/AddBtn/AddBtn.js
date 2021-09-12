import React from 'react';
import PropTypes from 'prop-types';
import Plus from '../../assets/SVG/plus.svg';

const AddBtn = ({ onAddNote }) => {
  return (
    <div className="addBtn">
      <button onClick={() => onAddNote(prevState => !prevState)} className={`btn btn--add`}>
        <Plus className="addBtn__icon" />
      </button>
    </div>
  );
};

export default AddBtn;

AddBtn.propTypes = {
  onAddNote: PropTypes.func,
};
