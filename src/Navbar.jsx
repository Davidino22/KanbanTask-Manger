// Navbar componentn where you can add task by button
import React from 'react';
import { useState } from 'react';
import AddTaskPopUp from './AddTaskPopUp';


export default function Navbar(props) {
  const { activeBoard, handleclickPopUpAddTask } = props






  return (
    <div className='bg-gray-800 flex flex-row text-[#eaebeb] h-20 p-4  justify-between  '>
      <h1 className='text-4xl text-white'>{activeBoard}</h1>
      <button className='bg-[#635ec5] text-white text-xl flex items-center justify-center  rounded-full p-4' onClick={() => handleclickPopUpAddTask()}>+ Add New Task</button>
    </div>
  )
}
