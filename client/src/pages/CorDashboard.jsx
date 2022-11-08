import React from 'react'
import Smallcard from '../components/Smallcard'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

export default function CorDashboard() {
    ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  maintainAspectRatio : false,
  plugins: {
    
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
  
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: "Presence",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(177, 16, 22, 0.7)",
      borderRadius: 3,
    },
    {
      label: "Absence",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(16, 80, 177, 0.7)",
      borderRadius: 3,
    },
  ],
};
  return (
    <>
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
          <Smallcard teacher={true} numbers={57} />
          <Smallcard students={true} numbers={1540} />
          <Smallcard course={true} numbers={17} />
          <Smallcard disapproval={true} numbers={13} />
          <Smallcard dropout={true} numbers={9} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 ">
          <div className="card p-5 pl-5 h-96 w-full pb-10 mt-5">
            <h3 className="font-bold text-xl">Absences x Presences</h3>
            <Bar data={data} options={options} className="" />
          </div>
          <div className="card p-5 pl-5 h-96 w-full pb-10 mt-5">
            <h3 className="font-bold text-xl">Absences x Presences</h3>
            <Bar data={data} options={options} className="" />
          </div>
        </div>
      </div>
    </>
  );
}
