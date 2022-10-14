import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import './style.css'
import paulo from '../../assets/Keenan.jpg'

export default function Navbar() {
    const location = useLocation();
  return (
      <div className="flex justify-between pt-3 mb-4">
          <h2 className='font-bold leading-tight text-3xl mt-0 mb-2 navTitle'>{location.pathname.substring(1).replace('/','>')}</h2>
          <header>
              <Link to="me">
                <div className="flex text-center ">
                    <img src={paulo} alt="logo" className="rounded-lg w-10" />
                      <h5 className='mt-2 ml-2 font-bold'>Keenan</h5>
                </div>
              </Link>
          </header>
      </div>
  )
}
