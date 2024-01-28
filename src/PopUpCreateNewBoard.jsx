import React from 'react'

export default function PopUpCreateNewBoard(props) {
  const { handleclickPopUpBoard } = props
  return (
    <div className='w-42 h-42 bg-red-500'>
      <h1>AddBoard</h1>
      <button className='' onClick={() => handleclickPopUpBoard()}>Create Board</button>
      <button className='' onClick={() => handleclickPopUpBoard()}>Close</button>
    </div>
  )
}
