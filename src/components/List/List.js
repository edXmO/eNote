import React from 'react';
import Note from './Note/Note';
import helper from '../../helpers/helper';

const NoteList = ({
  notes,
  setActiveModal,
}) => {

  const renderNotes = notes?.length && notes.map((note) => {
    const { timeStamp, title, text } = note;
    const date = helper.getDate(parseInt(timeStamp));
    return (
      <Note
        key={timeStamp}
        id={timeStamp}
        title={title}
        content={text}
        date={date}
        setActiveModal={setActiveModal}
      />
    );
  });

  return !notes.length ? 
    <div style={{display: 'flex', height: "auto", height: "100%", flexDirection: 'column', alignItems: 'center', justifyContent:"center", backgroundColor: "black"}}>
      <p style={{paddingBottom: '2rem', fontSize: '1.6rem', fontWeight: "bold", color: "gainsboro"}}>You don't have any saved notes...</p>
    </div>
    :
    <ul className="list">{renderNotes}</ul>;
};

export default NoteList;
