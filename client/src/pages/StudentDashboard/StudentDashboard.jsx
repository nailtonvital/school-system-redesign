import React, { useState } from 'react';
import BimestralCard from '../../components/BimestralCard/BimestralCard'
import GradeCard from '../../components/GradeCard/GradeCard'
import PresenceCard from '../../components/PresenceCard/PresenceCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import './style.css'
import TodayClasses from '../../components/TodayClasses/TodayClasses';
import EmailCard from '../../components/EmailCard/EmailCard';
import Schedule from "../../components/Schedule";
import TodayMenu from '../../components/TodayMenu';


export default function StudentDashboard() {

  const [value, onChange] = useState(new Date());
   
  return (
    <div className="-mt-5">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-full mb-5">
        <BimestralCard />
        <GradeCard />
        <PresenceCard />
        <div className="card p-5">
          <h4 className="mb-7 font-bold">Calendário Escolar</h4>
          <Calendar onChange={onChange} value={value} className="border-0 flex-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Schedule />
        <div className="">
          <TodayMenu />
          <EmailCard benefits={true} />
        </div>
      </div>
    </div>
  );
}
