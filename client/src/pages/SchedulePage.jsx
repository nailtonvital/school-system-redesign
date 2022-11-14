import React, { useState } from "react";
import Calendar from "../components/Calendar";
import Schedule from '../components/Schedule'

export default function SchedulePage() {
    const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap w-screen">
        <div className="w-screen ">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row w-screen"
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
                Hoje
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
                href="#link1"
                role="tablist"
              >
                Semana
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                Calendário escolar
              </a>
            </li>
          </ul>
          <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Schedule />
                </div>
                <div
                  className={
                    openTab === 2 ? "block overflow-x-auto w-screen" : "hidden"
                  }
                  id="link2"
                >
                  <h2 className="font-bold mt-2 text-xl">Your Schedule</h2>
                  <div className=" ">
                    <table className="table-auto  mt-5 border ">
                      <thead>
                        <tr>
                          <th className="p-3 border-r">Segunda</th>
                          <th className="p-3 border-r">Terça</th>
                          <th className="p-3 border-r">Quarta</th>
                          <th className="p-3 border-r">Quinta</th>
                          <th className="p-3 border-r">Sexta</th>
                        </tr>
                      </thead>
                      <tbody className="font-normal capitalize">
                        <tr className="bg-white border-0 transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Math
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Design
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Laws
                          </td>
                        </tr>
                        <tr className="bg-white border-0 transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            sociology
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Math
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Day Trading
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            laws
                          </td>
                        </tr>
                        <tr className="bg-white border-0 transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            English
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            sociology
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            neurodesign
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Day Trading
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                        </tr>
                        <tr className="bg-white border-0 transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            English
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            neurodesign
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                        </tr>
                        <tr className="bg-white border-0 transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 break-words">
                            web <br /> programming
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Spanish
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Arduino
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Calculus
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                        </tr>
                        <tr className="bg-white border-0 transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 break-words">
                            web <br /> programming
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Spanish
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Arduino
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            Calculus
                          </td>
                          <td className="text-sm border-r text-gray-900 font-semibold px-6 py-4 whitespace-nowrap">
                            UI/UX
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div
                  className={openTab === 3 ? "block w-full pl-0 " : "hidden"}
                  id="link3"
                >
                  <Calendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
