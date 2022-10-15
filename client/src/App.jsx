import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import ProfilePage from './pages/Profile/ProfilePage';
import Teacher from './pages/Teacher/Teacher';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard/*" element={<Dashboard />} >
          <Route path="me" element={<ProfilePage />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="classes" />
          <Route path="absences" />
          <Route path="schedule" />
          <Route path="lectures" />
          <Route path="teachers" />
          <Route path="about-me" />
        </Route>
      </Routes>
    </Router>
  )
}

export default App