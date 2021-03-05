import localForage from 'localforage';

function updateNote(e, id, title, text) {
    e.preventDefault();
    let note = localForage.getItem(id)
    .then((note) => {
        console.log(note);
        {note.title = title,
        note.text = text}
    });
    localForage.setItem(id, note);
}

export default updateNote;