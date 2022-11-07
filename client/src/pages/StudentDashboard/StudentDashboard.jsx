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
import Schedule from '../Schedule';


export default function StudentDashboard() {

  const [value, onChange] = useState(new Date());
   
  return (
    <div className=''>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 h-full mb-5'>
        <BimestralCard/>
        <GradeCard />
        <PresenceCard />
        <Calendar onChange={onChange} value={value} className='card flex-1'/>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>
        <Schedule />
        <EmailCard benefits={true}/>
      </div>
    </div>      
  )
}
