import React from 'react'
import TotalClasses from '../../components/TotalClasses/TotalClasses';
import './style.css'
import photo from '../../assets/Keenan.jpg'
import ScoreCard from '../../components/ScoreCard/ScoreCard'
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import EmailCard from '../../components/EmailCard/EmailCard';
import GradesTable from '../../components/GradesTable/GradesTable';
import Recommendations from '../../components/Recommendations/Recommendations';


export default function profile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <div className="col-span-2">
        <PeopleCard
          photo={photo}
          name="Keenan Lane"
          role="Student"
          course=" Computer Science"
          year="2020"
          social={false}
        />
        <EmailCard benefits={false} className="mt-3" />
        <div className="card p-4">
          <h3 className="font-bold">Pendencias</h3>
          <ul>
            <li>Documentos: Histórico Escolar</li>
          </ul>
        </div>
        <div className="card p-4">
          <h3 className="font-bold mb-3 mt-2">Atestado</h3>
          <ul className="flex-col gap-2">
            <li className="flex justify-between">
              <p>Psiquiatra</p>
              <p className="text-gray-800">30/10/2002</p>
            </li>
            <li className="flex justify-between">
              <p>Neurologista</p>
              <p className="text-gray-800">22/05/2022</p>
            </li>
          </ul>
        </div>
      </div>
      <div id="div" className="col-span-4">
        <div className="flex-col md:flex lg:flex">
          <div className="card w-full p-3">
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

            <div className="flex gap-5 mt-7">
              <div className="flex-col ">
                <h2 className="text-2xl -mt-2">87</h2>
                <h4 className="text-sm whitespace-nowrap text-red-600">
                  Faltas
                </h4>
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
          <div className="card w-full p-3">
            <h3 className="font-bold">Presença</h3>
            <div className="my-3">
              <div className="flex justify-between">
                <h2 className="text-red-600 font-bold text-xl">Aluno</h2>
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
        <GradesTable />
      </div>
      <Recommendations obs={true} />
    </div>
  );
}
