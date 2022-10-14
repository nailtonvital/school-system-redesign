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
      <div className='h-full p-5 card'>
        <div className="label">
            <div className="cardHead">
                <h4>Presence</h4>
                <p>Very Bad</p>
            </div>
              <p className="cardPorcentage">15.6%</p>
        </div>

        <Doughnut data={data}  className="" />
        <div className="legend">
            <div>
                <h5>15</h5>
                <p>Presence</p>
            </div>
            <div>
                <h5>104</h5>
                <p>Total Classes</p>
            </div>
        </div>
        </div>
  )
}
