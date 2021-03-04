import localForage from 'localforage';

function addNote(e, title, text) {
  e.preventDefault();
  let timeStamp = Date.now().toString();
  let note = {
    type: 'note',
    title: title,
    text: text,
  };
  localForage
    .setItem(timeStamp, note)
    .then(() => console.log('item set'))
    .catch((err) => console.error(err, 'could not set the item'));
}

export default addNote;
