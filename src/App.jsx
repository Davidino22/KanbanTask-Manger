import React, { useState, useEffect, useRef } from 'react';


import axios from 'axios';

import Sidebar from './Sidebar';
import MainBoard from './MainBoard';
import Navbar from './Navbar';
import AddTaskPopUp from './AddTaskPopUp';
import PopUpCreateNewBoard from './PopUpCreateNewBoard';


function App() {

  const [tasks, setTasks] = useState([]); // state to get all tasks from the api
  const [allboards, setAllBoards] = useState([]); // state to get all boards from the tasls
  const [activeBoard, setActiveBoard] = useState('') // state to get the active board
  const [showPopUpTasks, setShowPopUpTasks] = useState(false) // state to show the Tasks which are open
  const [showPopUpBoard, setShowPopUpBoard] = useState(false) // state to show when a new board will be created
  const [selectedTask, setSelectedTask] = useState(null)// set useState for task
  const [showTaskPopup, setShowTaskPopup] = useState(false); // state for showing taskPopUp
  const [lightMode, setLightMode] = useState(false) //state for light Mode

  const refelement = useRef();



  useEffect(() => {
    const handler = (event) => {
      if (refelement.current && !refelement.current.contains(event.target)) {
        setSelectedTask(null);
        setShowPopUpBoard(false);
        setShowTaskPopup(false);
      }
    };

    document.addEventListener("click", handler);
    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);




  // Function to fetch tasks data from the server, set the tasks state, extract and set unique board names, set the active board state, and provide debug outputs for each step.

  const fetchTasks = async () => {
    console.log('radi')
    try {
      const response = await axios.get('https://backend-kanban-davidino.onrender.com/tasks');
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



  // function that handles the state if i want to add a task

  function handleclickPopUpAddTask() {
    setShowPopUpTasks(!showPopUpTasks)
  }
  // fucntion create new board and set state
  function handleclickPopUpBoard() {
    setShowPopUpBoard(!showPopUpBoard)
  }


  // create an Array to filter tasks which are in the activeBoard
  const filteredTasks = tasks.filter((task) => task.board === activeBoard)



  // create an Function to get the selctedt task
  function clickTask(task) {
    setSelectedTask(task)
    setShowTaskPopup(true);
  }



  // function to create the toggle mode

  function toggle() {
    setLightMode(!lightMode)
  }




  return (
    <>
      <div ref={refelement} >
        <div className='h-screen flex  '>
          <Sidebar allboards={allboards} activeBoard={activeBoard} setActiveBoard={setActiveBoard} handleclickPopUpBoard={handleclickPopUpBoard} toggle={toggle} lightMode={lightMode} />
          <div className='flex flex-col border-grey-200 border-2 w-4/5'>
            <Navbar activeBoard={activeBoard} handleclickPopUpAddTask={handleclickPopUpAddTask} tasks={tasks} fetchTasks={fetchTasks} lightMode={lightMode} />

            <MainBoard tasks={filteredTasks} clickTask={clickTask} fetchTasks={fetchTasks} lightMode={lightMode} />
          </div>
          {showPopUpTasks && <AddTaskPopUp handleclickPopUpAddTask={handleclickPopUpAddTask} activeBoard={activeBoard} fetchTasks={fetchTasks} />}
          {showPopUpBoard && <PopUpCreateNewBoard handleclickPopUpBoard={handleclickPopUpBoard} fetchTasks={fetchTasks} />}

        </div>
      </div>
    </>
  );
};

export default App;
