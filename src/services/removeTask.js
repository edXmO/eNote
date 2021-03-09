import localForage from 'localforage';

function removeTask(id){
    localForage
    .removeItem(id)
    .then(() => console.log('item with id: ', id, 'removed succesfully'))
    .catch((err) => console.error('could not remove the selected task', err));
}

export default removeTask;