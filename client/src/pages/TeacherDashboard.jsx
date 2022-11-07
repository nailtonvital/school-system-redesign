import React, { useState } from 'react'
import Smallcard from "../components/Smallcard";
import TodayClasses from '../components/TodayClasses/TodayClasses';
import { Calendar } from 'react-calendar';
import Schedule from './Schedule';

export default function TeacherDashboard() {
    const [value, onChange] = useState(new Date());
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-2 ">
        <Smallcard roll={true} numbers={5} />
        <Smallcard disapproval={true} numbers={8} />
        <Smallcard note={true} text={"B"} />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
        <Schedule />
        <Calendar onChange={onChange} value={value} className="card mx-auto" />
      </div>
    </div>
  );
}
