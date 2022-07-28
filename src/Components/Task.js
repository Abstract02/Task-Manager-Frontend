import React from 'react'
import './Task.css'

function Task() {
  return (
    <>
    <div className='Task'>
        <div className='title'>
            Create Blend File
        </div>
        <div className='description'>
        In the File Browser, navigate to the external source blend-file and select the data-block you want to reuse. Blend-files can also be linked/appended by dragging and dropping blend-files into the Blender window.
        </div>
    </div>
    </>
  )
}

export default Task