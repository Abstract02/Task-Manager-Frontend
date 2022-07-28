import React from 'react'
import './SignIn.css'

function SignIn() {
  return (
    <>
      <div className='LogIn'>
        <h1>To Continue</h1>
        <p>We need name, email and password</p>
        <div className='credintial'>
          <div className='input_div'>
          <input className='input_name' placeholder='name' type='text' />
            <input className='input_email' placeholder='Email' type="text" />
            <input className='input_password' placeholder='Password' type="text" />
          </div>
          <button>Sign In</button>
          <div className='rememberButton'>
            <input type='checkbox' />
            <span>remeber me</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignIn