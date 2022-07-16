import React, { useState } from "react";
import {
  BsArrowLeftShort,
  BsArrowRightShort,
  BsSearch,
  BsChevronDown,
} from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";
import { RiDashboardFill } from "react-icons/ri";
import NavDashboard from "./NavDashboard";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import AddProduct from "./AddProduct";
import ManageServices from "./ManageServices";
import MenuItems from "./MenuItems";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <>
      <div
        className={`bg-dark-purple p-5 pt-8 ${
          open ? "w-72" : "w-20"
        } relative mt-16 duration-300 min-h-screen`}
      >
        {open ? (
          <BsArrowLeftShort
            onClick={() => setOpen(!open)}
            className="text-dark-purple bg-white text-2xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer "
          />
        ) : (
          <BsArrowRightShort
            onClick={() => setOpen(!open)}
            className="text-dark-purple bg-white text-2xl rounded-full absolute -right-3 top-9 border border-dark-purple cursor-pointer "
          />
        )}

        <div
          className={`flex items-center rounded-md bg-light-white -mt-1 ${
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
          <li className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ">
            <span className="text-2xl block float-left">
              <RiDashboardFill />
            </span>
            <span
              className={`text-base font-medium flex-1 duration-200 ${
                !open && "hidden"
              }`}
            >
              <span>
                <Link to="/addProduct">Add Product</Link>
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
