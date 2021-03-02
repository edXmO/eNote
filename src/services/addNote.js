function addNote(db, title, text) {
    let transaction = db.transaction('notes', 'readwrite');

    // get and object store to operate on
    let notes = transaction.objectStore('notes');

    let note = {
        title,
        text,
        timeStamp: Date.now()
    }

    // Perform a requests to the notes objectstore
    let request = notes.add(note);

    request.onsuccess = () => {
        console.log("note added to the store", request.result);
    }

    request.onerror = () => {
        console.error("error", request.error);
    }

    transaction.oncomplete = () => {
        console.log('transaction completed')
    }
}

export default addNote;