import React from 'react'

export default function TodayClasses() {
    const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 121]
  return (
      <div className='col-span-3 p-5 card'>
          <h4 className='font-medium leading-tight text-xl mt-0 mb-2'>Today Classes</h4>

          <table className='min-w-full mt-4 table-auto text-left'>
              <tr>
                  <th className='text-sm font-medium text-gray-900 pl-6 py-4' >Time</th>
                  <th className='text-sm font-medium text-gray-900 pl-6 py-4' >Class</th>
                  <th className='text-sm font-medium text-gray-900 pl-6 py-4' >Teacher</th>
              </tr>
              {lines.map(i => {
                  return (
                      <tr className='bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer'>
                          <td className='text-sm text-gray-900 font-bold pl-6 py-4'>07:00</td>
                          <td className='text-sm text-gray-900 font-bold pl-6 py-4'>Web Programming</td>
                          <td className='text-sm text-gray-900 font-bold pl-6 py-4'>Peter Parker</td>
                          
                      </tr>
                  )
              })}


          </table>
    </div>
  )
}
