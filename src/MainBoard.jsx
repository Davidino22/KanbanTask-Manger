import React from 'react'

import { useState, useEffect } from 'react';
import PupUpEdit from './PupUpEdit';

import PopUpTask from './PopUpTask';



export default function MainBoard(props) {

  const { tasks, fetchTasks, lightMode, selectedTask, setSelectedTask, editing, setEditing } = props;






  // Function to handle task click
  function handleTaskClick(task) {
    setSelectedTask(task);

  };



  // Function to handle edit button click
  function handleEditClick() {
    setEditing(true);
  }

  // Calculate counts based on tasks array
  const todoTasks = tasks.filter(task => task.status === 'todo');
  const doingTasks = tasks.filter(task => task.status === 'doing');
  const doneTasks = tasks.filter(task => task.status === 'done');





  return (
    <>
      {selectedTask && (
        <PopUpTask
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          fetchTasks={fetchTasks}
          handleEditClick={handleEditClick}
          lightMode={lightMode}

        />
      )}
      {selectedTask && editing && (
        <PupUpEdit
          selectedTask={selectedTask}
          setSelectedTask={setSelectedTask}
          fetchTasks={fetchTasks}
          setEditing={setEditing}
          task={selectedTask}
          lightMode={lightMode}
          editing={editing}


        />
      )}
      <div className={`flex-1 ${lightMode ? 'bg-[#f4f7fd]' : 'bg-[#21212d]'} `}>
        <div className='flex justify-around text-xl mt-12'>
          <div className=' flex flex-col items-center '>
            <p className='text-[#808ca0]' >To Do {todoTasks.length} </p>
            {tasks.map((task) => (
              task.status === 'todo' ? (
                <div key={task.id} className={`w-64 m-4 py-6 px-4 rounded-lg ${lightMode ? 'bg-white' : 'bg-[#2b2c37]'} ${lightMode ? 'text-black' : 'text-white'} `} onClick={() => handleTaskClick(task)}>

                  <p className=''>{task.title}</p>
                  <p className=''>{task.description}</p>
                </div>
              ) : null))}
          </div>
          <div className=' flex flex-col items-center'>
            <p className={`${lightMode ? 'text-black' : 'text-[#808ca0]'}`}>Doing{doingTasks.length}</p>
            {tasks.map((task) => (
              task.status === 'doing' ? (
                <div key={task.id} className={`w-64 m-4 py-6 px-4 rounded-lg ${lightMode ? 'bg-white' : 'bg-[#2b2c37]'} ${lightMode ? 'text-black' : 'text-white'} `} onClick={() => handleTaskClick(task)}>
                  <p className=''>{task.title}</p>
                  <p className=''>{task.description}</p>
                </div>
              ) : null))}
          </div>
          <div className=' flex flex-col items-center'>
            <p className='text-[#808ca0]' >Done{doneTasks.length}</p>
            {tasks.map((task) => (
              task.status === 'done' ? (
                <div key={task.id} className={`w-64 m-4 py-6 px-4 rounded-lg ${lightMode ? 'bg-white' : 'bg-[#2b2c37]'} ${lightMode ? 'text-black' : 'text-white'} `} onClick={() => handleTaskClick(task)}>
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