import localForage, { INDEXEDDB } from 'localforage';
import { useCallback, useEffect, useMemo, useState } from 'react';

const useNote = () => {

  const [allNotes, setAllNotes] = useState([]);

  const indexedDBNotesInit = () => {
    localForage.config({
      driver: localForage.INDEXEDDB,
      name: 'eNotes',
      version: 2,
      storeName: 'notes',
    });
  }

  const addNote = async (e, title, text) => {
    e.preventDefault();
    
    const timeStamp = Date.now().toString();
    const note = {
      type: 'note',
      id: timeStamp,
      title: title,
      text: text,
    };
    
    try {
      indexedDBNotesInit();
      await localForage.setItem(timeStamp, note); 

    } catch(err) {
      console.log('There was an error adding the note')
    }
  }

  const removeNote = async (id) => {
    
    try {
      indexedDBNotesInit();
      await localForage.removeItem(id)

      return true;
    } catch (err) {
      console.log(err);

      return false;
    }
  }

  const updateNote = async (e, id, title, text) => {
    e.preventDefault();

    try {
      indexedDBNotesInit();
      const note = await localForage.getItem(id);

      note.title = title;
      note.text = text;

      await localForage.setItem(id, note)
    } catch(err) {
      console.log('There was an error updating the note')
    }

  }

  const getItems = async () => {

    try {

      let notes = [];
      indexedDBNotesInit();

      await localForage.iterate((key, value) => {
        const { type } = key;
        if(type === 'note') {
          const { title, text, id } = key;
          const note = {
            id : id, 
            timeStamp: value,
            title: title,
            text: text
          }
          return note;
        }
      }, (err, res) => {
        notes = [...notes, res];
      });
      
      return notes;

    } catch (err) {
      console.log('There was an error retrieving the notes', err);
    }
  }

  useEffect(() => {
    const unsubscribe = async () => {
      const notes = await getItems();

      setAllNotes(notes);
    }

    return () => unsubscribe();
  }, []);

  return {
    allNotes,
    addNote,
    removeNote, 
    updateNote, 
    getItems
  }
}


export default useNote;