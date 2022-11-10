import React from 'react'
import './style.css'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function PresenceCard() {
    const data = {
        labels: {display:false},
        datasets: [
            {
                label: 'Attendance for Week 1',
                data: [15, 89],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['#E25959',
                    '#CFD8DC'
                    
                    ],
                pointBackgroundColor: 'rgba(255,206,86,0.2)',
            }

        ]
    }


    const options = {
     
    
    }

  return (
    <div className="h-full flex-col justify-between card">
      <div className="flex justify-between p-5 items-center">
        <div className="">
          <h4 className="font-bold">Presença</h4>
          <p className="text-xs -mt-1 text-slate-500">Péssima</p>
        </div>
        <p className="text-red-600">15.6%</p>
      </div>

      <Doughnut data={data} className="pb-4" />
      <div className="flex px-5 pb-5 md:pb-0 gap-5 mx-auto sm:text-lg md:text-md lg:text-xs">
        <div className="flex-col ">
          <h5>15</h5>
          <p>Presenças</p>
        </div>
        <div className="flex-col ">
          <h5>89</h5>
          <p>Faltas</p>
        </div>
        <div className="flex-col ">
          <h5>104</h5>
          <p>Total de aulas</p>
        </div>
      </div>
    </div>
  );
}
