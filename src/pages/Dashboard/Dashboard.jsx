import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar';
import ProfilePage from '../Profile/ProfilePage';
import Teacher from '../Teacher/Teacher';
import StudentDashboard from '../StudentDashboard/StudentDashboard';


export default function Dashboard() {
  return (
    <>
        <Sidebar/>
        <div className="tab-content">
           <Navbar/>
            <div>
                  <Routes>
                      <Route path="me" element={<ProfilePage />} />
                      <Route path="teacher" element={<Teacher />} />
                      <Route path="" element={<StudentDashboard />} />
                  </Routes>
                
            </div>
        </div>
    </>
  )
}
