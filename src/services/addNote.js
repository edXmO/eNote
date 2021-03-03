import localForage from 'localforage';

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

export default addNote;