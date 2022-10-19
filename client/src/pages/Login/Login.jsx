import React, {useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import student from "../../assets/student.png"
import teacher from "../../assets/teacher.png"
import coordinator from "../../assets/coordinator.png"
import logo from '../../assets/logo.png'
import { AuthContext } from '../../Context/AuthContext'


function LoginPage() {
  const {auth, setAuth, setRole} = useContext(AuthContext)
  let navigate = useNavigate()

  return (
    <>
      <div className="bg-white w-screen h-screen flex-col justify-center">
        {/* Title */}
          <h1 className="text-center font-bold text-red-500 text-2xl -mb-2 pt-16">NSA</h1>
        <h2 className="text-center text-red-500">online</h2>

        <h3 className='text-center mt-8 font-bold'>Entry as</h3>
        <Link to="dashboard" >
        <div onClick={()=>{
          setRole("student")
          setAuth(true)
        }} className="w-11/12 sm:w-11/12 md:w-7/12 lg:w-3/12 card p-8 md:p-8 lg:p-3 flex flex-wrap content-center mx-auto  mb-5">
          <img src={student} className="mx-0 sm:mx-10 lg:mx-0" alt="" />
          <h3 className='font-bold ml-3 mt-4 align-middle text-left sm:text-center'>Student</h3>
        </div>
        </Link>
        <Link to="dashboard" >

          <div onClick={()=>{
          setRole("teacher")
          setAuth(true)
        }} className="w-11/12 sm:w-11/12 md:w-7/12 lg:w-3/12 card p-8 md:p-8 lg:p-3 flex flex-wrap content-center mx-auto  mb-5">
            <img src={teacher} className="mx-0 sm:mx-10 lg:mx-0" alt="" />
            <h3 className='font-bold ml-3 mt-4 align-middle text-left sm:text-center'>Teacher</h3>
          </div>
        </Link>
        <Link to="dashboard" >

        <div onClick={()=>{
          setRole("coordinator")
          setAuth(true)
        }} className="w-11/12 sm:w-11/12 md:w-7/12 lg:w-3/12 card p-8 md:p-8 lg:p-3 flex flex-wrap content-center mx-auto  mb-5">
          <img src={coordinator} className="mx-0 sm:mx-10 lg:mx-0" alt="" />
          <h3 className='font-bold ml-3 mt-4 align-middle text-left sm:text-center'>Coordinator</h3>
        </div>
        </Link>
        <img src={logo} className="content-center mt-8 w-24" alt="" />
      </div>
    </>
  )
}

export default LoginPage