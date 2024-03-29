import React, {useState, useEffect, useContext} from 'react'
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
import { AuthContext } from "../../Context/AuthContext";
import TeacherDashboard from '../TeacherDashboard';
import CorDashboard from '../CorDashboard';
import SchedulePage from '../SchedulePage';
import RollCall from '../RollCall';
import EntranceExam from '../EntranceExam';


export default function Dashboard() {
  const { role } = useContext(AuthContext);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  
  return (
    <div className="flex flex-row ">
      {windowSize.innerWidth > 640 ? <Sidebar /> : null}

      <div
        className={
          "flex-1 bg-white  pr-4" +
          (windowSize.innerWidth > 640 ? " pl-24" : "ml-20")
        }
      >
        <Navbar menu={windowSize.innerWidth < 640 ? false : true} />
        <div>
          <Routes>
            <Route path="aluno" element={<ProfilePage />} />
            <Route
              path=""
              element={
                role === "student" ? (
                  <StudentDashboard />
                ) : role === "teacher" ? (
                  <TeacherDashboard />
                ) : (
                  <CorDashboard />
                )
              }
            />
            <Route path="faltas" element={<PresenceData />} />
            <Route path="vestibular" element={<EntranceExam />} />
            <Route path="horario" element={<SchedulePage />} />
            <Route path="chamada" element={<Attendance />} />
            <Route path="materias" element={<LecturesTable />} />
            <Route path="turmas" element={<ClassesTable />} />
            <Route path="professores" element={<TeachersTable />} />
            <Route path="realizar-chamada" element={<RollCall />} />
            <Route path="alunos" element={<StudentsTable />} />
            <Route path="professor" element={<Teacher />} />
            <Route path="sobre-mim" element={<PersonalInfo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
