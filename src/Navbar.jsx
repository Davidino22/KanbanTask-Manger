// Navbar componentn where you can add task by button
import React from 'react';
import { useState } from 'react';
import AddTaskPopUp from './AddTaskPopUp';
import axios from 'axios';


export default function Navbar(props) {
  const { activeBoard, handleclickPopUpAddTask, tasks, fetchTasks } = props
  const [isOpen, setIsOpen] = useState(false)




  async function deleteBoard() {
    let filteredTasks = tasks.filter((task) => task.board === activeBoard)
    console.log(filteredTasks)


    for (let task of filteredTasks) {
      try {
        const response = await axios.delete(`https://backend-kanban-davidino.onrender.com/tasks/${task.id}`)

        console.log(response)

      }
      catch (error) {
        console.log(error)
      }

      fetchTasks()
    }
  }









  return (
    <div className='bg-[#2b2c37] flex flex-row text-[#eaebeb] h-20 p-4  justify-between border-b-2 border-[#515258] '>
      <h1 className='text-4xl text-white'>{activeBoard}</h1>
      <div className='flex items-center gap-8'>
        <button className='bg-[#635ec5] text-white text-xl flex items-center justify-center  rounded-full p-4' onClick={() => handleclickPopUpAddTask()}>+ Add New Task</button>
        <button onClick={() => setIsOpen(!isOpen)}><svg width="5" height="20" xmlns="http://www.w3.org/2000/svg"><g fill="#828FA3" fill-rule="evenodd"><circle cx="2.308" cy="2.308" r="2.308" /><circle cx="2.308" cy="10" r="2.308" /><circle cx="2.308" cy="17.692" r="2.308" /></g></svg>
          {isOpen ? <div className='h-44 w-52 justify-items-center grid  bg-blue-200 fixed right-0.5 transition-all duration-500 ease-in-out'>
            <button onClick={deleteBoard} className='rounded bg-red-200 border border-2 border-blue-200 '>Delete Board</button>
          </div> : null}
        </button>
      </div>

    </div >
  )
}
