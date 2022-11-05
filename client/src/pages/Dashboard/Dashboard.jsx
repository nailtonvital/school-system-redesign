import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import notFound from '../../components/notFound/notFound';
import Navbar from '../../components/Navbar/Navbar';
import ProfilePage from '../Profile/ProfilePage';
import Teacher from '../Teacher/Teacher';
import StudentDashboard from '../StudentDashboard/StudentDashboard';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import TeachersTable from '../../components/TeachersTable/TeachersTable';
import StudentsTable from '../../components/StudentsTable/StudentsTable';
import LecturesTable from '../../components/LecturesTable/LecturesTable';
import ClassesTable from '../../components/ClassesTable/ClassesTable';
import PresenceData from '../../components/PresenceData/PresenceData';
import Attendance from '../Attendance';



export default function Dashboard() {
  return (
    <div className="flex flex-row ">
      <Sidebar type="teacher" />
      <div className="flex-1 bg-white pl-7 pr-4 ml-20">
        <Navbar />
        <div>
          <Routes>
            <Route path="me" element={<ProfilePage />} />
            <Route path="" element={<StudentDashboard />} />
            <Route path="absences" element={<PresenceData />} />
            <Route path="schedule" />
            <Route path="attendance" element={<Attendance/>} />
            <Route path="lectures" element={<LecturesTable />} />
            <Route path="classes" element={<ClassesTable />} />
            <Route path="teachers" element={<TeachersTable />} />
            <Route path="students" element={<StudentsTable />} />
            <Route path="teacher" element={<Teacher />} />
            <Route path="about-me" element={<PersonalInfo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
