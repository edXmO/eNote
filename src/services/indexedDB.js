import localForage from 'localforage';

const openNotesIndexedDB = () => {
    document.querySelector('.modal-form').addEventListener('submit', addNote);
    let notesData = [];

    dbInit();

    function dbInit() {
        localForage.config({
            driver: localForage.INDEXEDDB,
            name: 'eNote',
            version: 1,
            storeName: 'notes'
        });
        getNotes();
    }

    function addNote(e){
        let timeStamp = Date.now().toString();
        let note = {
            type: 'note',
            title: e.target[2].value,
            text: e.target[3].value
        }
        localForage.setItem(timeStamp, note)
        .then(() => console.log('item set'))
        .catch(err => console.error(err, 'could not set the item'))
    }

    function getNotes(){
        localForage.iterate((key, value) => {
            // resulting key/value pair for this callback
            //will be executed for every item in the db
            const { type, title, text } = key;
            let note = {
                timeStamp: value,
                type,
                title,
                text
            } 
            notesData = [...notesData, note];
        }).then(() => setItems(notesData));
    }
};

export default openNotesIndexedDB;
