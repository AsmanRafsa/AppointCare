import { useContext, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../context/state";
import axios from "axios";

export default function HospitalLogin() {
  const navigate = useNavigate(); // Access the history object

  const { hospitalLogggedin, setHospitalLogggedin } = useContext(StateContext);

  const [show, setShow] = useState();
  const [formData, setFormData] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  const loginUrl = "http://127.0.0.1:8000/api/hospital/login";

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleLogin(e) {
    e.preventDefault(e);
    console.log(formData);

    axios
      .post(loginUrl, {
        email: formData.email,
        password: formData.password,
        phone_number: formData.phone_number,
      })
      .then((response) => {
        if (response.status === 200) {
          localStorage.setItem("hospital", JSON.stringify(response.data));
          hospitalLogggedin.hospital_loggedin = true;

          navigate("/");
        }
      });

    e.preventDefault();
    const errors = {};
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter your Email");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your Password");

    setFormErrors(errors);
    console.log(errors);
    console.log(formData);
  }

  return (
    <div className="flex mt-[15vh] md:bg-cover bg-[url('assets/images/signin.png')] bg-no-repeat bg-contain bg-center w-[100%] ">
      <div className="flex flex-col text-center mx-auto w-[100%] mt-[3em] mb-[2em]">
        <h1 className="text-4xl font-bold mb-8 font-[poppins]">Hospital Login</h1>
        {/* <form action="" className="flex flex-col justify-center items-center"> */}
        <form action="" className="flex flex-col mx-auto w-[30%]">
          <div className="flex flex-col gap-8">
            {formErrors.email && (
              <p className="text-red-500 font-[raleway]">{formErrors.email}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="rounded py-5 px-6 font-[raleway] shadow-[0_0_6px_lightgray] outline-blue-400"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            {formErrors.password && (
              <p className="text-red-500 font-[raleway]">{formErrors.password}</p>
            )}
            <div className="rounded py-5 px-6 shadow-[0_0_6px_lightgray] outline-blue-400 flex items-center">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-[100%] font-[raleway] outline-none"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <div onClick={() => setShow((prev) => !prev)}>
                {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </div>
            </div>
          </div>
          <div className="flex my-8 items-center justify-between">
            <div className="flex gap-2">
              <input type="checkbox" className="" />
              <p className="text-[1rem] font-[raleway]">Remember me</p>
            </div>
            <div>
              <Link>
                <p className="text-[#318bd4] font-[raleway]">Forgot Your Password?</p>
              </Link>
            </div>
          </div>
          <button
            className="bg-[#318bd4] font-[raleway] rounded-[5px] py-5 px-6 text-white text-[1.4rem]"
            onClick={(e) => handleLogin(e)}
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center my-8 justify-center">
        <p className="text-[1.1rem] font-[raleway]">
          Don't have an account yet? <span>
          <Link to="/hospitalregister">
            <span className="text-blue-400 cursor-pointer font-[raleway]">Create One</span>
          </Link>
          </span>
        </p>
        </div>
      </div>
    </div>
  );
}

