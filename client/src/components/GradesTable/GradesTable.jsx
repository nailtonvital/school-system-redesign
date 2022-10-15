import React from 'react'
import './style.css'

export default function GradesTable(props) {
  const lines = [1,2,3,4,5,6,7,8,9,12,121]
  return (
    <div className='mt-5 card p-5 mb-7 overflow-x-auto'>
      <div className="flex justify-between mb-4">
        <h3 className='font-medium leading-tight text-xl mt-0'>Grades</h3>
        <div className='yearSelect'>
          <h5>Year</h5>
          <select name="" id="">
            <option value="3">3°</option>
          </select>
        </div>
      </div>
      <table className='table-auto text-left '>
        <tr>
          <th className='text-sm font-medium text-gray-900  text-left'>Curriculum Component</th>
          <th className='text-sm font-medium text-gray-900  text-left'>1°B</th>
          <th className='text-sm font-medium text-gray-900  text-left'>2°B</th>
          <th className='text-sm font-medium text-gray-900  text-left'>3°B</th>
          <th className='text-sm font-medium text-gray-900  text-left'>4°B</th>
          <th className='text-sm font-medium text-gray-900  text-left'>Final</th>
          <th className='text-sm font-medium text-gray-900  text-left'>Classes</th>
          <th className='text-sm font-medium text-gray-900  text-left'>Absences</th>
          <th className='text-sm font-medium text-gray-900  text-left'>Freq</th>
          <th className='text-sm font-medium text-gray-900  text-left'>Situation</th>
        </tr>
        {lines.map((i,index)=>{
          return (
            <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer' key={index}>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>Web Programming</td>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>R</td>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>B</td>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>B</td>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>B</td>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>--</td>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>78</td>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>8</td>
              <td className='text-sm text-gray-900 font-bold  whitespace-nowrap'>84,79%</td>
              <td className='text-sm text-green-500 font-bold  whitespace-nowrap text-center'>⬤</td>
            </tr>
          )
        })}
        
        
      </table>
    </div>
  )
}
