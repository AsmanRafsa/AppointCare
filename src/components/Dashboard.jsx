import React from "react";
import SideBar from "./SideBar";

const Dashboard = () => {
  return (
    <div>
      <div className="bg-gray-300 h-[80vh] fixed w-[20vw]">
        <SideBar />
      </div>
    </div>
  );
};
export default Dashboard;
