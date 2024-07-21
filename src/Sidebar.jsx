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

    <div className={`h-screen ${lightMode ? 'bg-white' : 'bg-[#2b2c37]'} w-1/5 text-white border-r border-[#515258] border-r-2 flex flex-col gap-8 px-5 py-5`}
    >
      <div>{lightMode ? <img src="public\assets\logo-dark.svg" /> : <img src="public\assets\logo-light.svg" />}</div>
      <h1 className='text-2xl text-[#808ca0]'>All boards </h1>

      {
        allboards.map((board) => (

          <div
            key={board}
            onClick={() => setActiveBoard(board)}
            className={`${board === activeBoard ? ' bg-[#635ec5]   rounded' : 'text-[#808ca0]'} p-2 flex flex-row gap-4`}
          >
            <img src="\assets\icon-board.svg" />
            {board}
          </div>
        ))
      }
      <button className='px-4 py-2 bg-[#635ec5] rounded-lg' onClick={() => handleclickPopUpBoard()}>
        Create new board
      </button>

      <div className='flex flex-col items-center'>
        <div className={`flex flex-row items-center justify-center h-14 gap-4 w-44 rounded-lg mt-52 ${lightMode ? 'bg-[#f4f7fd]' : 'bg-[#20212c]'} `}>
          <img src="public/assets/icon-dark-theme.svg" alt="Dark Theme Icon" />
          <label className='flex cursor-pointer select-none items-center'>
            <div className='relative'>
              <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
                className='sr-only'
              />
              <div
                className={`box block h-8 w-14 rounded-full ${isChecked ? 'bg-green-300' : 'bg-blue-500'}`}
              ></div>
              <div
                className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition-transform ${isChecked ? 'translate-x-6' : ''}`}
              ></div>
            </div>
          </label>
          <img src="/assets/icon-light-theme.svg" alt="Light Theme Icon" />
        </div>
      </div>
    </div>


  );
}
