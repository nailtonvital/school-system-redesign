import React from 'react'
import './style.css'

export default function EmailCard() {
  return (
    <div className='emailCard card '>
          <h3>Institucional Email</h3>
          <h4>Email:</h4>
      <p><a href="#">paulo.souza192@etec.sp.gov.br</a><span id='copyButton'><i class='bx bx-copy'></i></span></p>
          <h4>Benefits:</h4>
          <ul>
              <li>Office 365</li>
              <li>Github Student Pack</li>
              <li>Onedrive</li>
          </ul>
    </div>
  )
}
