import localForage from 'localforage';

function addTask(e, text, check){
    e.preventDefault();
    let timeStamp = Date.now().toString();
    let task = {
        type: 'task',
        id: timeStamp,
        check,
        content: text
    }
    localForage
    .setItem(timeStamp, task)
    .then(() => console.log('task set successfully'))
    .catch((err) => console.error(err));
}

export default addTask;