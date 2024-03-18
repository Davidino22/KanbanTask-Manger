import React from 'react'
import { useState } from 'react'
import axios from 'axios'

export default function PopUpCreateNewBoard(props) {
  const { handleclickPopUpBoard, fetchTasks } = props
  const [newBoard, setNewBoard] = useState('')



  async function addBoard() {
    try {
      const response = await axios.post('https://kanban-backend-server.onrender.com/tasks', {
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
    <div className='w-96 h-42 bg-red-500'>
      <div>
        <h1>Add New board</h1>
      </div>
      <div>
        <button className='' onClick={() => handleclickPopUpBoard()}>Close</button>
        <div>
          <label>new Board</label>
          <input onChange={(e) => setNewBoard(e.target.value)}></input>
          <button className='' onClick={addBoard}>Create Board</button>
        </div>
      </div>


    </div>
  )
}
