import React, { useState } from 'react';


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
    <div className={`popup w-1/3 h-52 ${lightMode ? 'bg-white' : 'bg-[#2b2c37]'} ${lightMode ? 'text-black' : 'text-white'}  fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded-lg `}>
      <div className="popup flex flex-col p-4 ">
        <div className='popup flex flex-row justify-between  '>
          <p className='popup text-2xl'> {selectedTask.title}</p>
          <button onClick={() => setIsOpen(!isOpen)} className='popup'> <img src="public\assets\icon-vertical-ellipsis.svg" className='popup' />
            {isOpen ? <div className={`popup h-24 justify-center w-32 ${lightMode ? 'text-black' : 'text-white'} ${lightMode ? 'bg-white' : 'bg-[#2b2c37]'} fixed s -translate-y-1/2 -translate-x-1/2 rounded-lg flex flex-col bottom-0.2 `}>
              <button onClick={editTask} className='popup'>Edit</button>
              <button className='popup text-red-500' onClick={deleteTask}>Delete</button>
            </div> : null}



          </button>

        </div>
        <p className='popup text-[#7c889b] mt-4'> {selectedTask.description}</p>
        <label className='popup mt-6' htmlFor="status">Curent Status</label>
        <select id="status" className='popup w-8/12 text-[#7c889b] border-[#7c889b] bg-transparent' value={newStatus} onChange={handleChangeStatus}>
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button className='bg-[#635ec5] popup ' onClick={changeTaskStatus}>Change</button>
        <div >
          <button onClick={() => setSelectedTask(null)} className='popup'>close</button>
        </div>
      </div>
    </div>
  );
}
