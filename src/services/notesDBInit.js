import localForage from 'localforage';

function indexedDBNotesInit() {
  localForage.config({
    driver: localForage.INDEXEDDB,
    name: 'eNotes',
    version: 1,
    storeName: 'notes',
  });
}

export default indexedDBNotesInit;
