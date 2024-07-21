import React, { useState, } from 'react';


import axios from 'axios'

export default function PopUpTask(props) {
  const { selectedTask, fetchTasks, setSelectedTask, handleEditClick, lightMode } = props;
  const [newStatus, setNewStatus] = useState(selectedTask.status);
  const [isOpen, setIsOpen] = useState(false)







  function editTask() {
    console.log('Edit task clicked')
    handleEditClick()
  }

  // function to delete a task
  async function deleteTask() {
    console.log('radi')
    try {
      const response = await axios.delete(`https://backend-kanban-davidino.onrender.com/tasks/${selectedTask.id}`)
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
    <div className={`popup w-1/3 ${lightMode ? 'bg-white text-black' : 'bg-[#2b2c37] text-white'}    fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg rounded-lg`}>
      <div className="flex flex-col p-8 popup">
        <div className='flex flex-row justify-between popup'>
          <p className='text-2xl popup'>{selectedTask.title}</p>
          <div className='popup cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <img className='popup ' src="/assets/icon-vertical-ellipsis.svg" />
            {isOpen ? (
              <div className={`popup h-24 justify-center w-32 ${lightMode ? 'text-black bg-white' : 'text-white bg-[#2b2c37]'}  fixed -translate-y-1/2 -translate-x-1/2 rounded-lg flex flex-col bottom-0.2`}>
                <button className='popup' onClick={editTask}>Edit</button>
                <button className='text-red-500 popup' onClick={deleteTask}>Delete</button>
              </div>
            ) : null}
          </div>
        </div>
        <p className='text-[#7c889b] mt-4 popup'>{selectedTask.description}</p>
        <label className='mt-6 popup' htmlFor="status">Current Status</label>
        <select id="status" className='popup w-full text-[#7c889b] border border-1 border-[#7c889b] bg-transparent p-2' value={newStatus} onChange={handleChangeStatus}>
          <option value="todo" className='popup text-[#7c889b] bg-[#2b2c37]'>To Do</option>
          <option value="doing" className=' popup text-[#7c889b] bg-[#2b2c37]'>Doing</option>
          <option value="done" className=' popup text-[#7c889b] bg-[#2b2c37]'>Done</option>
        </select>
        <div className='flex justify-center popup'>
          <button className={`bg-[#635ec5] w-40 rounded mt-4 p-2 popup  text-white `} onClick={changeTaskStatus}>Change</button>
        </div>
      </div>
    </div>
  );
}
