import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import NewBoard from './NewColumn';



export default function MainBoard(props) {

  const { tasks } = props;


  return (

    <div className='flex-1 bg-[#21212d] text-white'>
      <div className='flex justify-between text-2xl'>
        <div>
          <p>To Do</p>
          {tasks.map((task) => (
            task.status === 'todo' ? (
              <div key={task.id} className='w-64 m-4 border-2 border-red-500'>
                <p className=''>{task.title}</p>
                <p className=''>{task.description}</p>
              </div>) : null))}
        </div>

        <div>
          <p>Doing</p>
          {tasks.map((task) => (
            task.status === 'doing' ? (
              <div key={task.id} className='w-64 m-4 border-2 border-yellow-500'>
                <p className=''>{task.title}</p>
                <p className=''>{task.description}</p>
              </div>) : null))}
        </div>
        <div>
          <p>Done</p>
          {tasks.map((task) => (
            task.status === 'done' ? (
              <div key={task.id} className='w-64 m-4 border-2 border-green-500'>
                <p className=''>{task.title}</p>
                <p className=''>{task.description}</p>
              </div>) : null))}

        </div>
      </div>

    </div>

  );
}
