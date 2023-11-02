import axios from "axios";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { StateContext } from "../context/state";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useContext(StateContext);
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const signUpUrl = "http://127.0.0.1:8000/api/user/create/";
  // console.log(formData);
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSignup(e) {
    e.preventDefault();

    axios
      .post(signUpUrl, {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        console.log(response);
        navigate("/login");
        setIsLogin({
          isLogIn: true,
          username: localStorage.getItem("username"),
          email: localStorage.getItem("email"),
        });
      });

    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "Please enter your First Name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "Please enter your Last Name");
    (formData.email === undefined || formData.lastName === "") &&
      (errors.email = "Please enter your Email");
    (formData.username === undefined || formData.username === "") &&
      (errors.username = "Please enter your username");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your Password");
    (formData.confirmPassword === undefined ||
      formData.confirmPassword === "") &&
      (errors.confirmPassword = "Please confirm your password");

    setFormErrors(errors);
    console.log(errors);
    console.log(formData);
  }
  return (
    <div className="flex mt-[15vh] bg-[url('assets/images/signin.png')] bg-no-repeat bg-contain bg-center w-[100%] ">
      <div className="flex flex-col text-center  mx-auto w-[100%] mt-[5em] mb-[7em]">
        <h1 className="text-4xl font-bold my-8 font-[poppins] ">Create a New Account</h1>
        <form action="" className="flex flex-col  mx-auto">
          <div className="flex gap-10 my-8 mx-auto">
            <div>
              {formErrors.firstName && (
                <p className="text-red-500 font-[raleway]">{formErrors.firstName}</p>
              )}
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 font-[raleway] rounded py-5 px-6 shadow-[0_0_6px_lightgray] outline-blue-400"
                name="firstName"
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div>
              {formErrors.lastName && (
                <p className="text-red-500">{formErrors.lastName}</p>
              )}
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 font-[raleway] rounded py-5 px-6 shadow-[0_0_6px_lightgray] outline-blue-400"
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
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
            {formErrors.phoneNumber && (
              <p className="text-red-500">{formErrors.phoneNumber}</p>
            )}
            <input
              type="text"
              placeholder="Username"
              className="rounded py-5 font-[raleway] px-6 shadow-[0_0_6px_lightgray] outline-blue-400"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            {formErrors.password && (
              <p className="text-red-500 font-[raleway]">{formErrors.password}</p>
            )}
            <div className="rounded py-5 px-6 font-[raleway] shadow-[0_0_6px_lightgray] outline-blue-400 flex items-center">
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
            {formErrors.confirmPassword && (
              <p className="text-red-500 font-[raleway]">{formErrors.confirmPassword}</p>
            )}
            <div className="rounded py-5 px-6 shadow-[0_0_6px_lightgray] flex items-center">
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-[100%] font-[raleway] outline-none"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          
          <button
            className="bg-[#318bd4] rounded py-5 mt-8 text-white text-2xl font-weight"
            onClick={(e) => handleSignup(e)}
          >
            Sign Up
          </button>
        </form>
        
        <div className="flex items-center my-8 justify-center">
          <p className="text-[1.1rem]">
            Already have an account?{" "}
            <span>
              <Link to="/register">
                <span className="text-blue-400 cursor-pointer font-[raleway]">Sign In</span>
              </Link>
            </span>
          </p>
        </div>
        <div className="bg-[url('assets/images/signup.png')] bg-no-repeat bg-left bg-cover flex-1"></div>
      </div>
    </div>
  );
}
export default SignUp;
