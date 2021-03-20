import React from 'react';
import MagnifyingGlass from '../../assets/SVG/loupe.svg';

const Searchbar = ({activeSlide, notes, setFilteredNotes, tasks, setFilteredTasks}) => {

  const handleChange = e => {
    const { value } = e.target;
    if(!activeSlide){
      const newNotes = Array.from(notes);
      setFilteredNotes([...newNotes?.filter(note => note.title.toLowerCase().includes(value.toLowerCase()))]);   
    }
    if(activeSlide){
      const newTasks = Array.from(tasks);
      setFilteredTasks([...newTasks?.filter(task => task.content.toLowerCase().includes(value.toLowerCase()))]);   
    }
  }

  return (
    <div className="searchbar">
      <div className="searchbar-box">
        <input
          className="searchbar-box__input"
          type="text"
          placeholder="Search..."  
          onChange={(e) => handleChange(e)}
        />
        <MagnifyingGlass 
          className="searchbar-box__icon" />
      </div>
    </div>
  );
};

export default Searchbar;
