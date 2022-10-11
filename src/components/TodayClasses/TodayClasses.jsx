import React from 'react'
import './style.css'

export default function TodayClasses() {
    const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 121]
  return (
    <div className='todayClasses dashboardCard card'>
        <h4>Today Classes</h4>

          <table id='classes'>
              <tr>
                  <th id='time'>Time</th>
                  <th id='class'>Class</th>
                  <th id='teacher'>Teacher</th>
              </tr>
              {lines.map(i => {
                  return (
                      <tr>
                          <td>07:00</td>
                          <td>Physics</td>
                          <td>Peter Parker</td>
                          
                      </tr>
                  )
              })}


          </table>
    </div>
  )
}
