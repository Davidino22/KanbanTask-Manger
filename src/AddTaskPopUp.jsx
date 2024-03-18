import React from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function AddTaskPopUp(props) {
  const { handleclickPopUpAddTask, activeBoard, fetchTasks } = props


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState('todo')


  async function addTask() {
    try {
      const response = await axios.post('https://kanban-backend-server.onrender.com/tasks', {
        title: title,
        description: description,
        board: activeBoard,
        status: status

      })
      fetchTasks();

      // Close the popup after adding the task
      handleclickPopUpAddTask();

      // Clear input fields after adding the task
      setTitle('');
      setDescription('');
      setStatus('todo');


    }
    catch (error) {
      console.log(error)
    }
  }



  return (
    <div className='w-96 h-42 bg-red-500'>
      <div>
        <h1>Add New Task</h1>
      </div>
      <div>
        <button className='' onClick={() => handleclickPopUpAddTask()}>Close</button>
        <div>
          <label>Title</label>
          <input className='' onChange={(e) => setTitle(e.target.value)}></input>
          <label>Descripton</label>
          <input className='' onChange={(e) => setDescription(e.target.value)}></input>
          <label >Status</label>
          <select className='' onChange={(e) => setStatus(e.target.value)}>
            <option value="todo">ToDo</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button className='' onClick={addTask}>Create Task</button>
        </div>
      </div>


    </div>
  )
}
