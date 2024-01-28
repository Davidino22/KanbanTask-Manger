import React from 'react'

export default function AddTaskPopUp(props) {
  const { handleclickPopUpAddTask } = props
  return (
    <div className='w-42 h-42 bg-red-500'>
      <h1>AddTaskPopUp</h1>
      <button className='' onClick={() => handleclickPopUpAddTask()}>Create Task</button>
      <button className='' onClick={() => handleclickPopUpAddTask()}>Close</button>
    </div>
  )
}
