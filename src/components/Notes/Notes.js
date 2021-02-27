import React from 'react';
import Note from './Note/Note';

const Notes = () => {
  return (
      <div className='notes'>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
        <Note title={'Título'} content={'Contenido'} date={'21 Feb'}/>
      </div>
    )
};

export default Notes;
