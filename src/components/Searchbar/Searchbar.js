import React, { useEffect, useState } from 'react';
import MagnifyingGlass from '../../assets/SVG/loupe.svg';

//PropTypes
import PropTypes from 'prop-types';

const Searchbar = ({
  filterListBy
}) => {

  const [ searchFilter, setSearchFilter ] = useState('');
  
  const handleChange = e => {
    const term = e.target.value;
    setSearchFilter(term);
    filterListBy(term);
  }

  return (
    <div className="searchbar">
      <div className="searchbar-box">
        <input
          value={searchFilter}
          className="searchbar-box__input"
          type="text"
          placeholder="Search..."
          onChange={e => handleChange(e)}
        />
        <MagnifyingGlass className="searchbar-box__icon" />
      </div>
    </div>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  activeSlide: PropTypes.number
}
