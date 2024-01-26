import React from 'react'
import { useState } from 'react';

export default function Sidebar(props) {
  const { allboards, activeBoard, setActiveBoard } = props;




  return (
    <div className='h-screen bg-[#2c2c38] w-1/5 text-white'>
      <h1>Platforms</h1>
      {allboards.map((board) => <p onClick={() => setActiveBoard(board)} key={board} className={board === activeBoard ? 'text-red-500' : null}>{board}</p>)}
    </div>
  )
}
