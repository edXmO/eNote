import React from 'react';
import MagnifyingGlass from '../../assets/SVG/loupe.svg';

const Searchbar = ({notes, setNotes}) => {

  const handleChange = e => {
    setNotes([...notes?.filter(note => note.title.toLowerCase().includes(e.target.value.toLowerCase()))]);
  }

  return (
    <div className="searchbar">
      <div className="searchbar-box">
        <input
          className="searchbar-box__input"
          type="text"
          placeholder="Search notes"  
          onChange={(e) => handleChange(e)}
        />
        <MagnifyingGlass 
          className="searchbar-box__icon" />
      </div>
    </div>
  );
};

export default Searchbar;
