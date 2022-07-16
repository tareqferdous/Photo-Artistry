import React from "react";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../components/Dashboard/AddProduct";
import NavDashboard from "../components/Dashboard/NavDashboard";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>

      <div>
        <div className="pl-7 pt-20">hello</div>
      </div>
    </div>
  );
};

export default DashboardPage;
