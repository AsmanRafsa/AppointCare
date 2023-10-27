import { BiSolidLogOutCircle } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { StateContext } from "../context/state";

import Footer from "./Footer";
import Nav from "./Nav";

export default function Logout() {
  const navigate=useNavigate()
  const { isLogIn, setIsLogIn } = useContext(StateContext);
  function handleLogout() {
    localStorage.clear();
    setIsLogIn({
      is_loggedIn: false,
      username: "",
      email: "",
    });
    navigate("/");
  }
  function handleCancel() {
    navigate("/");
  }
  return (
    <>
      <Nav />
      <div className="container mx-auto shadow shadow-[#318bd4] w-[40vw] h-[40vh] my-[9em] flex flex-col justify-center items-center">
        <h1 className="text-[3rem] font-semibold text-center my-[1em]">
          ARE YOU SURE YOU WANT TO LOG OUT?
        </h1>
        <div className="flex gap-[3em] justify-center items-center mb-[3em]">
          <BiSolidLogOutCircle
            color="#318bd4"
            size={70}
            onClick={(e) => handleLogout(e)}
          />
          <MdCancel color="990000" size={70} onClick={(e) => handleCancel(e)} />
        </div>
      </div>
      <Footer />
    </>
  );
}
