import React from 'react'
import './Task.css'

function InputTask() {
  return (
    <>
    <div className='Input_Task'>
        <div className='title'>
            <input placeholder='Give your task a title' />
        </div>
        <div className='description'>
            <input className='description_input' placeholder='Description' />
        </div>
    </div>
    </>
  )
}

export default InputTask