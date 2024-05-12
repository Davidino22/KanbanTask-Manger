import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function PopUpCreateNewBoard(props) {
  const { handleclickPopUpBoard, fetchTasks } = props
  const [newBoard, setNewBoard] = useState('')



  async function addBoard() {
    try {
      const response = await axios.post('https://backend-kanban-davidino.onrender.com/tasks', {
        board: newBoard


      })
      fetchTasks();
      //set new board
      setNewBoard('')
      //set the handleclickfunction
      handleclickPopUpBoard()

    }
    catch (error) {
      console.log(error)
    }
  }




  return (
    <div className='w-1/3 h-52 bg-[#2b2c37]  fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 rounded flext flex-col items-center justify-center text-white'>
      <div>
        <h1>Add New board</h1>
      </div>
      <div>
        <button className='' onClick={() => handleclickPopUpBoard()}>Close</button>
        <div>
          <div>
            <label>new Board</label>

            <input onChange={(e) => setNewBoard(e.target.value)} className="text-black"></input>
          </div>
          <button className='' onClick={addBoard}>Create Board</button>
        </div>
      </div>


    </div>
  )
}
