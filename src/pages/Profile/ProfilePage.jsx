import React from 'react'
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import TotalClasses from '../../components/TotalClasses/TotalClasses';
import photo from '../../assets/paulo.png'
import ScoreCard from '../../components/ScoreCard/ScoreCard'
import './style.css'
import EmailCard from '../../components/EmailCard/EmailCard';
import GradesTable from '../../components/GradesTable/GradesTable';


export default function profile() {
  return (
      <div className="content">
        <div >
          <PeopleCard
            photo={photo} 
            name='Michael Jordan' 
            role='Student' 
            phrase='Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.' 
            course='High School'
            year='2020'
          />
          <EmailCard/>
        </div>
        <div id='div'>
          <ScoreCard score={87} popular={15} classes={8451} />
          <GradesTable />
           
        </div>
      </div>
  )
}
