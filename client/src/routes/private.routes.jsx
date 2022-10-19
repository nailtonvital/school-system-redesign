import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard/Dashboard';
import ProfilePage from '../pages/Profile/ProfilePage';
import Teacher from '../pages/Teacher/Teacher';

export default function PrivateRoutes(){

  return (
    <Router>
      <Routes>
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
          <Route
              path="*"
              element={<Navigate to="/dashboard" replace />}
          />
      </Routes>
    </Router>
  )
}


