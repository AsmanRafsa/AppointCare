import { Link } from "react-router-dom";
import logo from "../assets/images/appointCare-removebg-preview.png";

export default function Nav() {
  return (
    <div className=" bg-gray-200">
      <div className="container mx-auto flex justify-between gap-5 items-center">
        <div>
          <Link to="/">
            <img src={logo} className="w-[6vw] h-[12vh]" />
          </Link>
        </div>
        <div className="flex justify-end gap-5">
          <ul className="flex flex-row gap-20">
            <Link to="/">
              <li className="text-[#318bd4] font-medium text-[1.3rem]">Home</li>
            </Link>
            <Link to="/hospitalregister">
              <li>Register</li>
            </Link>
            <Link to="/hospitallogin">
              <li>Login</li>
            </Link>
            <Link to="/post">
              <li className="text-[#318bd4] font-medium text-[1.3rem]">Post A Hospital</li>
            </Link>
            <Link to="/register">
              <li className="text-[#318bd4] font-medium text-[1.3rem]">Sign Up</li>
            </Link>
            <Link to="/login">
              <li className="text-[#318bd4] font-medium text-[1.3rem]">Log In</li>
            </Link>
          </ul>
        </div>
        <div className="flex gap-5">
          <Link to="/booking">
            <button className="bg-[#318bd4] p-3 text-white rounded-[5px]">
              Book A Hospital
            </button>
          </Link>
          <Link to="">
            <button className="bg-red-700 p-3 text-white rounded-[5px]">
              Emergency Booking
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
