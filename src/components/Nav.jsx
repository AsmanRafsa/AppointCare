import { Link } from "react-router-dom";
import logo from "../assets/images/appointCare-removebg-preview.png";
import { useContext } from "react";
import { StateContext } from "../context/state";

export default function Nav() {
  const { isLogIn, setIsLogIn } = useContext(StateContext);
  if (isLogIn.is_loggedIn) {
    isLogIn.username = localStorage.getItem("username");
    isLogIn.email = localStorage.getItem("email");
  }

  return (
    <div className=" bg-gray-200">
      <div className="container mx-auto flex justify-between gap-5 items-center">
        <div>
          <Link to="/">
            <img src={logo} className="w-[6vw] h-[12vh]" />
          </Link>
        </div>
        <div className="flex justify-end gap-5">
          {isLogIn.is_loggedIn ? (
            <div className="flex gap-6">
              <ul className="flex flex-row gap-20">
                <Link to="/">
                  <li className="text-[#318bd4] font-medium text-[1.3rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem]">
                    Home
                  </li>
                </Link>
                <Link to="/profile">
                  <li>
                    <button className=" text-[#318bd4] font-medium text-[1.3rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem] ">
                      My Profile
                    </button>
                  </li>
                </Link>
                <Link to="/profileupdate">
                  <li>
                    <button className=" text-[#318bd4] font-medium text-[1.3rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem] ">
                      Edit My Profile
                    </button>
                  </li>
                </Link>
                <Link to="/logout">
                  <li>
                    <button className="text-[#318bd4] font-medium text-[1.3rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem]">
                      Log Out
                    </button>
                  </li>
                </Link>
              </ul>
            </div>
          ) : (
            <div className="flex gap-6 md:justify-evenly">
              <ul className="flex flex-row gap-20">
                <Link to="/">
                  <li className="text-[#318bd4] font-medium text-[1.3rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem] ">
                    Home
                  </li>
                </Link>
                <Link to="/hospitalregister">
                  <li className="text-[#318bd4] font-medium text-[1.3rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem]">
                    Register A Hospital
                  </li>
                </Link>
                <Link to="/hospitallogin">
                  <li className="text-[#318bd4] font-medium text-[1.3rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem]">
                    Login A Hospital
                  </li>
                </Link>
                <Link to="/post">
                  <li className="text-[#318bd4] font-medium text-[1.3rem] xl:text-[1rem] lg:text-[0.9rem] md:text-[0.8rem] sm:text-[0.65rem]">
                    Post A Hospital
                  </li>
                </Link>
              </ul>
            </div>
          )}
        </div>
        <div className="flex gap-5">
          <Link to="/booking">
            <button className="bg-[#318bd4] p-3 text-white rounded-[5px] xl:text-[1rem] xl:p-2 lg:p-1 lg:text-[0.82rem] md:text-[0.65rem] md:p-[0.2rem] sm:text-[0.6rem] sm:p-1">
              Book An Appointment
            </button>
          </Link>
          <Link to="">
            <button className="bg-red-700 p-3 text-white rounded-[5px] xl:text-[1rem] xl:p-2 lg:p-1 lg:text-[0.82rem] md:text-[0.65rem] md:p-[0.2rem] sm:text-[0.6rem] sm:p-1">
              Emergency Booking
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
