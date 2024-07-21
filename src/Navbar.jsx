// Navbar componentn where you can add task by button
import React from 'react';
import { useState } from 'react';
import AddTaskPopUp from './AddTaskPopUp';
import axios from 'axios';


export default function Navbar(props) {
  const { activeBoard, handleclickPopUpAddTask, tasks, fetchTasks, lightMode, isOpen, setIsOpen } = props




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
    <div className={`${lightMode ? 'bg-white' : 'bg-[#2b2c37]'} flex flex-row text-[#eaebeb] h-20 p-4  justify-between border-b-2 border-[#515258] `}>
      <h1 className={`text-4xl ${lightMode ? 'text-black' : 'text-white'}`} >{activeBoard}</h1>
      <div className='flex items-center gap-8 '>
        <button className='bg-[#635ec5] text-white text-xl flex items-center justify-center  rounded-full p-4' onClick={() => handleclickPopUpAddTask()}>+ Add New Task</button>
        <div onClick={() => setIsOpen(!isOpen)}><img src="\assets\icon-vertical-ellipsis.svg" className='cursor-pointer' />
          {isOpen ? <div className={`popup ${lightMode ? 'bg-white' : 'bg-[#2b2c37]'}  h-24 w-32 justify-items-center grid  bg-[#2b2c37] fixed right-0.5 transition-all duration-500 ease-in-out`}>
            <button onClick={deleteBoard} className='popup text-red-500 '>Delete Board</button>
          </div> : null}
        </div>
      </div>

    </div >
  )
}
