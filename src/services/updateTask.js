import localforage from 'localforage';

function updateTask(id, check){
    localforage.getItem(id)
    .then((task) => {
        task.check = check;
        console.log(task);
        localforage.setItem(id, task)
        .then(() => console.log('task updated successfully'))
        .catch((err) => console.error('Could not update the task', err));
    })
}

export default updateTask;