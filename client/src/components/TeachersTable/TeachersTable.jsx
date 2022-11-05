import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../Context/AuthContext";

export default function TeachersTable() {
      const { role } = useContext(AuthContext);
  return (
    <div className="card p-5 mb-7">
      <div className="flex justify-left">
        <div className="w-full">
          <div className="input-group gap-1 items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control rounded-full flex-auto min-w-0 block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="table-auto text-left">
                <thead className="bg-white border-b">
                  {role ? (
                    role === "student" ? (
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Teacher
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                      </tr>
                    ) : role === "teacher" ? null : role === "coordinator" ? (
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          RA
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Teacher
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Avarage Score
                        </th>
                      </tr>
                    ) : null
                  ) : null}
                </thead>
                <tbody>
                  {role ? (
                    role === "student" ? (
                      <>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                        </tr>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            <Link to="/dashboard/teacher">John Wick</Link>
                          </td>
                        </tr>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            Wild
                          </td>
                        </tr>
                      </>
                    ) : role === "teacher" ? null : role === "coordinator" ? (
                      <>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            99999
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            otto@etec.sp.gov.br
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            MB
                          </td>
                        </tr>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            99999
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            <Link to="/dashboard/teacher">John Wick</Link>
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            johnwick@etec.sp.gov.br
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            B
                          </td>
                        </tr>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            99999
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            Sergio
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            sergio@etec.sp.gov.br
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            MB
                          </td>
                        </tr>
                      </>
                    ) : null
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
