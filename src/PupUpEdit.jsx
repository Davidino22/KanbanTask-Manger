import React from 'react'
import { useState } from 'react'
import axios from 'axios'


export default function (props) {

  const { task, fetchTasks, setSelectedTask, setEditing, lightMode, editing } = props

  const [title, setTitle] = useState(task.title)
  const [description, setDescription] = useState(task.description)
  const [status, setStatus] = useState(task.status)




  async function editTask() {
    console.log('radi')
    try {
      const response = await axios.put(`https://backend-kanban-davidino.onrender.com/tasks/${task.id}`,
        {
          title: title,
          status: status,
          description: description,
          board: task.board



        })
      fetchTasks()
      setEditing(false)
      setSelectedTask(null)






    }
    catch (error) {
      console.log(error)
    }


  }







  return (
    <div className={`popup w-96 ${lightMode ? 'text-black bg-white' : 'text-white bg-[#2b2c37]'
      } fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex-col flex p-8 rounded-lg`}>
      <h1 className='popup text-2xl pb-4'>Edit Task</h1>
      <div className='popup pb-4'>
        <p className='popup'>Title</p>
        <input onChange={((e) => setTitle(e.target.value))} value={title} className={`popup ${lightMode ? 'bg-white text-black' : 'bg-[#2b2c37] text-white'} w-full p-2 border border-1 border-[#7c889b]`} autoFocus />
      </div>

      <div className=' popup'>
        <p className='popup'>Description</p>


        <textarea onChange={(e) => setDescription(e.target.value)} value={description} className={`popup ${lightMode ? 'bg-white text-black' : 'bg-[#2b2c37] text-white '} p-2 w-full  border border-1 border-[#7c889b]`} ></textarea>
      </div>

      <div className=' popup'>

        <label className='popup' htmlFor="status" >Status</label>
        <select id="status" className={` popup ${lightMode ? 'bg-white text-black' : 'bg-[#2b2c37] text-white '}  border border-1 p-2 w-full border-[#7c889b] mb-6`} value={status} onChange={(e) => setStatus(e.target.value)}  >
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
      </div>
      <button className=" popup rounded bg-[#635fc7] text-white p-2 rounded rounded-lg" onClick={editTask}>Save Changes</button>

      {/* offclick for exit button  */}
    </div >

  )
}
