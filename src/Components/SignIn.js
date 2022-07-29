import React, { useState,useEffect } from 'react'
import './SignIn.css'
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'


function SignIn() {
  let navigate = useNavigate();

  const [name, setname] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const Signin = () => {
   const authentication = getAuth();
   createUserWithEmailAndPassword(authentication,email,password)
   .then((response)=>{
    sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
    navigate('/dashboard')

   })
  }


  return (
    <>
      <div className='LogIn'>
        <h1>To Continue</h1>
        <p>We need name, email and password</p>
        <div className='credintial'>
          <div className='input_div'>
            <input className='input_name' placeholder='name' type='text' onChange={(e) => setname(e.target.value)} />
            <input className='input_email' placeholder='Email' type="email" onChange={(e) => setemail(e.target.value)} />
            <input className='input_password' placeholder='Password' type="text" onChange={(e) => setpassword(e.target.value)} />
          </div>
          <button onClick={Signin}>Sign In</button>
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