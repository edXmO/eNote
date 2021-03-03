import localForage from 'localforage';

function getNotes(setItems){
    var notesData = [];
    localForage.iterate((key, value) => {
        // resulting key/value pair for this callback
        // will be executed for every item in the db
        const { type, title, text } = key;
        let note = {
            timeStamp: value,
            type,
            title,
            text
        } 
        notesData = [...notesData, note];
    }).then(() => setItems(notesData))
      .catch((err) => console.error('could not set the items', err));
}

export default getNotes;