import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'
import paulo from '../../assets/Keenan.jpg'

export default function Navbar() {
    const location = useLocation();
  return (
      <div className="header-content">
          <h2 className='navTitle'>{location.pathname.substring(1).replace('/','>')}</h2>
          <header>
              <Link to="me">
              <div className="image-text">
                  <span className="image">
                      <img src={paulo} alt="logo" />
                  </span>

                  <div className="text header-text">
                        <span className="name"><b>Keenan</b></span>
                        <span className="position">Student</span>

                  </div>
              </div>
              </Link>
          </header>
      </div>
  )
}
