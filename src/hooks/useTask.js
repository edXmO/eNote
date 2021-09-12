import localForage from 'localforage';
import { useState } from "react";

const useTask = () => {

  const [task, setTask] = useState();
  const [allTasks, setAllTasks] = useState([]);

  const indexedDBNotesInit = () => {
    localForage.config({
      driver: localForage.INDEXEDDB,
      name: 'eNotes',
      version: 2,
      storeName: 'notes',
    });
  }

  const addTask = async (e, title, test) => {
    // function addTask(e, text, check) {
    //   e.preventDefault();
    //   let timeStamp = Date.now().toString();
    //   let task = {
    //     type: 'task',
    //     id: timeStamp,
    //     check,
    //     content: text,
    //   };
    //   localForage
    //     .setItem(timeStamp, task)
    //     .then(() => console.log('task set successfully'))
    //     .catch((err) => console.error(err));
    // }
    

  }

  const removeTask = async () => {
    // function removeTask(id) {
    //   localForage
    //     .removeItem(id)
    //     .then(() => console.log('item with id: ', id, 'removed succesfully'))
    //     .catch((err) => console.error('could not remove the selected task', err));
    // }
    
  }

  const updateTask = async () => {
    // function updateTask(id, completed) {
    //   localforage.getItem(id).then((task) => {
    //     let newTask = {
    //       ...task,
    //       check: completed,
    //     };
    //     localforage
    //       .setItem(id, newTask)
    //       .then(() => {
    //         console.log('task updated successfully');
    //       })
    //       .catch((err) => console.error('Could not update the task', err));
    //   });
    
  }

  const getTasks = async() => {
    try {

      let tasks = [];
      indexedDBNotesInit();

      await localForage.iterate((key, value) => {
        const { type } = key;
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
      }, (err, res) => {
        tasks = [...tasks, res];
      });
      
      setAllTasks(tasks);
      return tasks;

    } catch (err) {
      console.log('There was an error retrieving the notes', err);
    }
  }

  return {
    task,
    allTasks, 
    addTask,
    removeTask, 
    updateTask, 
    getTasks
  }

}


export default useTask;