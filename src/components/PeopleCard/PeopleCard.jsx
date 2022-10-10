import React from 'react'
import './index.css'


export default function PeopleCard(props) {
  return (
      <div className="profile-card">
          <div >
              <img src={props.photo} alt="" className="photo" />
          </div>
          <div className="info">
              <div className="name">{props.name}</div>
              <div className="class">{props.role}</div>
              <div className="bio"> <i>"{props.phrase}"</i>
              </div>
              <div className="info-bullet">
                  <i className='bx bx-time'></i>
                  {props.course}
                  <br />
                  <i className='bx bxs-map'></i>
                  Since {props.year} on Etec Albert Einstein
              </div>
          </div>
          <div className="social-media">
              <button id="medium" className="social-media-button">
                  <i className='bx bxl-medium'></i>
                  Medium
              </button>
              <button id="github" className="social-media-button">
                  <i className='bx bxl-github'></i>
                  Github
              </button>
              <button id="youtube" className="social-media-button">
                  <i className='bx bxl-youtube'></i>
                  Youtube
              </button>
              <button id="tiktok" className="social-media-button">
                  <i className='bx bxl-tiktok'></i>
                  Tiktok
              </button>
          </div>
      </div>
  )
}
