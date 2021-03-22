import localForage from 'localforage';

function getItems(setItems, setTasks) {
  var notesData = [];
  var tasksData = [];
  localForage
    .iterate((key, value) => {
      const { type } = key;
      // resulting key/value pair for this callback
      // will be executed for every item in the db
      if (type === 'note') {
        const { title, text, id } = key;
        let note = {
          id: id,
          timeStamp: value,
          title,
          text,
        };
        notesData = [...notesData, note];
      }

      if (type === 'task') {
        const { check, content, id } = key;
        let task = {
          id: id,
          timeStamp: value,
          check,
          content,
        };
        tasksData = [...tasksData, task];
      }
    })
    .then(() => setItems(notesData))
    .then(() => setTasks(tasksData))
    .catch((err) => console.error('could not set the items', err));
}

export default getItems;
