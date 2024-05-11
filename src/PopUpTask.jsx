import React, { useState } from 'react';


import axios from 'axios'

export default function PopUpTask(props) {
  const { selectedTask, fetchTasks, setSelectedTask } = props;
  const [newStatus, setNewStatus] = useState(selectedTask.status); // mora mozda u main board




  async function editTask() {

  }

  // function to delete a task
  async function deleteTask() {
    console.log('radi')
    try {
      const response = await axios.delete(`https://backend-kanban-davidino.onrender.com/tasks/${selectedTask.id}`, {



      })
      fetchTasks()
      setSelectedTask(null)




    }
    catch (error) {
      console.log(error)
    }


  }





  // set the status of the value
  const handleChangeStatus = (e) => {
    setNewStatus(e.target.value);
  };






  // function to change the task status
  async function changeTaskStatus() {
    console.log('radi')
    try {
      const response = await axios.patch(`https://backend-kanban-davidino.onrender.com/tasks/${selectedTask.id}`, {
        status: newStatus


      })
      fetchTasks()
      setSelectedTask(null)




    }
    catch (error) {
      console.log(error)
    }
  }







  return (
    <div className='w-1/3 h-52 text-white bg-green-400 fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>
      <div classname="flex flex-col items-center">
        <p>ID: {selectedTask.id}</p>
        <p>Title: {selectedTask.title}</p>
        <p>Description: {selectedTask.description}</p>
        <label htmlFor="status">Select Status:</label>
        <select id="status" value={newStatus} onChange={handleChangeStatus}>
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button onClick={changeTaskStatus}>Change</button>
        <button onClick={editTask}>Edit</button>
        <button onClick={deleteTask}>Delete</button>
        <button onClick={() => setSelectedTask(null)}>close</button>
      </div>
    </div>
  );
}
