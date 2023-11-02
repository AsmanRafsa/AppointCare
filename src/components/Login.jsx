import { useContext, useEffect, useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { StateContext } from "../context/state";

function LogIn() {
  const { isLogin, setIsLogIn } = useContext(StateContext);
  const navigate = useNavigate();
  const loginUrl = "http://127.0.0.1:8000/api/user/token/";
  const userprofileUrl = "http://127.0.0.1:8000/api/user/profile/";
  const [show, setShow] = useState();
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [allProfiles, setAllProfiles] = useState([]);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    fetch(userprofileUrl).then((res) =>
      res.json().then((data) => {
        setAllProfiles(data);
      })
    );
  }, [formData]);
  function handleLogin(e) {
    e.preventDefault();

    axios
      .post(loginUrl, {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        localStorage.setItem("user", JSON.stringify(response.data));
        const loggedInUserId = JSON.parse(localStorage.getItem("user")).id;

        if (response.status === 200) {
          isLogin.is_loggedin = true;
        }

        console.log(allProfiles);
        if (allProfiles.length === 0) {
          navigate("/profileupdate");
        } else {
          allProfiles.forEach((element) => {
            if (Object.values(element).includes(loggedInUserId)) {
              console.log(element);
              console.log("user has profile");
              localStorage.setItem("userprofile", JSON.stringify(element));
              navigate("/booking");
            } else {
              console.log("no profile");
              navigate("/profileupdate");
            }
          });
        }
      });

    // console.log(isLogin.is_loggedIn);

    const errors = {};
    (formData.username === undefined || formData.username === "") &&
      (errors.username = "Please enter your username");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your Password");

    setFormErrors(errors);
    console.log(errors);
    // console.log(formData);
  }

  return (
    <div className="flex mt-[15vh] md:bg-cover bg-[url('assets/images/signin.png')] bg-no-repeat bg-contain bg-center   ">
      <div className="flex flex-col text-center mx-auto w-[100%] mt-[3em] mb-[2em]">
        <h1 className="text-4xl font-bold mb-7 mt-3">Log in to your account</h1>
        <form action="" className="flex flex-col mx-auto w-[30%] ">
          <div className="flex flex-col gap-8">
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}

            <input
              type="text"
              placeholder="Username"
              className="w-[80%] mx-auto rounded py-5 shadow-[0_0_6px_lightgray] outline-none px-3"
              name="username"
              onChange={(e) => handleChange(e)}
            />
            {formErrors.password && (
              <p className="text-red-500">{formErrors.password}</p>
            )}
            <div className="w-[80%] mx-auto rounded py-5 px-6 shadow-[0_0_6px_lightgray] outline-none flex items-center">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-[100%] outline-none px-3"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <div onClick={() => setShow((prev) => !prev)}>
                {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </div>
            </div>
          </div>
          <div className="flex my-8 items-center justify-between w-[80%] mx-auto">
            <div className="flex gap-2">
              <input type="checkbox" className="" />
              <p className="text-[1rem]">Remember me</p>
            </div>
            <div>
              <Link>
                <p className="text-[#318bd4]">Forgot Your Password?</p>
              </Link>
            </div>
          </div>
          <button
            className="bg-[#318bd4] rounded-[5px] py-5 px-6 text-white text-[1.4rem] w-[80%] mx-auto"
            onClick={(e) => handleLogin(e)}
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center my-8 justify-center">
          <p className="text-[1.1rem]">
            Don't have an account yet? <span>
            <Link to="/register">
              <span className="text-blue-400 cursor-pointer">Sign Up</span>
            </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
