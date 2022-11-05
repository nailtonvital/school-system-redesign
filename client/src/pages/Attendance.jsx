import React, {useState} from 'react'

export default function Attendance() {
    const [openTab, setOpenTab] = useState(1);

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Attendance not commited
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Attendance commited
              </a>
            </li>
          </ul>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <table className="table-auto text-left">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Classes
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Schedule
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          2ºELETRO
                        </td>
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          07:00
                        </td>
                        <td className="text-sm text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          <button className="bg-blue-600 hover:bg-blue-500 text-white rounded px-4 py-2">
                            Make Attendance
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          2ºCV
                        </td>
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          09:45
                        </td>
                        <td className="text-sm text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          <button className="bg-blue-600 text-white rounded px-4 py-2">
                            Realizar chamada
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          2ºDS
                        </td>
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          10:35
                        </td>
                        <td className="text-sm text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          <button className="bg-blue-600 text-white rounded px-4 py-2">
                            Realizar chamada
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <table className="table-auto text-left">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Classes
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Schedule
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          2ºELETRO
                        </td>
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          07:00
                        </td>
                        <td className="text-sm text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          <button className="bg-red-600 text-white rounded px-4 py-2">
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          2ºCV
                        </td>
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          09:45
                        </td>
                        <td className="text-sm text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          <button className="bg-red-600 text-white rounded px-4 py-2">
                            Edit
                          </button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          2ºDS
                        </td>
                        <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                          10:35
                        </td>
                        <td className="text-sm text-center text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                          <button className="bg-red-600 text-white rounded px-4 py-2">
                            Edit
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
      </div>
    </>
  );
}
