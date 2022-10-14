import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Login() {
  return (
      <div className="login_area" id="login">
          <p className="heading">Welcome Back!</p>
          <h3 className="login_title">Login to your account</h3>
          <form action="">
              <span>Email:</span>
              <input type="text" />
              <span>Password:</span>
              <input type="password" />
              
              <button className="login_button"><Link to='/dashboard'>Login Now</Link></button>
              
          </form>
          <p>Don't have a account yet? Sign Up</p>
      </div>
  )
}

export default Login