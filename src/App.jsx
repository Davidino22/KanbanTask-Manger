import React, { useState, useEffect } from 'react';


import axios from 'axios';

import Sidebar from './Sidebar';
import MainBoard from './MainBoard';
import Navbar from './Navbar';

function App() {

  const [tasks, setTasks] = useState([]);
  const [allboards, setAllBoards] = useState([]);
  const [activeBoard, setActiveBoard] = useState('')



  const fetchTasks = async () => {
    console.log('radi')
    try {
      const response = await axios.get('https://kanban-backend-server.onrender.com/tasks');
      console.log(response, 'Blok')
      const data = response.data;
      setTasks(data)
      const boards = data.map((task) => task.board);
      const boardsFiltered = [...new Set(boards)];
      setAllBoards(boardsFiltered);
      setActiveBoard(boardsFiltered[0]);
      console.log(boardsFiltered[0])
    } catch (error) {
      console.error(error);

    }

  };


  useEffect(() => {
    fetchTasks()
  }, [])















  const filteredTasks = tasks.filter((task) => task.board === activeBoard)



  return (
    <>
      <div className='h-screen flex  '>
        <Sidebar allboards={allboards} activeBoard={activeBoard} />
        <div className='flex flex-col border-red-500 border-2 w-4/5'>
          <Navbar activeBoard={activeBoard} />
          <MainBoard tasks={filteredTasks} />
        </div>
      </div>
    </>
  );
};

export default App;
