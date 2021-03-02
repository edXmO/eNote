import addNote from './addNote';

const openIndexedDB = () => {

    document.querySelector('.modal-form').addEventListener('submit', handleAddNote);

    onDatabaseInit();

    let openRequest, db;

    function handleAddNote(e) {
        // e.target[2/3].value, are the respective values 
        // of the note title and text
        e.preventDefault();
        console.log('adding-note');
        addNote(db, e.target[2].value, e.target[3].value);
    }

    // let db;
    function onDatabaseInit(){
        openRequest = indexedDB.open('eNote', 2);

        openRequest.onupgradeneeded = (e) => {
            // triggers if client had no db
            db = openRequest.result;
            if(!db.objectStoreNames.contains('notes')){ // if there's no notes store
                db.createObjectStore('notes', {keyPath: 'timeStamp'});
            }
            if(!db.objectStoreNames.contains('tasks')){
                db.createObjectStore('tasks', {keyPath: 'timeStamp'});
            }
        }

        openRequest.onerror = () => {
            console.error('Error', openRequest.error);
        }
        
        openRequest.onsuccess = () => {
            db = openRequest.result;
            db.onversionchange = () => {
                db.close();
                alert("Database outdated");
            }
            // db ready
        }
    }
};

export default openIndexedDB;
