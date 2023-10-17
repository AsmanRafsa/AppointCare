import { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function LogIn() {
  const [show, setShow] = useState();
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleLogin(e) {
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
    <div className="text-xl bg-[url('assets/images/signin.png')] bg-no-repeat bg-contain bg-center h-[100vh]  ">
      <div className="text-center w-[50%] mx-auto">
        <h1 className="text-5xl font-bold mt-0 pt-36 pb-8">
          Log in to your account
        </h1>
        {/* <form action="" className="flex flex-col justify-center items-center"> */}
        <form action="" className="flex flex-col">
          <div className="flex flex-col gap-16">
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="rounded-[5px] w-[80%] self-center py-6 px-6 border-2 border-gray-300 outline-none"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            {formErrors.password && (
              <p className="text-red-500">{formErrors.password}</p>
            )}
            <div className="text-left bg-red rounded-[5px] py-6 px-6 border-2 border-gray-300 flex w-[80%] self-center">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                className="w-[100%] outline-none"
                name="password"
                onChange={(e) => handleChange(e)}
              />
              <div onClick={() => setShow((prev) => !prev)}>
                {show ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}
              </div>
            </div>
          </div>
          <div className="flex my-16 justify-between w-[80%] self-center">
            <div className="flex gap-4">
              <input type="checkbox" className="w-6 h-6" />
              <p>Remember me</p>
            </div>
            <div>
              <p>Forgot Your Password?</p>
            </div>
          </div>
          <button
            className="bg-[#318bd4] rounded-[5px] py-8 px-6 text-white text-2xl font-weight w-[80%] self-center"
            onClick={(e) => handleLogin(e)}
          >
            Sign in
          </button>
        </form>
        <p className="my-10">OR</p>
        <div className="flex items-center gap-8 my-12 justify-center">
          <div>
            <img src="" alt="" />
          </div>
          <div className="text-3xl text-blue-500 font-bold ">
            <p>Log In With Google</p>
          </div>
        </div>
        <p className="">
          Don't have an account yet?
          <Link to="/register">
            <span className="text-blue-400 cursor-pointer">Sign Up free</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LogIn;
