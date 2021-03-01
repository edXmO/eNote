import React from 'react';
import PropTypes from 'prop-types';
import Plus from '../../assets/SVG/plus.svg';

const AddBtn = ({ activeSlide, onAddNote }) => {
  const handleClick = () => {
    onAddNote();
  };

  return (
    <div className="addBtn">
      <button onClick={() => handleClick()} className={`btn btn--add`}>
        <Plus className="addBtn__icon" />
      </button>
    </div>
  );
};

export default AddBtn;

AddBtn.propTypes = {
  activeSlide: PropTypes.number,
};
