import React, { useState } from "react";
import Calendar from "../components/Calendar";
import Schedule from '../components/Schedule'

export default function SchedulePage() {
    const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
            role="tablist"
          >
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 1
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                Today
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 2
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                All Classes
              </a>
            </li>
            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === 3
                    ? "text-white bg-red-600"
                    : "text-black bg-white")
                }
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                school calendar
              </a>
            </li>
          </ul>
          <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-space">
                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                  <Schedule />
                </div>
                <div
                  className={openTab === 2 ? "block" : "hidden"}
                  id="link2"
                ></div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <Calendar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
