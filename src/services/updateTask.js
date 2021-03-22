import localforage from 'localforage';

function updateTask(id, completed) {
  localforage.getItem(id).then((task) => {
    let newTask = {
      ...task,
      check: completed,
    };
    localforage
      .setItem(id, newTask)
      .then(() => {
        console.log('task updated successfully');
      })
      .catch((err) => console.error('Could not update the task', err));
  });
}

export default updateTask;
