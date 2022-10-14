import React from 'react'
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import TotalClasses from '../../components/TotalClasses/TotalClasses';
import photo from '../../assets/john.png'
import ScoreCard from '../../components/ScoreCard/ScoreCard'
import './style.css'


export default function Teacher() {
  return (
      <div className="grid grid-cols-3">
        <PeopleCard className="w-12/12 " photo={photo} name="John Wick" role="Calculus Teacher" phrase="Prefiro morrer do que perder a vida." teacherDate={2001} year={2004}/>
        
      <div className='col-span-2 ml-5'>
          <ScoreCard score={87} popular={29} classes={8451} />
          <TotalClasses />
        </div>
      </div>
  )
}
