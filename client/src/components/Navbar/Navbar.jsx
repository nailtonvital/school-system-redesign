import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import paulo from '../../assets/Keenan.jpg'

export default function Navbar() {
    const location = useLocation();
  return (
      <div className="flex justify-between pt-6 mb-4">
          <h2 className='font-bold leading-tight text-3xl mt-0 mb-2 text-ellipsis w-52 capitalize'>{location.pathname.substring(1).length > 9 ? location.pathname.substring(11).replace('-',' ') : location.pathname.substring(1)}</h2>
      </div>
  )
}
