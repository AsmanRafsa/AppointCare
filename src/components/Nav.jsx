import { Link } from "react-router-dom";
import logo from "../assets/images/appointCare-removebg-preview.png";
import {FaBars } from "react-icons/fa"
import { useState } from "react";

export default function Nav() {


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" right-0 top-0 bottom-0 left-0 fixed h-[15vh] bg-gray-200 shadow-[0_0_0_0px]">
      <div className="container  mx-auto flex   justify-between gap-5 items-center">
        <div>
          <Link to="/">
            <img src={logo} className="w-[6vw] h-[12vh]" />
          </Link>
        </div>
        <div className="flex justify-end gap-5">
        {isOpen && (
          <ul className="flex flex-col gap-20 absolute top-[40px] z-100 right-0">
            <Link to="/">
              <li className="text-[#318bd4] hidden md:block font-medium text-[1.3rem]">Home</li>
            </Link>
           
            <Link to="/hospitalregister">
              <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">Register Hospital</li>
            </Link>
            <Link to="/register">
              <li className="text-[#318bd4] hidden md:block font-medium text-[1.3rem]">Sign Up</li>
            </Link>
            <Link to="/login">
              <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">Log In</li>
            </Link>
            <Link to="/hospitaldashboard">
              <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">Hospital Dashboard</li>
            </Link>
          </ul>
        )}
        </div>
        <div className="flex items-center gap-5">
          <Link to="/booking">
            <button className="bg-[#318bd4] p-3 text-white hidden md:block rounded-[5px]">
              Book A Hospital
            </button>
          </Link>
          <Link to="">
            <button className="bg-red-700 p-3 text-white hidden md:block rounded-[5px]">
              Emergency Booking
            </button>
          </Link>
          <FaBars onClick={toggleMenu} size={25} className="block md:hidden  relative" />

        </div>
      </div>
    </div>
  );
}
