import React, { useContext } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/images/avenue.jpeg";
import { FaUserDoctor } from "react-icons/fa6";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import { StateContext } from "../context/state";
const SideBar = ({ setSelectedContent }) => {
  const handleLinkClick = (content) => {
    setSelectedContent(content);
  };
  const { hospitalAppointments, setHospitalAppointments } =
    useContext(StateContext);
  const { notifications, setNotifications } = useContext(StateContext);

  return (
    <div className=" h-[65vh] shadow-[0_0_5px_lightgray] max-md:w-[40vw] mt-[15vh]  top-0  fixed  w-[20vw] left-0 ">
      <div className="flex items-center gap-2">
        <img
          src={avatar}
          className="rounded-full h-[50px] w-[50px]"
          alt="post"
        />
        <h2 className="text-blue-500 text-[2rem] max-md:text-[1rem] font-bold my-3 ">
          {JSON.parse(localStorage.getItem("hospital")).name}
        </h2>
      </div>
      <ul className="flex flex-col gap-5">
        <li
          className="   flex items-center gap-1 hover:bg-[#318bd4] p-2 hover:text-white  font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("hospitaldetails")}
        >
          <CgDetailsMore />
          Hospital Details
        </li>

        <li
          className="p-2  flex items-center gap-1 hover:bg-[#318bd4] hover:text-white  font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("doctors")}
        >
          <FaUserDoctor />
          Doctors
        </li>
        {/* <label className="bg-red-500 h-[20px] w-[20px] absolute  rounded-full"></label> */}
        <li
          className="p-2 flex items-center gap-1 hover:bg-[#318bd4] relative hover:text-white font-medium text-[1.3rem]"
          onClick={() => handleLinkClick("notifications")}
        >
          <span className="absolute bg-blue-500 hover:bg-white hover:text-blue-500 left-4 bottom-6 w-[20px] h-[20px] rounded-full text-white font-bold flex justify-center items-center">
            {/* {hospitalAppointments.length} */}
            {notifications.length === 0 ? <>0</> : <>{notifications.length}</>}
          </span>
          <IoIosNotificationsOutline />
          Notification
        </li>
      </ul>
      <Link to="/logouthospital">
        <button className="bg-[#318bd4] p-3 flex items-center gap-1 mt-[6em] text-white rounded-[5px]">
          <AiOutlineLogout /> LOGOUT
        </button>
      </Link>
      {/* <Link to="/pay">
        
        <button className="bg-[#318bd4] p-3 flex items-center gap-1 mt-[6em] text-white rounded-[5px]">
          <AiOutlineLogout /> Payment
        </button>
      </Link> */}
    </div>
  );
};
export default SideBar;
