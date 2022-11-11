import React from "react";
import GradesTable from "../GradesTable/GradesTable";

export default function PresenceData() {
  const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 121];
  return (
    <div className="flex-col">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-7">
        <div className="card w-fit lg:w-full p-3 col-span-2">
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
        <div className="card w-screen -w-20 lg:w-full p-3 col-span-2">
          <h3 className="font-bold">Presença</h3>
          <div className="my-3">
            <div className="flex gap-5 justify-between">
              <h2 className="text-red-600 font-bold text-xl">Você</h2>
              <p className="text-slate-500">30%</p>
            </div>
            <div className="w-full bg-gray-200 h-1 mb-2">
              <div className="bg-red-600 h-1 w-4/12"></div>
            </div>
            <div className="w-full bg-gray-200 h-1">
              <div className="bg-green-600 h-1 w-5/12"></div>
            </div>
            <div className="flex gap-5 justify-between mt-1">
              <h2 className="text-green-600 font-bold text-xl">
                Média escolar
              </h2>
              <p className="text-slate-500">45%</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-x-auto">
              <table class="min-w-full">
                <thead class="border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Heading
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Heading
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Heading
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Heading
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Heading
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Heading
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Heading
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      Heading
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      1
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      2
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                  </tr>
                  <tr class="bg-white border-b">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      3
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      Cell
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
