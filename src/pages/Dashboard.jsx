import React from "react";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <div className="basis-1/5 relative bg-sidebar h-screen w-64 sm:block shadow-xl">
        <Sidebar />
      </div>
      <div className="basis-4/5 bg-gray-50">
        <Navbar />
        <Content />
      </div>
    </div>
  );
};

export default Dashboard;
