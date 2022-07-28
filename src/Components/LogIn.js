import React from 'react'
import './LogIn.css'

function LogIn() {
  return (
    <>
      <div className='LogIn'>
        <h1>To Continue</h1>
        <p>We need email and password</p>
        <div className='credintial'>
          <div className='input_div'>
            <input className='input_email' placeholder='Email' type="text" />
            <input className='input_password' placeholder='Password' type="text" />
          </div>
          <button>Log In</button>
          <div className='rememberButton'>
            <input type='checkbox' />
            <span>remeber me</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default LogIn