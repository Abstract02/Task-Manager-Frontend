import React,{useState,useEffect} from 'react';
import './App.css';
import LogIn from './Components/LogIn';
import SignIn from './Components/SignIn';
import Todo from './resources/todo.jpg'
import {useNavigate} from 'react-router-dom'

function App() {

   let navigate  = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
        navigate('/dashboard')
    }

    if (!authToken) {
        navigate('/')
    }
}, [])
  const [toggle, settoggle] = useState(true)
  const Login=()=>{
    settoggle(true)

  }
  const Signin=()=>{
    settoggle(false)
  }

  return (
    <div className="App">
      <div className='signInUi'>
      <div className='signInUi_image'>
        <img src={Todo} />
      </div>
      <div className='signInBox'>
        <div className='selectSignInType'>
          <button className={toggle?"highlight":null} onClick={Login}>Log In</button>
          <button className={toggle?null:"highlight"} onClick={Signin}>Sign Up</button>
        </div>
        <div className='signInComponent'>
          {toggle?<LogIn />:<SignIn />}
        </div >
        
      </div>
    </div>
   </div>
  );
}

export default App;
