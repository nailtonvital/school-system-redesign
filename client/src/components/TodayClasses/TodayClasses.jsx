import React from 'react'
import './style.css'

export default function TodayClasses() {
    const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 121]
  return (
      <div className='col-span-3 p-5 card'>
          <h4 className='font-medium leading-tight text-xl mt-0 mb-2'>Today Classes</h4>

          <table className='min-w-full mt-4  table-auto'>
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
