import React from 'react'
import './style.css'
import calendar from '../../assets/calendar.png'

export default function TotalClasses() {
  return (
    <div class="total-class"> 
        <h3>Total Classes Remain</h3>
        <div className="totalInfo">
            <div className="totalNum">
                <p className='break'><span className='emphasys'>2</span>Today</p>
                <p className='break'><span className='emphasys'>5</span> This week</p>
                <p className='break'><span className='emphasys'>16</span>This month</p>
                <p className='break'><span className='emphasys'>189</span>This year</p>
            </div>
            <div className="calendar">
                <img src={calendar} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}
