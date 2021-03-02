function getNotes(db){
    let tx = db.transaction(['eNote'], 'readonly');
    let store = tx.objectStore('notes');

    // Query everything in the store;
    let range = IDBKeyRange.lowerBound(0);
    let cursorReq = store.openCursor(range);

    // cursorRequests for every entry on the object store
    let data = [];
    cursorReq.onsuccess = () => {
        var result = e.target.result;

        // If there is data add it to array
        if(result){
            data.push(result.value);
            result.continue();
        } else {
            console.log(data);
        }
    }
    console.log(data);
}

export default getNotes;