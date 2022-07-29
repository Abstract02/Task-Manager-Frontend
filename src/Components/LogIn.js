import React,{useState} from 'react'
import './LogIn.css'
import { app } from '../firebase';
import { getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LogIn() {
let navigate = useNavigate();
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const Login=()=>{
    const authentication = getAuth();
    signInWithEmailAndPassword(authentication,email,password)
    .then((response)=>{
      sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      navigate('/dashboard')
    })
    .catch((error)=>{
      console.log(error)
      if(error.code === 'auth/wrong-password'){
        toast("Oops🤭 Wrong Password!! try again")
      }
      if(error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found'){
        toast("😵Invalid email-id")
      }
      if(error.code === 'auth/too-many-requests')
      {
        toast("Access temporarily disabled🙅🙅 due to many failed login attempts! Please Reset Your Password")
      }
    })
  }
  return (
    <>
      <div className='LogIn'>
        <h1>To Continue</h1>
        <p>We need email and password</p>
        <div className='credintial'>
          <div className='input_div'>
            <input className='input_email' placeholder='Email' type="text" onChange={(e)=>setemail(e.target.value)} />
            <input className='input_password' placeholder='Password' type="text" onChange={(e)=>setpassword(e.target.value)} />
          </div>
          <button onClick={Login} >Log In</button>
          <ToastContainer />
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