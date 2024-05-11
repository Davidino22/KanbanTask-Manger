import React from 'react'




export default function EditTask() {

  async function edit() {
    console.log('radi')
    try {
      const response = await axios.patch(`https://backend-kanban-davidino.onrender.com/tasks/${selectedTask.id}`, {





      })
      fetchTasks()
      setSelectedTask(null)




    }
    catch (error) {
      console.log(error)
    }
  }



  return (
    <div>
      <h1> Title </h1>
      <input></input>
      <h1>Description</h1>
      <form></form>
      <h1>status</h1>
      <select id="status" value={newStatus} >
        <option value="todo">To Do</option>
        <option value="doing">Doing</option>
        <option value="done">Done</option>
      </select>

      <button>eddit</button>
    </div>

  )
}
