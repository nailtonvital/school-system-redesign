import React from 'react'
import './style.css'
import 'chart.js/auto';
import { Doughnut } from 'react-chartjs-2';

export default function GradeCard() {
    const data = {
        labels: { display: false },
        datasets: [
            {
                label: 'Attendance for Week 1',
                data: [3, 5, 5, 1],
                borderColor: ['rgba(255,206,86,0.2)'],
                backgroundColor: ['#E25959',
                    '#E5E866',
                    '#4285F4',
                    '#04C35C'

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
            <h4 className="font-bold">Performance</h4>
            <p className="text-xs -mt-1 text-slate-500">
              Suas Notas
            </p>
          </div>
          <p className="text-green-600 lg:text-xl">Bom</p>
        </div>

        <Doughnut data={data} className="p-5" />
        <div className="flex px-5 pb-5 md:pb-0 gap-5 mx-auto">
          <p className="legendItem">
            <span className="indicator" style={{ color: "#04C35C" }}>
              ⬤
            </span>
            <br />
            MB
          </p>
          <p className="legendItem">
            <span className="indicator" style={{ color: "#4285F4" }}>
              ⬤
            </span>
            <br />B
          </p>
          <p className="legendItem">
            <span className="indicator" style={{ color: "#E5E866" }}>
              ⬤
            </span>
            <br />R
          </p>
          <p className="legendItem">
            <span className="indicator" style={{ color: "#E25959" }}>
              ⬤
            </span>
            <br />I
          </p>
        </div>
      </div>
    );
}
