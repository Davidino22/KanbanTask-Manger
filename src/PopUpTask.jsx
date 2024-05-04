import React, { useState } from 'react';

export default function PopUpTask(props) {
  const { selectedTask, setShowChangeStatusPopUp } = props;
  const [newStatus, setNewStatus] = useState(selectedTask.status); // mora mozda u main board

  // set the status of the value
  const handleChangeStatus = (e) => {
    setNewStatus(e.target.value);
  };


  // Close the pop-up mogu i da ga ubacim na onclick
  setShowChangeStatusPopUp(false);




  async function ChangeTaskStatus() {
    console.log('radi')
    try {
      const response = await axios.put(`https://kanban-backend-server.onrender.com/${selectedTask.id}`, {
        status: newStatus


      })
      //cals the task function
      fetchTasks();


    }
    catch (error) {
      console.log(error)
    }
  }







  return (
    <div className='w-64 h-40 bg-green-400'>
      <div>
        <p>ID: {selectedTask.id}</p>
        <p>Title: {selectedTask.title}</p>
        <p>Description: {selectedTask.description}</p>
        <label htmlFor="status">Select Status:</label>
        <select id="status" value={newStatus} onChange={handleChangeStatus}>
          <option value="todo">To Do</option>
          <option value="doing">Doing</option>
          <option value="done">Done</option>
        </select>
        <button >Change</button> mozda mora strana da se refresuje onclick da se refreshuje strana
      </div>
    </div>
  );
}
