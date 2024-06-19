import React from 'react'
import { useState } from 'react';




export default function Sidebar(props) {
  const { allboards, activeBoard, setActiveBoard, handleclickPopUpBoard, lightMode, toggle } = props;

  const [isChecked, setIsChecked] = useState(false)

  function handleCheckboxChange() {
    setIsChecked(!isChecked)
    toggle()
  }




  return (

    <div className={`h-screen ${lightMode ? 'bg-white' : 'bg-[#2b2c37]'} w-1/5 text-white border-r border-[#515258] flex flex-col gap-8 px-5 py-5`}
    >
      <img src="public\assets\logo-light.svg" />
      <h1 className='text-2xl text-[#808ca0]'>All boards </h1>

      {
        allboards.map((board) => (

          <div
            key={board}
            onClick={() => setActiveBoard(board)}
            className={`${board === activeBoard ? ' bg-[#635ec5]  p-2 rounded' : 'text-[#808ca0]'} flex flex-row gap-4`}
          >
            <img src="public\assets\icon-board.svg" />
            {board}
          </div>
        ))
      }
      <button className='px-4 py-2 bg-[#635ec5] rounded-lg' onClick={() => handleclickPopUpBoard()}>
        Create new board
      </button>


      {/* button for is checked and toggle button  */}
      <label className='flex cursor-pointer select-none items-center'>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-8 w-14 rounded-full ${isChecked ? 'bg-green-300' : 'bg-blue-500'
              }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${isChecked ? 'translate-x-full' : ''
              }`}
          ></div>
        </div>
      </label>

    </div >

  );
}
