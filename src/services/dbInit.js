import localForage from 'localforage';

function dbInit() {
  localForage.config({
    driver: localForage.INDEXEDDB,
    name: 'eNote',
    version: 1,
    storeName: 'notes',
  });
}

export default dbInit;
