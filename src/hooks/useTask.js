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

  const addTask = async (e, text, check) => {
    e.preventDefault();

      try {
        let timeStamp = Date.now().toString();
        let task = {
          type: 'task',
          id: timeStamp,
          check,
          content: text,
        };
        await localForage
          .setItem(timeStamp, task)
          .then(() => console.log('task set successfully'))
      } catch (err){ 
        console.log('Error adding a new task', err);
      }
  }

  const removeTask = async (id) => {
      try {
        await localForage
          .removeItem(id)
          .then(() => console.log('item with id: ', id, 'removed succesfully'))       
      } catch (err) {
        console.log('Error removing task', err)
      } 
  }

  const updateTask = async (id, completed) => {
      
    try {
      await localForage.getItem(id, async (err, task) => {
          let newTask = {
            ...task, 
            check: completed
          };

          try {
            await localForage.setItem(id, newTask);
          } catch(err) {
            console.log('There was an error setting the updated item, err');
          }
        })
    } catch (err) {
      console.log('Thre was an error trying to get the updated task', err);
    }
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