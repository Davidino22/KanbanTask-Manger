import React from 'react'
import { useState } from 'react';

export default function Sidebar(props) {
  const { allboards, activeBoard, setActiveBoard, handleclickPopUpBoard } = props;



  return (
    <div className='h-screen bg-gray-800 w-1/5 text-white border-r border-gray-300 flex flex-col gap-8 px-5 py-5 pointer-events-auto'>
      <h1 className='text-xl'>All boards ({allboards.length})</h1>
      {allboards.map((board) => (
        <p
          key={board}
          onClick={() => setActiveBoard(board)}
          className={board === activeBoard ? 'bg-purple-600 p-2 rounded' : 'text-white'}

        >
          {board}
        </p>
      ))}
      <button className='px-4 py-2 bg-purple-600 rounded-lg' onClick={() => handleclickPopUpBoard()}>
        Create new board
      </button>
    </div>
  );
}
