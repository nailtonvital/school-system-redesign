import React from 'react'
import './style.css'

export default function EmailCard() {
  return (
    <div className='p-5 w-12/12 card'>
      <h3 className='font-medium leading-tight text-xl mt-2 mb-2'>Institucional Email</h3>
          <h4 className='font-bold leading-tight text-base mt-0'>Email:</h4>
      <p><a href="#">paulo.souza192@etec.sp.gov.br</a><span id='copyButton'><i class='bx bx-copy'></i></span></p>
          <h4 className='font-bold leading-tight text-base mt-0'>Benefits:</h4>
          <ul>
              <li>Office 365</li>
              <li>Github Student Pack</li>
              <li>Onedrive</li>
          </ul>
    </div>
  )
}
