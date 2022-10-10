import React from 'react'
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import TotalClasses from '../../components/TotalClasses/TotalClasses';
import photo from '../../assets/john.png'
import ScoreCard from '../../components/ScoreCard/ScoreCard'
import './style.css'


export default function Teacher() {
  return (
      <div className="content">
        <PeopleCard photo={photo} />
          <div id='div'>
              <ScoreCard score={87} popular={29} classes={8451} />

              <TotalClasses />
              <p>grefdsgv</p>
          </div>
          </div>
  )
}
