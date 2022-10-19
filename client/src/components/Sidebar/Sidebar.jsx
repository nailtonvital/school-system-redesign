import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import student from "../../assets/student.png"
import teacher from "../../assets/teacher.png"
import coordinator from "../../assets/coordinator.png"
import logo from '../../assets/logo.png'
import './style.css'
import { AuthContext } from '../../Context/AuthContext'



function Sidebar(props) {
  const [report, setReport] = React.useState(false);
  const [notificationModal, setNotificationModal] = React.useState(false);

    function handleDark(){
       if(document.body.classList.contains('dark')){
           document.body.classList.remove('dark')
       } else{
           document.body.classList.add('dark')
       }
    }

  const {name, setAuth} = useContext(AuthContext)

  const handleLogout = ()=>{
    setAuth(false)
  }

  return (
    <nav class="bg-white w-20 shadow-md h-screen fixed justify-between flex flex-col ">
        <div class="mt-10 mb-10">
          <Link to="me">
            <img
              
              class="rounded-full w-10 h-10 mb-3 mx-auto"
            />
            <p className='text-center'>{name}</p>
          </Link>
          <div class="mt-10">
            <ul>
              {/* Dashboard */}
              <li class="mb-6">
                <Link to="">
                  <span>
                    <svg
                      class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 13H7v5h5v2H5V10h2v1h5v2M8
                          4v2H4V4h4m2-2H2v6h8V2m10 9v2h-4v-2h4m2-2h-8v6h8V9m-2
                          9v2h-4v-2h4m2-2h-8v6h8v-6z"
                      ></path>
                    </svg>
                  </span>
                </Link>
              </li>

            {/* Faltas */}
            <li class="mb-6">
                <Link to="absences">
                  <span>
                    <svg
                      class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M22.775 8C22.9242 8.65461 23 9.32542 23 10H14V1C14.6746 1 15.3454 1.07584 16 1.22504C16.4923 1.33724 16.9754 1.49094 17.4442 1.68508C18.5361 2.13738 19.5282 2.80031 20.364 3.63604C21.1997 4.47177 21.8626 5.46392 22.3149 6.55585C22.5091 7.02455 22.6628 7.5077 22.775 8ZM20.7082 8C20.6397 7.77018 20.5593 7.54361 20.4672 7.32122C20.1154 6.47194 19.5998 5.70026 18.9497 5.05025C18.2997 4.40024 17.5281 3.88463 16.6788 3.53284C16.4564 3.44073 16.2298 3.36031 16 3.2918V8H20.7082Z"
                        fill="currentColor"
                      />
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1 14C1 9.02944 5.02944 5 10 5C10.6746 5 11.3454 5.07584 12 5.22504V12H18.775C18.9242 12.6546 19 13.3254 19 14C19 18.9706 14.9706 23 10 23C5.02944 23 1 18.9706 1 14ZM16.8035 14H10V7.19648C6.24252 7.19648 3.19648 10.2425 3.19648 14C3.19648 17.7575 6.24252 20.8035 10 20.8035C13.7575 20.8035 16.8035 17.7575 16.8035 14Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </Link>
              </li>
              {/* Relogio */}
            <li class="mb-6">
              <Link to="schedule">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500" width="24" height="24" viewBox="0 0 24 24" ><path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"></path><path d="M13 7h-2v6h6v-2h-4z"></path></svg>

                </span>
              </Link>
            </li>
              {/* Lectures */}
              <li class="mb-6">
                <Link to="lectures">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500" width="24" height="24" viewBox="0 0 24 24" ><path d="M4 21h16c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zm0-2V7h16l.001 12H4z"></path></svg>
                </span>
                </Link>
              </li>
            {/* Professores */}
            <li class="mb-6">
                <Link to="teachers">
                  <span>
                  <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500" width="24" height="24" viewBox="0 0 24 24" ><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path><path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"></path></svg>
                  </span>
                </Link>
              </li>
            
            

            {/* informações pessoais */}
            <li class="mb-6">
              <Link to="about-me">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg"
                    class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24" >
                      <path d="M9.715 12c1.151 0 2-.849 2-2s-.849-2-2-2-2 .849-2 2 .848 2 2 2z"></path>
                      <path d="M20 4H4c-1.103 0-2 .841-2 1.875v12.25C2 19.159 2.897 20 4 20h16c1.103 0 2-.841 2-1.875V5.875C22 4.841 21.103 4 20 4zm0 14-16-.011V6l16 .011V18z"></path><path d="M14 9h4v2h-4zm1 4h3v2h-3zm-1.57 2.536c0-1.374-1.676-2.786-3.715-2.786S6 14.162 6 15.536V16h7.43v-.464z"></path></svg>
                </span>
              </Link>
            </li>
              
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <div className="mb-4">
          {/* Alerta */}
        <div className="mb-4">
            <a onClick={() => setReport(true)}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500" width="24" height="24" viewBox="0 0 24 24" ><path d="M11.953 2C6.465 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.493 2 11.953 2zM12 20c-4.411 0-8-3.589-8-8s3.567-8 7.953-8C16.391 4 20 7.589 20 12s-3.589 8-8 8z"></path><path d="M11 7h2v7h-2zm0 8h2v2h-2z"></path></svg>
            </span>
          </a>
        </div>
          {report ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Report
                      </h3>
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
                    <div className="relative p-6 flex-auto">
                      <div class=" justify-center">
                        <div class="mb-3 xl:w-96">
                          <label class="form-label inline-block mb-0 text-gray-700"
                          >Subject</label
                          >
                          <div class="mb-3 xl:w-96">
                          <select class="form-select appearance-none
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
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                              <option selected>Select the subject</option>
                              <option value="1">Bug</option>
                              <option value="2">Teacher</option>
                              <option value="3">Other</option>
                          </select>
                        </div>
                        </div>
                        <div class="flex justify-left">
                          <div>
                            <div class="form-check flex">
                              <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault20" checked />
                              Anonymous
                            </div>
                            <div class="form-check flex">
                              <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="flexRadioDefault10"/>
                              Not anonymous
                            </div>
                          </div>
                        </div>
                        <div class="flex justify-center mt-3">
                          <div class="mb-3 xl:w-96">
                            <label for="exampleFormControlTextarea1" class="form-label inline-block mb-0 text-gray-700"
                            >Type your message</label
                            >
                            <textarea
                              class="
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
                                    ease-in-out
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                  "
                              id="exampleFormControlTextarea1"
                              rows="3"
                              placeholder="Your message"
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
                        onClick={() => setReport(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setReport(false)}
                      >
                        Send report
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        {/* Notificações */}
        <Link onClick={()=>{setNotificationModal(true)}} className="mb-4">
          <span>
            <svg
              class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500 "
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
        </Link>
          {notificationModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Notifications
                      </h3>
                      <button
                        
                        onClick={() => setNotificationModal(false)}
                      >
                        <span className=" text-black opacity-5 -pt-3 mr-4 hover:opacity-100 h-7 w-7 text-2xl block outline-none focus:outline-none">
                          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" ><path d="M9.172 16.242 12 13.414l2.828 2.828 1.414-1.414L13.414 12l2.828-2.828-1.414-1.414L12 10.586 9.172 7.758 7.758 9.172 10.586 12l-2.828 2.828z"></path><path d="M12 22c5.514 0 10-4.486 10-10S17.514 2 12 2 2 6.486 2 12s4.486 10 10 10zm0-18c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8 3.589-8 8-8z"></path></svg>
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div class="overflow-auto h-80">
                      <div className="flex-col card mx-2 my-2 p-5">
                        <div className="flex">
                        <div className="">
                          <h5 className='font-bold'>Name</h5>
                          <p className='text-slate-600 w-9/12 truncate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <div className="">
                            <p className='text-slate-600 w-9/12 flex-col text-right'><span >14:14</span><br /><span>14/10/2022</span></p>
                        </div>
                        </div>
                      </div>
                      <div className="flex-col card mx-2 my-2 p-5">
                        <div className="flex">
                          <div className="">
                            <h5 className='font-bold'>Name</h5>
                            <p className='text-slate-600 w-9/12 truncate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                          <div className="">
                            <p className='text-slate-600 w-9/12 flex-col text-right'><span >14:14</span><br /><span>14/10/2022</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col card mx-2 my-2 p-5">
                        <div className="flex">
                          <div className="">
                            <h5 className='font-bold'>Name</h5>
                            <p className='text-slate-600 w-9/12 truncate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                          <div className="">
                            <p className='text-slate-600 w-9/12 flex-col text-right'><span >14:14</span><br /><span>14/10/2022</span></p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-col card mx-2 my-2 p-5">
                        <div className="flex">
                          <div className="">
                            <h5 className='font-bold'>Name</h5>
                            <p className='text-slate-600 w-9/12 truncate'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                          </div>
                          <div className="">
                            <p className='text-slate-600 w-9/12 flex-col text-right'><span >14:14</span><br /><span>14/10/2022</span></p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          </div>
        {/* Sair */}
        <div className="">
          <Link to="/">
            <span onClick={handleLogout}>
              <svg xmlns="http://www.w3.org/2000/svg" class="fill-current h-5 w-5 text-gray-400 mx-auto hover:text-red-500" width="24" height="24" viewBox="0 0 24 24" ><path d="M19.002 3h-14c-1.103 0-2 .897-2 2v4h2V5h14v14h-14v-4h-2v4c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.898-2-2-2z"></path><path d="m11 16 5-4-5-4v3.001H3v2h8z"></path></svg>
            </span>
          </Link>
        </div>
        <img src={logo} className="pl-4 mt-5 w-9/12" alt="" />

          
        </div>
      </nav>
  )
}

export default Sidebar