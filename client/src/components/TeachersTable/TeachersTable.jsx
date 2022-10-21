import React from 'react'
import { Link } from 'react-router-dom'

export default function TeachersTable() {
  return (
      <div className='card p-5 mb-7'>
          <div className="flex justify-left">
              <div className="w-full">
                  <div className="input-group flex gap-1 items-stretch w-full mb-4">
                      <input type="search" className="form-control rounded-full flex-auto min-w-0 block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                      <select name="" id="" className='px-2 py-1 rounded-full text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"'>
                        <option className='font-sans' value="All">All</option>
                        <option className='font-sans' value="your">Your Teachers</option>
                      </select>
                      
                  </div>
              </div>
          </div>
          <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                          <table className="table-auto text-left">
                              <thead className="bg-white border-b">
                                  <tr>
                                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Teacher</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                          Otto
                                      </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                          <Link to='/dashboard/teacher'>
                                              John Wick
                                          </Link>
                                      </td>
                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">

                                      <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                          Wild
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}
