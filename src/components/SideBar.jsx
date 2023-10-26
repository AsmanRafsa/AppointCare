import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avenue.jpeg"
const SideBar = ({ setSelectedContent }) => {
  const handleLinkClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="bg-gray-200 h-[70vh] mt-[15vh] shadow-[0_0_5px_lightgray] top-0  fixed  w-[20vw] left-0 ">
      <div className="flex items-center gap-2">
      <img src={avatar} className="rounded-full h-[50px] w-[50px]" alt="post" />
      <h2 className="text-blue-500 text-3xl font-bold my-3 ">{JSON.parse(localStorage.getItem("user")).name}</h2>
      </div>
      <ul className="flex flex-col gap-20">
        {/* <Link to="/hospitaldashboard"> */}
        <li
          className="text-[#000] hover:bg-[#318bd4] hover:white font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("hospitaldetails")}
        >
          Hospital Details
        </li>
        {/* </Link> */}

        {/* <Link to="/doctordetails "> */}
        <li
          className="text-[#000] hover:bg-[#318bd4] font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("doctors")}
        >
          Doctors
        </li>
        {/* </Link> */}
        {/* <Link to="/"> */}
        <li
          className="text-[#000] hover:bg-[#318bd4] font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("notifications")}
        >
          Notification
        </li>
        {/* </Link> */}
      </ul>
      <Link to={"/logouthospital"}>
        <button className="bg-[#318bd4] p-3 mt-[6em] text-white rounded-[5px]">
          LOGOUT
        </button>
      </Link>
    </div>
  );
};
export default SideBar;
