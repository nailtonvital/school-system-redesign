import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import ProfilePage from '../Profile/ProfilePage';
import Teacher from '../Teacher/Teacher';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import ClassesPage from '../ClassesPage/ClassesPage';
import TeachersTable from '../../components/TeachersTable/TeachersTable';


export default function Dashboard() {
  return (
    <div className='flex flex-row '>

      <Sidebar/>
      <div className="flex-1 bg-white pl-7 pr-4 ml-20">
        <Navbar/>
        <div>
          <Routes>
              <Route path="me" element={<ProfilePage />} />
              <Route path="" element={<StudentDashboard />} />
              <Route path="absences" />
              <Route path="schedule" />
              <Route path="lectures" element={<ClassesPage/>} />
              <Route path="teachers" element={<TeachersTable/>}/>
              <Route path="teacher" element={<Teacher />} />
              <Route path="about-me" element={<PersonalInfo/>} />
          </Routes>
        </div>
      </div>
    </div>
   
  )
}
