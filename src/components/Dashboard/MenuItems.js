import React from "react";
import { NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";

const MenuItems = ({ name, to, open, spacing }) => {
  return (
    <>
      <li
        className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${
          spacing ? "mt-9" : "mt-2"
        }`}
      >
        <span className="text-2xl block float-left">
          <RiDashboardFill />
        </span>
        <span
          className={`text-base font-medium flex-1 duration-200 ${
            !open && "hidden"
          }`}
        >
          <span>
            <NavLink to={to}>{name}</NavLink>
          </span>
        </span>
      </li>
    </>
  );
};

export default MenuItems;
