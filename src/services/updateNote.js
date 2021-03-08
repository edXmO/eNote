import localForage from 'localforage';

function updateNote(e, id, title, text) {
    e.preventDefault();
    localForage.getItem(id)
    .then((note) => {
        note.title = title;
        note.text = text;
        localForage.setItem(id, note).then(() => {
            console.log('successfully updated');
        })
    });
}

export default updateNote;