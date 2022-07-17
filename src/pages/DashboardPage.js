import React from "react";
import Sidebar from "../components/Dashboard/Sidebar";

const DashboardPage = () => {
  return (
    <div className="flex min-h-screen">
      <div>
        <Sidebar />
      </div>

      <div>
        <div className="ml-72 pt-20">hello</div>
      </div>
    </div>
  );
};

export default DashboardPage;
