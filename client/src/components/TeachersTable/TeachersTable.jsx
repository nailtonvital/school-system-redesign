import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from "../../Context/AuthContext";
import { createPopper } from "@popperjs/core";

export default function TeachersTable() {
      const { role } = useContext(AuthContext);
      const [dropdownPopoverShow, setDropdownPopoverShow] =
        React.useState(false);
      const btnDropdownRef = React.createRef();
      const popoverDropdownRef = React.createRef();
      const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
          placement: "bottom-start",
        });
        setDropdownPopoverShow(true);
      };
      const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
      };
      let color = "white";
      // bg colors
      let bgColor;
      color === "white"
        ? (bgColor = "bg-slate-700")
        : (bgColor = "bg-" + color + "-500");

  return (
    <div className="card p-5 mb-7">
      <div className="flex justify-left">
        <div className="w-full">
          <div className="input-group flex gap-1 items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control rounded-full flex-auto min-w-0 block w-full px-5 py-3 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            {role === "coordinator" ? (
              <div className="flex flex-wrap">
                <div className="w-full sm:w-6/12 md:w-4/12 px-4">
                  <div className="relative inline-flex align-middle w-full">
                    <button
                      className="text-black font-semibold flex gap-1 items-center uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                      type="button"
                      ref={btnDropdownRef}
                      onClick={() => {
                        dropdownPopoverShow
                          ? closeDropdownPopover()
                          : openDropdownPopover();
                      }}
                    >
                      Filter
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 11h10v2H7zM4 7h16v2H4zm6 8h4v2h-4z"></path>
                      </svg>
                    </button>
                    <div
                      ref={popoverDropdownRef}
                      className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        (color === "white" ? "bg-white " : bgColor + " ") +
                        "text-base z-25 float-right py-2 list-none text-right rounded shadow-lg mt-1"
                      }
                      style={{ minWidth: "12rem" }}
                    >
                      <a
                        href="#pablo"
                        className={
                          "text-sm flex capitalize justify-between py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent " +
                          (color === "white" ? " text-slate-700" : "text-white")
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        <input type="checkbox" />
                        <p>Grades Delivered</p>
                      </a>
                      <a
                        href="#pablo"
                        className={
                          "text-sm flex capitalize justify-between py-2 px-4 font-normal w-full whitespace-nowrap bg-transparent " +
                          (color === "white" ? " text-slate-700" : "text-white")
                        }
                        onClick={(e) => e.preventDefault()}
                      >
                        <input type="checkbox" />
                        <p>Incomplete Grades</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="table-auto text-left">
                <thead className="bg-white border-b">
                  {role ? (
                    role === "student" ? (
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Teacher
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                      </tr>
                    ) : role === "teacher" ? null : role === "coordinator" ? (
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          RA
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Teacher
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Avarage Score
                        </th>
                      </tr>
                    ) : null
                  ) : null}
                </thead>
                <tbody>
                  {role ? (
                    role === "student" ? (
                      <>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            otto@etec.sp.gov.br
                          </td>
                        </tr>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            <Link to="/dashboard/teacher">John Wick</Link>
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            johnwick@etec.sp.gov.br
                          </td>
                        </tr>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            Sergio
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            sergio@etec.sp.gov.br
                          </td>
                        </tr>
                      </>
                    ) : role === "teacher" ? null : role === "coordinator" ? (
                      <>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            99999
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            Otto
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            otto@etec.sp.gov.br
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            MB
                          </td>
                        </tr>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            99999
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            <Link to="/dashboard/teacher">John Wick</Link>
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            johnwick@etec.sp.gov.br
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            B
                          </td>
                        </tr>
                        <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            99999
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            Sergio
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            sergio@etec.sp.gov.br
                          </td>
                          <td className="text-sm text-gray-900 font-bold px-6 py-4 whitespace-nowrap">
                            MB
                          </td>
                        </tr>
                      </>
                    ) : null
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
