import React from 'react'
import './style.css'

export default function GradesTable(props) {
  const lines = [1,2,3,4,5,6,7,8,9,12,121]
  return (
    <div className='mt-5 card'>
      <div className="cardHeader">
        <h3>Grades</h3>
        <div className='yearSelect'>
          <h5>Year</h5>
          <select name="" id="">
            <option value="3">3°</option>
          </select>
        </div>
      </div>
      <table>
        <tr>
          <th>Curriculum Component</th>
          <th>1°B</th>
          <th>2°B</th>
          <th>3°B</th>
          <th>4°B</th>
          <th>Final</th>
          <th>Classes</th>
          <th>Absences</th>
          <th>Freq</th>
          <th>Situation</th>
        </tr>
        {lines.map(i=>{
          return (
            <tr>
              <td>Web Programming</td>
              <td>R</td>
              <td>B</td>
              <td>B</td>
              <td>B</td>
              <td>--</td>
              <td>78</td>
              <td>8</td>
              <td>84,79%</td>
              <td></td>
            </tr>
          )
        })}
        
        
      </table>
    </div>
  )
}
