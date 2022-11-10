import React from "react";
import GradesTable from "../GradesTable/GradesTable";

export default function PresenceData() {
  const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 121];
  return (
    <div className="flex-col">
      <div className="grid grid-cols-4 gap-2 mb-7">
        <div className="card w-full p-3 col-span-2">
          <h3 className="font-bold">Presença</h3>
          <div className="my-3">
            <div className="flex justify-between">
              <h2 className="text-red-600 font-bold text-xl">Ruim</h2>
              <p className="text-slate-500">30%</p>
            </div>
            <div className="w-full bg-gray-200 h-1">
              <div className="bg-red-600 h-1 w-5/12"></div>
            </div>
          </div>

          <div className="flex gap-5 mt-7 ">
            <div className="flex-col ">
              <h2 className="text-2xl -mt-2">87</h2>
              <h4 className="text-sm whitespace-nowrap text-red-600">Faltas</h4>
            </div>
            <div className="flex-col">
              <h2 className="text-2xl -mt-2">200</h2>
              <h4 className="text-sm whitespace-nowrap text-blue-600">
                Faltas Permitidas
              </h4>
            </div>
            <div className="flex-col">
              <h2 className="text-2xl -mt-2">240</h2>
              <h4 className="text-sm whitespace-nowrap">Total de aulas</h4>
            </div>
          </div>
        </div>
        <div className="card w-full p-3 col-span-2">
          <h3 className="font-bold">Presença</h3>
          <div className="my-3">
            <div className="flex justify-between">
              <h2 className="text-red-600 font-bold text-xl">Você</h2>
              <p className="text-slate-500">30%</p>
            </div>
            <div className="w-full bg-gray-200 h-1 mb-2">
              <div className="bg-red-600 h-1 w-4/12"></div>
            </div>
            <div className="w-full bg-gray-200 h-1">
              <div className="bg-green-600 h-1 w-5/12"></div>
            </div>
            <div className="flex justify-between mt-1">
              <h2 className="text-green-600 font-bold text-xl">Média escolar</h2>
              <p className="text-slate-500">45%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-auto col-span-4 ">
        <table className="table-auto text-left card">
          <tr>
            <th className="text-sm font-medium pl-3 text-gray-900 capitalize">
              Componente curricular
            </th>
            <th className="text-sm font-medium text-gray-900 ">Aulas</th>
            <th className="text-sm font-medium text-gray-900 ">Faltas</th>
            <th className="text-sm font-medium text-gray-900 ">Frequencia</th>
            <th className="text-sm font-medium text-gray-900 ">Situação</th>
          </tr>
          {lines.map((i, index) => {
            return (
              <tr
                className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100 cursor-pointer"
                key={index}
              >
                <td className="text-sm text-gray-900 font-bold py-4 whitespace-nowrap">
                  Web Programming
                </td>

                <td className="text-sm text-gray-900 font-bold py-4 whitespace-nowrap">
                  87
                </td>
                <td className="text-sm text-gray-900 font-bold py-4 whitespace-nowrap">
                  78
                </td>

                <td className="text-sm text-gray-900 font-bold py-4 whitespace-nowrap">
                  84,79%
                </td>
                <td className="text-sm text-green-500 font-bold py-4 whitespace-nowrap text-left">
                  ⬤
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
