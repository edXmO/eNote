import React from 'react';
import PropTypes from 'prop-types';
import Plus from '../../assets/SVG/plus.svg';

const AddBtn = ({ activeSlide }) => {
  const handleClick = () => {
    console.log('add clicked');
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
