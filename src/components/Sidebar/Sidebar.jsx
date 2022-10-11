import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

function Sidebar() {

    function handleDark(){
       if(document.body.classList.contains('dark')){
           document.body.classList.remove('dark')
       } else{
           document.body.classList.add('dark')
       }
    }

  return (
          <nav className="sidebar">
              <div className="menu-bar">
                  <div className="menu">
                      <ul className="menu-links">
                          <li className="nav-link">
                            <Link to="/dashboard">
                                <i className='bx bx-category icon'></i>
                                <span className="text nav-text">
                                    Dashboard
                                </span>
                            </Link>
                          </li>
                          <li className="nav-link">
                            <Link to="classes">
                                <i className='bx bx-window icon'></i>
                                <span className="text nav-text">
                                    Classes
                                </span>
                            </Link>
                          </li>
                          <li className="nav-link">
                            <Link to='teacher'>
                                <i class='bx bx-group icon'></i>
                                <span className="text nav-text">
                                    Teachers
                                </span>
                            </Link>
                          </li>

                      </ul>
                  </div>
                  <div className="bottom-content">
                      <hr/>
                          <li className="nav-link">
                              <a href="#">
                                  <i className='bx bx-flag icon'></i>
                                  <span className="text nav-text">
                                      Report
                                  </span>
                              </a>
                          </li>
                          <li className="nav-link">
                              <a href="#">
                                  <i className='bx bx-cube icon'></i>
                                  <span className="text nav-text">
                                      Preferences
                                  </span>
                              </a>
                          </li>

                          <li className="mode">
                              <div className="moon-sun">
                                  <i className="bx bx-moon icon moon"></i>
                                  <i className="bx bx-sun icon sun"></i>
                              </div>
                              <span className="mode-text text">Dark Mode</span>

                              <div className="toggle-switch">
                                  <span className="switch" onClick={handleDark}></span>
                              </div>
                          </li>
                  </div>
              </div>
          </nav>

  )
}

export default Sidebar