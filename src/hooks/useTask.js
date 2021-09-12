import localForage from 'localforage';
import { useState } from "react";

const useTask = () => {

  const [task, setTask] = useState();
  const [allTasks, setAllTasks] = useState([]);

  const addTask = async (e, title, test) => {
    e.preventDefault();

    try {

    } catch(err){

    }


  }

  const removeTask = () => {

  }

  const updateItem = () => {

  }

  const getItems = () => {

  }


  return {
    task,
    allTasks, 
    addTask,
    removeTask, 
    updateItem, 
    getItems
  }

}


export default useTask;