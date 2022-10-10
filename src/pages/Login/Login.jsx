import React, {useState} from 'react'
import Login from '../../components/Login/Login'
import Signup from '../../components/Login/Signup'
import logo from "../assets/logo.png"
import "./login.css"

function LoginPage() {
    const [ login, setLogin] = useState(true)

    function handleLogin(){
        setLogin(!login)
    }

  return (
    <div className="login_body">
        <div className="logo_area">
            <img src={logo} alt="logo"  />
        </div>
        { login ? <Login/> : <Signup/>}
          
    </div>
  )
}

export default LoginPage