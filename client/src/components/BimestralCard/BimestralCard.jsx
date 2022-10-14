import React from 'react'
import "./style.css"
import { Line } from 'react-chartjs-2';

export default function BimestralCard() {
    const data = {
        labels: ["1º", "2º", "3º", "4º"],
        datasets: [
            {
                label: "First dataset",
                data: [7, 7, 9, 5],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    }
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            
        },
        scales: {
            y: {
                display: false
            },
            x: {
                display: false
            }
        }
    }

  return (
      < div className='h-full card' >
          <div className='flex justify-between p-5 items-center'>
            <div className="">
                <h4>Performance</h4>
                <p>Bimestral</p>
            </div>
              <p className="cardPorcentage">Bad</p>
        </div>
    <div className="h-72 mt-16">

        <Line data={data} options={options}/>
    </div>
       
        </div >
  )
}
