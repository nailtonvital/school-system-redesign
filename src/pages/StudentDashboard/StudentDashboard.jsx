import React from 'react'
import GradeCard from '../../components/GradeCard/GradeCard'
import PresenceCard from '../../components/PresenceCard/PresenceCard'
import './style.css'

export default function StudentDashboard() {
   
  return (
    <div className='dashboardArea'>
        <GradeCard />
        <PresenceCard />
    </div>      
  )
}
