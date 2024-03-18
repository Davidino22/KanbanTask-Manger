import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewBoard from './NewColumn';
import PopUpTask from './PopUpTask';



export default function MainBoard(props) {

  const { tasks, } = props;
  const [todoCount, setTodoCount] = useState(0);
  const [doingCount, setDoingCount] = useState(0);
  const [doneCount, setDoneCount] = useState(0);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showChangeStatusPopUp, setShowChangeStatusPopUp] = useState(false);


  // Function to handle task click
  function handleTaskClick(task) {
    setSelectedTask(task);
    setShowChangeStatusPopUp(true);
  };



  // Update task counts whenever tasks change
  useEffect(() => {
    // Calculate counts based on tasks array
    const todoTasks = tasks.filter(task => task.status === 'todo');
    const doingTasks = tasks.filter(task => task.status === 'doing');
    const doneTasks = tasks.filter(task => task.status === 'done');

    // Update state variables
    setTodoCount(todoTasks.length);
    setDoingCount(doingTasks.length);
    setDoneCount(doneTasks.length);
  }, [tasks]);


  return (
    <>
      {showChangeStatusPopUp && <PopUpTask selectedTask={selectedTask} setSelectedTask={setSelectedTask} showChangeStatusPopUp={showChangeStatusPopUp} setShowChangeStatusPopUp={setShowChangeStatusPopUp} />}
      <div className='flex-1 bg-[#21212d] text-white'>
        <div className='flex justify-between text-2xl'>
          <div>
            <p>To Do {todoCount}</p>
            {tasks.map((task) => (
              task.status === 'todo' ? (
                <div key={task.id} className='w-64 m-4 py-6 px-4 rounded-lg bg-[#2b2c37]' onClick={() => handleTaskClick(task)}>
                  <p className=''>{task.title}</p>
                  <p className=''>{task.description}</p>
                </div>
              ) : null))}
          </div>
          <div>
            <p>Doing{doingCount}</p>
            {tasks.map((task) => (
              task.status === 'doing' ? (
                <div key={task.id} className='w-64 m-4 py-6 px-4 rounded-lg bg-[#2b2c37]' onClick={() => handleTaskClick(task)}>
                  <p className=''>{task.title}</p>
                  <p className=''>{task.description}</p>
                </div>
              ) : null))}
          </div>
          <div>
            <p>Done{doneCount}</p>
            {tasks.map((task) => (
              task.status === 'done' ? (
                <div key={task.id} className='w-64 m-4 py-6 px-4 rounded-lg bg-[#2b2c37]' onClick={() => handleTaskClick(task)}>
                  <p className=''>{task.title}</p>
                  <p className=''>{task.description}</p>
                </div>
              ) : null))}
          </div>
        </div>
      </div>
    </>
  );
}