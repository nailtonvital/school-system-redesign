import React, { useState } from 'react';
import BimestralCard from '../../components/BimestralCard/BimestralCard'
import GradeCard from '../../components/GradeCard/GradeCard'
import PresenceCard from '../../components/PresenceCard/PresenceCard'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import './style.css'
import TodayClasses from '../../components/TodayClasses/TodayClasses';


export default function StudentDashboard() {

  const [value, onChange] = useState(new Date());
   
  return (
    <div className='dashboardArea'>
      <div className='dashboardLine'>
        <BimestralCard/>
        <GradeCard />
        <PresenceCard />
        <Calendar onChange={onChange} value={value} className='card'/>
      </div>
      <div className='dashboardLine'>
        <TodayClasses/>
      </div>
    </div>      
  )
}
