import React from 'react'
import { useState } from 'react';

export default function Sidebar(props) {
  const { allboards, activeBoard } = props;


  // function handleBoardclick() {
  //   setActiveBoard(board)

  // }

  return (
    <div className='h-screen bg-[#2c2c38] w-1/5 text-white'>
      <h1>Platforms</h1>
      {allboards.map((board) => <p key={board} className={board === activeBoard ? 'text-red-500' : null}>{board}</p>)}
    </div>
  )
}
