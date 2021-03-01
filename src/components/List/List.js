import React from 'react';
import Note from './Note/Note';

const NoteList = () => {

  return (
      <ul className='list'>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
      </ul>
    )
};

export default NoteList;
