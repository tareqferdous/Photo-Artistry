import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavDashboard = () => {
  return (
    <div>
      <nav class="px-8 h-16 mx-auto sm:max-w-xl md:max-w-full lg:w-full md:px-24 lg:px-16 fixed top-0 left-0 z-50 flex justify-between items-center bg-dark-purple shadow-md">
        <h1 class="text-xl text-gray-100 font-bold uppercase">
          Photo artistry
        </h1>
        <div class="flex items-center">
          <div class="flex items-center"></div>
          <ul class="flex items-center space-x-6">
            <li class="font-semibold text-gray-100">Home</li>
            <li class="font-semibold text-gray-100">Articles</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavDashboard;
