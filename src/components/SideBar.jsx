import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avenue.jpeg";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import {IoIosNotificationsOutline} from "react-icons/io";
import {CgDetailsMore} from "react-icons/cg"
const SideBar = ({ setSelectedContent }) => {
  const handleLinkClick = (content) => {
    setSelectedContent(content);
  };

  return (
    <div className="bg-gray-200 h-[70vh] mt-[15vh] shadow-[0_0_5px_lightgray] top-0 overflow-y-auto fixed  w-[20vw] left-0 ">
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          className="rounded-full h-[50px] w-[50px]"
          alt="post"
        />
        <h2 className="text-blue-500 text-3xl font-bold my-3 ">
          {JSON.parse(localStorage.getItem("user")).name}
        </h2>
      </div>
      <ul className="flex flex-col gap-20">
        <li
          className="  bg-[#318bd4] flex items-center gap-1 hover:bg-blue-200 p-2 text-white font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("hospitaldetails")}
        >
          <CgDetailsMore/>
          Hospital Details
        </li>

        <li
          className="p-2 text-white flex items-center gap-1 bg-[#318bd4] hover:bg-blue-200 font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("doctors")}
        >
          <FaUserDoctor />
          Doctors
        </li>

        <li
          className="p-2 text-white flex items-center gap-1  bg-[#318bd4] hover:bg-blue-200 font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("notifications")}
        >
          <IoIosNotificationsOutline />
          Notification
        </li>
      </ul>
      <Link to="/logouthospital">
        {" "}
        <button className="bg-[#318bd4] p-3 flex items-center gap-1 mt-[6em] text-white rounded-[5px]">
          <AiOutlineLogout /> LOGOUT
        </button>
      </Link>
    </div>
  );
};
export default SideBar;
