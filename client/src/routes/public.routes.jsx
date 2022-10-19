
import { BrowserRouter as Router, Navigate, Routes, Route } from "react-router-dom";
import Login from '../pages/Login/Login';


export default function PublicRoutes() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route
              path="*"
              element={<Navigate to="/" replace />}
          />
      </Routes>
    </Router>
  )
}


