// Navbar componentn where you can add task by button
import React from 'react';
import { useState } from 'react';


export default function Navbar(props) {
  const { activeBoard } = props




  return (
    <div className='bg-[#2c2c38] flex flex-row text-[#eaebeb] h-16 p-4  justify-between  '>
      <h1 className='text-2xl text-white'>{activeBoard}</h1>
      <button className='bg-[#635ec5] text-white   rounded-full' onClick={() => Onclick}>+ Add New Task</button>
    </div>
  )
}
