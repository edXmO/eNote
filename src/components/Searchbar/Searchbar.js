import React, { useContext } from 'react';
import MagnifyingGlass from '../../assets/SVG/loupe.svg';

//PropTypes
import PropTypes from 'prop-types';

// Context
import DataContext from '../../context/dataContext';

const Searchbar = ({
  activeSlide
}) => {

  const {setFilteredNotes, setFilteredTasks, notes, tasks} = useContext(DataContext);

  const handleChange = (e) => {
    const { value } = e.target;
    if (!activeSlide) {
      const newNotes = Array.from(notes);
      setFilteredNotes([
        ...newNotes?.filter((note) =>
          note.title.toLowerCase().includes(value.toLowerCase())
        ),
      ]);
    }
    if (activeSlide) {
      const newTasks = Array.from(tasks);
      setFilteredTasks([
        ...newTasks?.filter((task) =>
          task.content.toLowerCase().includes(value.toLowerCase())
        ),
      ]);
    }
  };

  return (
    <div className="searchbar">
      <div className="searchbar-box">
        <input
          className="searchbar-box__input"
          type="text"
          placeholder="Search..."
          onChange={(e) => handleChange(e)}
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
