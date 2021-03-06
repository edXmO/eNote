import React, { useContext } from 'react';
import Note from './Note/Note';
import helper from '../../helpers/helper';

// Context 
import DataContext from '../../context/dataContext';

const NoteList = ({
  onNoteRemove,
  setSelectedNote,
  setActiveModal,
}) => {

  const { notes, filteredNotes } = useContext(DataContext);

  const renderNotes = filteredNotes.map((note) => {
    const { timeStamp, title, text } = note;
    const date = helper.getDate(parseInt(timeStamp));
    return (
      <Note
        key={timeStamp}
        id={timeStamp}
        title={title}
        content={text}
        date={date}
        onNoteRemove={onNoteRemove}
        setSelectedNote={setSelectedNote}
        setActiveModal={setActiveModal}
      />
    );
  });

  return <ul className="list">{!notes ? null : renderNotes}</ul>;
};

export default NoteList;
