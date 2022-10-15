import React from 'react'



export default function PeopleCard(props) {
  return (
    <div className=''>
          <div className="flex-col bg-white card w-12/12 rounded-lg p-7 ">
          <div >
                  <img src={props.photo} alt="" className="rounded-full w-52 h-52 mb-3 mx-auto" />
          </div>
          <div className="info">
                  <div className="font-bold leading-tight text-3xl mt-0 mb-2 text-center">{props.name}</div>
                  <div className="font-medium leading-tight text-xl -mt-3 mb-2 text-slate-600 text-center">{props.role}</div>
                  {props.phrase ? <div className="italic text-center font-light"> <i>"{props.phrase}"</i> </div>: null}
              
              <div className="mt-5 mb-3 font-light">
                  <i className='bx bx-time'></i>
                  {props.course ? props.course : <span> Works as teacher since {props.teacherDate}</span> }
                  <br />
                  
                  {props.year ? <> <i className='bx bx-map'></i> <span>Since {props.year} on Etec Albert Einstein</span> </> : null}
              </div>
          </div>
          {props.social ?
          <div className="flex-col mt-2 mb-2">
                  <button id="medium" className="text-center h-10 w-full text-white rounded-md mb-1">
                  <i className='bx bxl-medium'></i>
                  Medium
              </button>
                  <button id="github" className="text-center h-10 w-full text-white rounded-md mb-1">
                  <i className='bx bxl-github'></i>
                  Github
              </button>
                  <button id="youtube" className="text-center h-10 w-full text-white rounded-md mb-1">
                  <i className='bx bxl-youtube'></i>
                  Youtube
              </button>
                  <button id="tiktok" className="text-center h-10 w-full text-white rounded-md mb-1">
                  <i className='bx bxl-tiktok'></i>
                  Tiktok
              </button>
          </div>
          : null}
      </div>
      
      </div>
  )
}
