import localForage from 'localforage';

function removeNote(id){
    localForage.removeItem(id)
    .then(() => console.log('item removed'))
    .catch(err => console.log(err))
}

export default removeNote;