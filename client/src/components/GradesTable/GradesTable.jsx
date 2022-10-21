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
          <select name="" id="" className='ml-2 px-2 py-1 rounded-full bg-white border border-slate-300'>
            <option className='font-sans' value="3">1°</option>
            <option className='font-sans' value="3">2°</option>
            <option className='font-sans' value="3">3°</option>
          </select>
        </div>
      </div>
      <table className='table-auto text-left'>
        <tr>
          <th className='text-sm font-medium text-gray-900 '>Curriculum Component</th>
          <th className='text-sm font-medium text-gray-900 '>1°B</th>
          <th className='text-sm font-medium text-gray-900 '>2°B</th>
          <th className='text-sm font-medium text-gray-900 '>3°B</th>
          <th className='text-sm font-medium text-gray-900 '>4°B</th>
          <th className='text-sm font-medium text-gray-900 '>Final</th>
          <th className='text-sm font-medium text-gray-900 '>Classes</th>
          <th className='text-sm font-medium text-gray-900 '>Absences</th>
          <th className='text-sm font-medium text-gray-900 '>Freq</th>
          <th className='text-sm font-medium text-gray-900 '>Situation</th>
        </tr>
        {lines.map((i,index)=>{
          return (
            <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer' key={index}>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>Web Programming</td>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>R</td>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>B</td>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>B</td>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>B</td>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>--</td>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>78</td>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>8</td>
              <td className='text-sm text-gray-900 font-bold py-4 whitespace-nowrap'>84,79%</td>
              <td className='text-sm text-green-500 font-bold py-4 whitespace-nowrap text-center'>⬤</td>
            </tr>
          )
        })}
        
        
      </table>
    </div>
  )
}
