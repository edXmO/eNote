import localForage from 'localforage';

function addNote(e, title, text, id) {
  e.preventDefault();
  let timeStamp = Date.now().toString();
  let note = {
    type: 'note',
    title: title,
    text: text,
    id: id
  };
  localForage
    .setItem(timeStamp, note)
    .then(() => console.log('item set'))
    .catch((err) => console.error(err, 'could not set the item'));
}

export default addNote;
