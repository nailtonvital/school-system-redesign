import React from 'react'
import PeopleCard from '../../components/PeopleCard/PeopleCard'
import TotalClasses from '../../components/TotalClasses/TotalClasses';
import photo from '../../assets/john.png'
import ScoreCard from '../../components/ScoreCard/ScoreCard'
import './style.css'
import EmailCard from '../../components/EmailCard/EmailCard';
import GradesTable from '../../components/GradesTable/GradesTable';


export default function Teacher() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-6 gap-4">
      <div className="col-span-2">
        <PeopleCard
          photo={photo}
          name="John Wick"
          role="Calculus Teacher"
          phrase="We cannot solve our problems with the same thinking we used when we created them."
          teacherDate={2001}
          year="2020"
        />
        <EmailCard />
      </div>
      <div id="div">
        <ScoreCard score={87} popular={15} classes={8451} />
        <GradesTable />
      </div>
    </div>
  );
}
