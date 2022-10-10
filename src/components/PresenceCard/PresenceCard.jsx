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
       // See https://github.com/pandameister/chartjs-chart-radial-gauge#options
    domain: [0, 100],
    trackColor: '#f0f8ff', 
    centerPercentage: 90,
    centerArea: {
      text: (val) => val + '%',
    }
    
    }

  return (
      <div className='dashboardCard card'>
        <div className="label">
            <div className="cardHead">
                <h4>Presence</h4>
                <p>Very Bad</p>
            </div>
              <p className="cardPorcentage">15.6%</p>
        </div>

        <Doughnut data={data}  className="" />
        <div className="legend">
              <p>Total Classes: 104</p>
              <p>Presence: 15</p>
        </div>
        </div>
  )
}
