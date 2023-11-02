import { Link } from "react-router-dom";
import logo from "../assets/images/appointCare-removebg-preview.png";
import { FaBars } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/state";

export default function Nav() {
  const { hospitalLogggedin, setHospitalLogggedin } = useContext(StateContext);
  const { isLogin, setIsLogIn } = useContext(StateContext);
  const allAppointmentsUrl = "http://127.0.0.1:8000/api/booking/";
  const { hospitalAppointments, setHospitalAppointments } =
    useContext(StateContext);

  useEffect(() => {
    if (hospitalLogggedin.hospital_loggedin) {
      const hospitalId = JSON.parse(localStorage.getItem("hospital")).id;

      fetch(allAppointmentsUrl).then((res) =>
        res.json().then((data) => {
          // console.log(data);
          data.forEach((appointment) => {
            if (appointment.hospital === hospitalId) {
              console.log(appointment);
              setHospitalAppointments((current) => [...current, appointment]);
            }
          });
        })
      );
    }
  }, []);

  return (
    <div className=" right-0 top-0 bottom-0 left-0 fixed h-[15vh] bg-gray-200 shadow-[0_0_0_0px]">
      <div className="container  mx-auto flex   justify-between gap-5 items-center">
        <div>
          <Link to="/">
            <img src={logo} className="w-[6vw] h-[12vh]" />
          </Link>
        </div>
        <div className="flex gap-5">
          {/* {isOpen && ( */}
          <ul className="flex flex-row gap-20 z-100 items-center">
            <Link to="/">
              <li className="text-[#318bd4] hidden md:block font-medium text-[1.3rem]">
                Home
              </li>
            </Link>
            <div>
              {isLogin.is_loggedin ? (
                <div className="flex gap-20 items-center">
                  <Link to="/booking">
                    {/* <button className="bg-[#318bd4] p-3 text-white hidden md:block rounded-[5px]"> */}
                    <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">
                      Book Appointment
                    </li>

                    {/* </button> */}
                  </Link>
                  <Link to="/profile">
                    <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">
                      My Profile
                    </li>
                  </Link>
                  <Link to="/logout">
                    <button className="bg-[#318bd4] p-3 text-white hidden md:block rounded-[5px]">
                      Logout
                    </button>
                  </Link>
                </div>
              ) : hospitalLogggedin.hospital_loggedin ? (
                <div>
                  <Link to="/hospitaldashboard">
                    <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">
                      Dashboard
                    </li>
                  </Link>
                </div>
              ) : (
                <div className="flex gap-20 items-center">
                  <Link to="/hospitalregister">
                    <button className="bg-[#318bd4] p-3 text-white hidden md:block rounded-[5px]">
                      Register Hospital
                    </button>
                  </Link>
                  <Link to="/booking">
                    <button className="bg-[#318bd4] p-3 text-white hidden md:block rounded-[5px]">
                      Book Appointment
                    </button>
                  </Link>
                </div>
              )}
            </div>

            {/* <Link to="/hospitalregister">
              <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">Register Hospital</li>
            </Link> */}
            {/* <Link to="/register">
              <li className="text-[#318bd4] hidden md:block font-medium text-[1.3rem]">Sign Up</li>
            </Link>
            <Link to="/login">
              <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">Log In</li>
            </Link> */}
            {/* <Link to="/hospitaldashboard">
              <li className="text-[#318bd4] font-medium hidden md:block text-[1.3rem]">Hospital Dashboard</li>
            </Link> */}
          </ul>
          {/* )} */}
        </div>
        {/* <div className="flex items-center gap-5">
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
          <FaBars  size={25} className="block md:hidden  " />

          <FaBars onClick={toggleMenu} size={25} className="block md:hidden  relative" />

        </div> */}
      </div>
    </div>
  );
}
