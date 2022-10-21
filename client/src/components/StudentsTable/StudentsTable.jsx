import React from 'react'
import { Link } from 'react-router-dom'

export default function StudentsTable() {
  return (
        <div className='card p-5 mb-7'>
          <div className="flex justify-left">
              <div className="w-full">
                  <div className="input-group flex gap-1 items-stretch w-full mb-4">
                      <input type="search" className="form-control flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Insert the name or the RM" aria-label="Search" aria-describedby="button-addon2" />
                        <button className="btn px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center" type="button" id="button-addon2">
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                            </svg>
                        </button>
                  </div>
              </div>
          </div>
          <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
                      <div className="overflow-hidden">
                          <table className="table-auto text-left overflow-scroll">
                              <thead className="bg-white border-b">
                                  <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">RM</th>
                                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                          Student Name
                                      </th>
                                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Class</th>
                                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Actions</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                          99999
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            Emilly Heloise Valentina Castro
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            3ºDS
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            <button className='bg-red-600 p-1 rounded'>
                                                <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path><path d="m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"></path></svg>
                                            </button>
                                        </td>

                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            99999
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            <Link to='/dashboard/student'>
                                                Isaac Geraldo Almada
                                            </Link>
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            2ºELETRO
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            <button className='bg-red-600 p-1 rounded'>
                                                <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path><path d="m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"></path></svg>
                                            </button>
                                        </td>

                                  </tr>
                                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                          99999
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            Davi Luís Mendes
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            1ºBIO
                                        </td>
                                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                                            <button className='bg-red-600 p-1 rounded'>
                                                <svg className='fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path><path d="m21.707 7.293-5-5A.996.996 0 0 0 16 2H8a.996.996 0 0 0-.707.293l-5 5A.996.996 0 0 0 2 8v8c0 .266.105.52.293.707l5 5A.996.996 0 0 0 8 22h8c.266 0 .52-.105.707-.293l5-5A.996.996 0 0 0 22 16V8a.996.996 0 0 0-.293-.707zM20 15.586 15.586 20H8.414L4 15.586V8.414L8.414 4h7.172L20 8.414v7.172z"></path></svg>
                                            </button>
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
