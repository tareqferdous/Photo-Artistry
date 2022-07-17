import React, { useState } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsSearch,
  BsPlusCircle,
  BsPersonLinesFill,
  BsListUl,
} from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";
import NavDashboard from "./NavDashboard";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`bg-dark-purple p-5 pt-8 ${
          open ? "w-64" : "w-20"
        } relative  duration-300 min-h-screen`}
      >
        {open ? (
          <BsArrowLeftShort
            onClick={() => setOpen(!open)}
            className="text-dark-purple bg-white text-2xl rounded-full absolute -right-3 top-24 border border-dark-purple cursor-pointer "
          />
        ) : (
          <BsArrowRightShort
            onClick={() => setOpen(!open)}
            className="text-dark-purple bg-white text-2xl rounded-full absolute -right-3 top-24 border border-dark-purple cursor-pointer "
          />
        )}

        <div
          className={`flex items-center rounded-md bg-light-white mt-14 ${
            !open ? "px-2.5" : "px-4"
          } py-2`}
        >
          <BsSearch
            className={`text-white text-lg block float-left cursor-pointer ${
              open && "mr-2"
            }`}
          />

          <input
            type={"text"}
            placeholder="Search"
            className={`text-base bg-transparent w-full text-white focus:outline-none ${
              !open && "hidden"
            }`}
          />
        </div>

        <ul className="pt-2">
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer mt-2 p-2 hover:bg-light-white rounded-md ">
            <span className="text-2xl block float-left">
              <BsPlusCircle />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              <span>
                <Link to="/addService">Add Service</Link>
              </span>
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer mt-2 p-2 hover:bg-light-white rounded-md ">
            <span className="text-2xl block float-left">
              <BsPersonLinesFill />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              <span>
                <Link to="/manageService">Manage Service</Link>
              </span>
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer mt-2 p-2 hover:bg-light-white rounded-md ">
            <span className="text-2xl block float-left">
              <BsListUl />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              <span>
                <Link to="/orderList">Order List</Link>
              </span>
            </span>
          </li>

          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer mt-2 p-2 hover:bg-light-white rounded-md ">
            <span className="text-2xl block float-left">
              <BsPlusCircle />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              <span>
                <Link to="/addReview">Add Review</Link>
              </span>
            </span>
          </li>
        </ul>
      </div>
      <NavDashboard />
    </>
  );
};

export default Sidebar;
