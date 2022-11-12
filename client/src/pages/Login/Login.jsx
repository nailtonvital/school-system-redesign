import React, {useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import student from "../../assets/student.png"
import teacher from "../../assets/teacher.png"
import coordinator from "../../assets/coordinator.png"
import logoNsa from '../../assets/logo-nsa.png'
import { AuthContext } from '../../Context/AuthContext'


function LoginPage() {
  const {auth, setAuth, setRole} = useContext(AuthContext)
  let navigate = useNavigate()

  return (
    <>
      <div className="bg-white w-screen h-screen flex-col justify-center">
        {/* Title */}
        <img src={logoNsa} className="mx-auto h-28 p-7" alt="logo nsa" />

        <h3 className="text-center mt-8 font-bold">Entrar como</h3>
        <Link to="dashboard">
          <div
            onClick={() => {
              setRole("student");
              setAuth(true);
            }}
            className="w-11/12 sm:w-11/12 md:w-7/12 lg:w-3/12 card p-8 md:p-8 lg:p-3 flex flex-wrap content-center mx-auto  mb-5"
          >
            <img src={student} className="mx-0 sm:mx-10 lg:mx-0" alt="" />
            <h3 className="font-bold ml-3 mt-4 align-middle text-left sm:text-center">
              Aluno
            </h3>
          </div>
        </Link>
        <Link to="dashboard">
          <div
            onClick={() => {
              setRole("teacher");
              setAuth(true);
            }}
            className="w-11/12 sm:w-11/12 md:w-7/12 lg:w-3/12 card p-8 md:p-8 lg:p-3 flex flex-wrap content-center mx-auto  mb-5"
          >
            <img src={teacher} className="mx-0 sm:mx-10 lg:mx-0" alt="" />
            <h3 className="font-bold ml-3 mt-4 align-middle text-left sm:text-center">
              Professor
            </h3>
          </div>
        </Link>
        <Link to="dashboard">
          <div
            onClick={() => {
              setRole("coordinator");
              setAuth(true);
            }}
            className="w-11/12 sm:w-11/12 md:w-7/12 lg:w-3/12 card p-8 md:p-8 lg:p-3 flex flex-wrap content-center mx-auto  mb-5"
          >
            <img src={coordinator} className="mx-0 sm:mx-10 lg:mx-0" alt="" />
            <h3 className="font-bold ml-3 mt-4 align-middle text-left sm:text-center">
              Coordenador
            </h3>
          </div>
        </Link>
        <p className='text-center'>
          Feito com <span className='text-red-600'>❤</span> por{" "}
          <a className='font-bold' href="https://www.linkedin.com/in/nailtonvita/">Nailton Vital</a>
        </p>
      </div>
    </>
  );
}

export default LoginPage