import React from 'react'
import App from './App'
import Dashboard from './Components/Dashboard'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useNavigate
  } from "react-router-dom";

function Main() {
  return (
    <div>
        <Router>
    <Routes>
      <Route 
        path='/'
          element={<App />}
           />
      <Route 
      path='/dashboard'
      element={<Dashboard />}
       />
    </Routes>
    </Router>
    </div>
  )
}

export default Main

