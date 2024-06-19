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
      const response = await axios.post('https://backend-kanban-davidino.onrender.com/tasks', {
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
    <div className='w-96 h-3/5  bg-[#2b2c37] fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-white flex flex-col rounded-lg'>
      <div className='flex justify-around mt-8'>
        <h1 className='text-2xl'>Add New Task</h1>


        <button className='' onClick={() => handleclickPopUpAddTask()}>Close</button>
      </div>
      <div className='flex flex-col p-4 mt-4'>
        <label className='p-2'>Title</label>
        <input className='text-black' onChange={(e) => setTitle(e.target.value)}></input>
        <label className='p-2'>Descripton</label>
        <textarea className='text-black' onChange={(e) => setDescription(e.target.value)}></textarea>
        <label className='p-2' >Status</label>
        <select className='text-black' onChange={(e) => setStatus(e.target.value)}>
          <option value="todo">ToDo</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <div className='grid justify-items-center mt-12 ' >
          <button className='p-6 bg-[#635fc7] rounded-lg text-2xl' onClick={addTask}>Create Task</button>
        </div>

      </div>
    </div>



  )
}
