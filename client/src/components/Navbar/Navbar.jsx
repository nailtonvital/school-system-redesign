import React, { useState, useContext } from "react";
import { Link, useLocation } from 'react-router-dom'
import paulo from '../../assets/Keenan.jpg'
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import student from "../../assets/Keenan.jpg";
import teacher from "../../assets/teacher.png";
import coordinator from "../../assets/coordinator.png";
import logoExtend from "../../assets/logo-nsa-extend.png";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar(props) {
    const location = useLocation();
    const { setAuth, role } = useContext(AuthContext);
    const [openNotification, setOpenNotification] = useState(false);
    const [openReport, setOpenReport] = useState(false);
    const handleOpenNotification = () => setOpenNotification(true);
    const handleCloseNotification = () => setOpenNotification(false);
    const handleOpenReport = () => setOpenReport(true);
    const handleCloseReport = () => setOpenReport(false);

    const [menu, setMenu] = useState(false);

    const handleLogout = () => {
      setAuth(false);
    };

    const handleMenu = () =>{
        setMenu(!menu)
    }
  return (
    <>
      {props.menu ? null : menu ? (
        <div className="mt-5 pl-2.5 -mb-2 flex justify-between items-center">
          <div className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current h-8 mb-2 w-8 text-black group-hover:text-red-500 ease-out duration-300"
              onClick={handleMenu}
            >
              <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
            </svg>
          </div>
          <img src={logoExtend} className="h-4" alt="" />
          <Link
            onClick={handleMenu}
            to="sobre-mim"
            className="flex gap-3 items-center mt-2 mr-3"
          >
            <img
              src={
                role
                  ? role === "student"
                    ? student
                    : role === "teacher"
                    ? teacher
                    : role === "coordinator"
                    ? coordinator
                    : null
                  : null
              }
              className="rounded-full w-9 h-9 mb-1 "
            />
          </Link>
        </div>
      ) : (
        <div className="mt-5 pl-3 -mb-2 flex justify-between items-center">
          <div className="ml-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current h-8 mb-2 w-8 text-black group-hover:text-red-500 ease-out duration-300"
              onClick={handleMenu}
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </div>
          <img src={logoExtend} className="h-4" alt="" />
          <Link to="sobre-mim" className="flex gap-3 items-center mt-2 mr-3">
            <img
              src={
                role
                  ? role === "student"
                    ? student
                    : role === "teacher"
                    ? teacher
                    : role === "coordinator"
                    ? coordinator
                    : null
                  : null
              }
              className="rounded-full w-9 h-9 mb-1 "
            />
          </Link>
        </div>
      )}

      {!menu ? null : (
        <div className="ease-out duration-300 pl-5">
          <div className="mt-8 " onClick={handleMenu}>
            <div className="mt-6">
              <ul>
                {/* Dashboard */}
                <li className="mb-2 group ">
                  <Link to="" className="flex gap-3 items-center mt-2 ">
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Dashboard"
                    >
                      <svg
                        className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"></path>
                      </svg>
                    </span>
                    <span className="text-md text-gray-400 text-center  group-hover:text-red-500 ">
                      Dashboard
                    </span>
                  </Link>
                </li>

                {/* Faltas/ Chamada */}
                {role ? (
                  role === "student" ? (
                    <li className="mb-2 py-2 group" onClick={handleMenu}>
                      <Link
                        to="faltas"
                        className="flex gap-3 items-center mt-2 "
                      >
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Absences"
                        >
                          <svg
                            className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.29 8.29 16 12.58l-1.3-1.29-1.41 1.42 2.7 2.7 5.72-5.7zM4 8a3.91 3.91 0 0 0 4 4 3.91 3.91 0 0 0 4-4 3.91 3.91 0 0 0-4-4 3.91 3.91 0 0 0-4 4zm6 0a1.91 1.91 0 0 1-2 2 1.91 1.91 0 0 1-2-2 1.91 1.91 0 0 1 2-2 1.91 1.91 0 0 1 2 2zM4 18a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v1h2v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1h2z"></path>
                          </svg>
                        </span>
                        <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                          Faltas
                        </span>
                      </Link>
                    </li>
                  ) : role === "teacher" ? (
                    <li className="mb-2 py-2 group" onClick={handleMenu}>
                      <Link
                        to="chamada"
                        className="flex gap-3 items-center mt-2 "
                      >
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Attendance"
                        >
                          <svg
                            className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 12c2.28 0 4-1.72 4-4s-1.72-4-4-4-4 1.72-4 4 1.72 4 4 4zm0-6c1.178 0 2 .822 2 2s-.822 2-2 2-2-.822-2-2 .822-2 2-2zm1 7H7c-2.757 0-5 2.243-5 5v1h2v-1c0-1.654 1.346-3 3-3h2c1.654 0 3 1.346 3 3v1h2v-1c0-2.757-2.243-5-5-5zm9.364-10.364L16.95 4.05C18.271 5.373 19 7.131 19 9s-.729 3.627-2.05 4.95l1.414 1.414C20.064 13.663 21 11.403 21 9s-.936-4.663-2.636-6.364z"></path>
                            <path d="M15.535 5.464 14.121 6.88C14.688 7.445 15 8.198 15 9s-.312 1.555-.879 2.12l1.414 1.416C16.479 11.592 17 10.337 17 9s-.521-2.592-1.465-3.536z"></path>
                          </svg>
                        </span>
                        <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                          Chamada
                        </span>
                      </Link>
                    </li>
                  ) : role === "coordinator" ? null : null
                ) : null}

                {/* Relogio */}
                <li className="mb-2 py-2 group" onClick={handleMenu}>
                  <Link to="horario" className="flex gap-3 items-center mt-2 ">
                    <span
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Schedule"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                      >
                        <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"></path>
                        <path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z"></path>
                      </svg>
                    </span>
                    <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                      Horário
                    </span>
                  </Link>
                </li>
                {/* Lectures/Classes */}
                {role ? (
                  role === "student" ? (
                    <li className="mb-2 py-2 group" onClick={handleMenu}>
                      <Link
                        to="materias"
                        className="flex gap-3 items-center mt-2 "
                      >
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Lectures"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M4 21h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2V7h16l.001 12H4z"></path>
                          </svg>
                        </span>
                        <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                          Matérias
                        </span>
                      </Link>
                    </li>
                  ) : role === "teacher" ? (
                    <li className="mb-2 py-2 group" onClick={handleMenu}>
                      <Link
                        to="turmas"
                        className="flex gap-3 items-center mt-2 "
                      >
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Classes"
                        >
                          <svg
                            className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 5c0-1.103-.897-2-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5zM5 19V5h14l.002 14H5z"></path>
                            <path d="M7 7h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6zm-4 4h1.998v2H7zm4 0h6v2h-6z"></path>
                          </svg>
                        </span>
                        <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                          Classes
                        </span>
                      </Link>
                    </li>
                  ) : role === "coordinator" ? null : null
                ) : null}

                {/* Professores/Alunos */}
                {role ? (
                  role === "student" ? (
                    <li className="mb-2 py-2 group" onClick={handleMenu}>
                      <Link
                        to="professores"
                        className="flex gap-3 items-center mt-2 "
                      >
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Teachers"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
                            <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path>
                          </svg>
                        </span>
                        <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                          Professores
                        </span>
                      </Link>
                    </li>
                  ) : role === "teacher" ? (
                    <li className="mb-2 py-2 group" onClick={handleMenu}>
                      <Link
                        to="alunos"
                        className="flex gap-3 items-center mt-2 "
                      >
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-placement="right"
                          title="Students"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                          >
                            <path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
                            <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path>
                          </svg>
                        </span>
                        <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                          Alunos
                        </span>
                      </Link>
                    </li>
                  ) : role === "coordinator" ? (
                    <>
                      <li className="mb-2 py-2 group" onClick={handleMenu}>
                        <Link
                          to="professores"
                          className="flex gap-3 items-center"
                        >
                          <span
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title="Teachers"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="6" cy="4" r="2"></circle>
                              <path d="M9 7H3a1 1 0 0 0-1 1v7h2v7h4v-7h2V8a1 1 0 0 0-1-1z"></path>
                              <circle cx="17" cy="4" r="2"></circle>
                              <path d="M20.21 7.73a1 1 0 0 0-1-.73h-4.5a1 1 0 0 0-1 .73L12 14h2l-1 4h2v4h4v-4h2l-1-4h2z"></path>
                            </svg>
                          </span>
                          <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                            Professores
                          </span>
                        </Link>
                      </li>
                      <li className="mb-2 py-2 group" onClick={handleMenu}>
                        <Link
                          to="alunos"
                          className="flex gap-3 items-center mt-2 "
                        >
                          <span
                            data-bs-toggle="tooltip"
                            data-bs-placement="right"
                            title="Alunos"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                            >
                              <path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
                              <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path>
                            </svg>
                          </span>
                          <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                            Alunos
                          </span>
                        </Link>
                      </li>
                    </>
                  ) : null
                ) : null}

                {role == "student" ? (
                  <li className="mb-2 py-2 group" onClick={handleMenu}>
                    <Link
                      to="vestibular"
                      className="flex gap-3 items-center mt-2 "
                    >
                      <span
                        data-bs-toggle="tooltip"
                        data-bs-placement="right"
                        title="Alunos"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                        >
                          <path d="M19 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2zm0 14H5V5c0-.806.55-.988 1-1h13v12z"></path>
                        </svg>
                      </span>
                      <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                        Vestibular
                      </span>
                    </Link>
                  </li>
                ) : null}

                {/* informações pessoais */}
              </ul>
            </div>
          </div>
          <div className="mb-10 md:mb-2">
            <div className="mb-2">
              {/* Alerta */}
              <div className="mb-2 py-2 group">
                <a
                  onClick={handleOpenReport}
                  className="flex gap-3 items-center  "
                >
                  <span
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Report"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path>
                      <path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path>
                    </svg>
                  </span>
                  <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                    Reportar
                  </span>
                </a>
              </div>
              <Modal
                open={openReport}
                onClose={handleCloseReport}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box>
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 text-left outline-none focus:outline-none">
                      <div className="relative w-auto my-6 max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">Reportar</h3>
                            <button
                              className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                              onClick={() => setReport(false)}
                            >
                              <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                ×
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="relative p-6  flex-auto">
                            <div className=" justify-center">
                              <div className="mb-2 xl:w-96">
                                <label className="form-label inline-block mb-0 text-gray-700">
                                  Assunto
                                </label>
                                <div className="mb-2 xl:w-96">
                                  <select
                                    className="form-select 
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding bg-no-repeat
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-out duration-300-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    aria-label="Default select example"
                                  >
                                    <option className="font-normal" selected>
                                      Selecione o Assunto
                                    </option>
                                    <option className="font-normal" value="1">
                                      Bug
                                    </option>
                                    <option className="font-normal" value="2">
                                      Professor
                                    </option>
                                    <option className="font-normal" value="3">
                                      Outro
                                    </option>
                                  </select>
                                </div>
                              </div>
                              <div className="flex justify-left">
                                <div>
                                  <div className="form-check flex">
                                    <input
                                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault20"
                                      checked
                                    />
                                    Anônimo
                                  </div>
                                  <div className="form-check flex">
                                    <input
                                      className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                                      type="radio"
                                      name="flexRadioDefault"
                                      id="flexRadioDefault10"
                                    />
                                    Não Anônimo
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-center mt-3">
                                <div className="mb-2 xl:w-96">
                                  <label
                                    for="exampleFormControlTextarea1"
                                    className="form-label inline-block mb-0 text-gray-700"
                                  >
                                    Mensagem
                                  </label>
                                  <textarea
                                    className="
                                    form-control
                                    block
                                    w-full
                                    px-3
                                    py-1.5
                                    text-base
                                    font-normal
                                    text-gray-700
                                    bg-white bg-clip-padding
                                    border border-solid border-gray-300
                                    rounded
                                    transition
                                    ease-out duration-300-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                  "
                                    id="exampleFormControlTextarea1"
                                    rows="3"
                                    placeholder="Escreva sua mensagem"
                                  ></textarea>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/*footer*/}
                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={handleCloseReport}
                            >
                              Cancelar
                            </button>
                            <button
                              className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={handleCloseReport}
                            >
                              Enviar
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                </Box>
              </Modal>
              {/* Notificações */}
              <div className="mb-2 py-2">
                <Link
                  onClick={handleOpenNotification}
                  className="flex gap-3 items-center mb-2"
                >
                  <span
                    data-bs-toggle="tooltip"
                    data-bs-placement="right"
                    title="Notifications"
                  >
                    <svg
                      className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500 "
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 3V3.28988C16.8915 4.15043 19 6.82898 19 10V17H20V19H4V17H5V10C5 6.82898 7.10851 4.15043 10 3.28988V3C10 1.89543 10.8954 1 12 1C13.1046 1 14 1.89543 14 3ZM7 17H17V10C17 7.23858 14.7614 5 12 5C9.23858 5 7 7.23858 7 10V17ZM14 21V20H10V21C10 22.1046 10.8954 23 12 23C13.1046 23 14 22.1046 14 21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                  <span className="text-md text-gray-400 text-center  group-hover:text-red-500">
                    Notificações
                  </span>
                </Link>
              </div>
              <Modal
                open={openNotification}
                onClose={handleCloseNotification}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box>
                  <>
                    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none  focus:outline-none">
                      <div className="relative w-full mx-5 my-6 ">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                          {/*header*/}
                          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                            <h3 className="text-3xl font-semibold">
                              Notificações
                            </h3>
                            <button onClick={handleCloseNotification}>
                              <span className=" text-red-500 opacity-10 -pt-3 mr-4 hover:opacity-100 h-7 w-7 text-2xl block outline-none focus:outline-none">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="40"
                                  height="40"
                                  viewBox="0 0 24 24"
                                  className="fill-current"
                                >
                                  <path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path>
                                  <path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path>
                                </svg>
                              </span>
                            </button>
                          </div>
                          {/*body*/}
                          <div className="overflow-auto h-96">
                            <div className="flex-col mx-2 my-2 p-5 cursor-pointer">
                              <div className="flex justify-between">
                                <div className="">
                                  <h5 className="font-bold">Título</h5>
                                  <p className="text-slate-600 w-9/12 truncate">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.{" "}
                                  </p>
                                </div>
                                <div className="">
                                  <p className="text-slate-600 w-9/12 flex-col text-right">
                                    <span>14:14</span>
                                    <br />
                                    <span>14/10/2022</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex-col mx-2 my-2 p-5 cursor-pointer">
                              <div className="flex">
                                <div className="">
                                  <h5 className="font-bold">Título</h5>
                                  <p className="text-slate-600 w-9/12 truncate">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.{" "}
                                  </p>
                                </div>
                                <div className="">
                                  <p className="text-slate-600 w-9/12 flex-col text-right">
                                    <span>14:14</span>
                                    <br />
                                    <span>14/10/2022</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex-col mx-2 my-2 p-5 cursor-pointer">
                              <div className="flex">
                                <div className="">
                                  <h5 className="font-bold">Título</h5>
                                  <p className="text-slate-600 w-9/12 truncate">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.{" "}
                                  </p>
                                </div>
                                <div className="">
                                  <p className="text-slate-600 w-9/12 flex-col text-right">
                                    <span>14:14</span>
                                    <br />
                                    <span>14/10/2022</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="flex-col mx-2 my-2 p-5 cursor-pointer">
                              <div className="flex">
                                <div className="">
                                  <h5 className="font-bold">Título</h5>
                                  <p className="text-slate-600 w-9/12 truncate">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit.{" "}
                                  </p>
                                </div>
                                <div className="">
                                  <p className="text-slate-600 w-9/12 flex-col text-right">
                                    <span>14:14</span>
                                    <br />
                                    <span>14/10/2022</span>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                  </>
                </Box>
              </Modal>
            </div>
            {/* Sair */}
            <div className="group">
              <Link to="/" className="flex gap-3 items-center mt-2 ">
                <span
                  onClick={handleLogout}
                  data-bs-toggle="tooltip"
                  data-bs-placement="right"
                  title="Exit"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current h-5 w-5 text-gray-400 group-hover:text-red-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path>
                    <path d="m11 16 5-4-5-4v3.001H3v2h8z"></path>
                  </svg>
                </span>
                <span
                  onClick={handleLogout}
                  className="text-md text-gray-400 text-center  group-hover:text-red-500"
                >
                  Sair
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="flex items-center gap-4 w-full pt-6 mb-4">
        <h2
          className={
            "font-bold leading-tight text-3xl ml-5 md:ml-0 mb-2 text-ellipsis w-52 capitalize" +
            (props.menu ? " " : " ml-2")
          }
        >
          {location.pathname.substring(1).length > 9
            ? location.pathname.substring(11).replace("-", " ")
            : location.pathname.substring(1)}
        </h2>
      </div>
    </>
  );
}
