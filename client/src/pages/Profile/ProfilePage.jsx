import React from 'react'
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import TotalClasses from '../../components/TotalClasses/TotalClasses';
import photo from '../../assets/Keenan.jpg'
import ScoreCard from '../../components/ScoreCard/ScoreCard'
import './style.css'
import EmailCard from '../../components/EmailCard/EmailCard';
import GradesTable from '../../components/GradesTable/GradesTable';
import Recommendations from '../../components/Recommendations/Recommendations';


export default function profile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <div className='col-span-2'>
          <PeopleCard
            photo={photo} 
            name='Keenan Lane' 
            role='Student' 
            phrase='Unexpressed emotions will never die. They are buried alive and will come forth later in uglier ways.' 
            course=' High School'
            year='2020'
            social={false}
            
          />
          <EmailCard className='mt-3' />
        </div>
      <div id='div' className='col-span-4'>
          <ScoreCard score={87} popular={15} classes={8451} />
          <GradesTable />
           
        </div>
        <Recommendations/>
    </div>
  )
}
