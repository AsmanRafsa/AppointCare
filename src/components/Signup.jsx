import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({});
  const [formErrors, setFormErrors] = useState({});

  function handleGoogleAuth() {
    const [currentUser, setCurrentUser] = useState;
    googleAuth();
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSignup(e) {
    e.preventDefault();
    const errors = {};
    (formData.firstName === undefined || formData.firstName === "") &&
      (errors.firstName = "Please enter your First Name");
    (formData.lastName === undefined || formData.lastName === "") &&
      (errors.lastName = "Please enter your Last Name");
    (formData.email === undefined || formData.lastName === "") &&
      (errors.email = "Please enter your Email");
    (formData.phoneNumber === undefined || formData.phoneNumber === "") &&
      (errors.phoneNumber = "Please enter your Phone Number");
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
    <div className="flex text-xl bg-[url('assets/images/signin.png')] bg-no-repeat bg-contain bg-center w-[100%] ">
      <div className="flex flex-col text-center  mx-auto w-[100%] mt-[5em] mb-[7em]">
        <h1 className="text-4xl font-bold my-8 ">Create a New Account</h1>
        <form action="" className="flex flex-col  mx-auto">
          <div className="flex gap-10 my-8 mx-auto">
            <div>
              {formErrors.firstName && (
                <p className="text-red-500">{formErrors.firstName}</p>
              )}
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 rounded py-4 px-6 border-2 border-gray-300 outline-blue-400"
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
                className="flex-1 rounded py-4 px-6 border-2 border-gray-300 outline-blue-400"
                name="lastName"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-8">
            {formErrors.email && (
              <p className="text-red-500">{formErrors.email}</p>
            )}
            <input
              type="email"
              placeholder="EmailAddress"
              className="rounded py-4 px-6 border-2 border-gray-300 outline-blue-400"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            {formErrors.phoneNumber && (
              <p className="text-red-500">{formErrors.phoneNumber}</p>
            )}
            <input
              type="text"
              placeholder="Phone Number"
              className="rounded py-4 px-6 border-2 border-gray-300 outline-blue-400"
              name="phoneNumber"
              onChange={(e) => handleChange(e)}
            />
            {formErrors.password && (
              <p className="text-red-500">{formErrors.password}</p>
            )}
            <div className="rounded py-4 px-6 border-2 border-gray-300 outline-blue-400 flex items-center">
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
            {formErrors.confirmPassword && (
              <p className="text-red-500">{formErrors.confirmPassword}</p>
            )}
            <div className="rounded py-4 px-6 border-2 border-gray-300 flex items-center">
              <input
                type="password"
                placeholder="Confirm your password"
                className="w-[100%] outline-none"
                name="confirmPassword"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>
          <div className="flex my-8 justify-between">
            <div className="flex gap-4">
              <input type="checkbox" className="w-6 h-6" />
              <p>Remember me</p>
            </div>
            <div>
              <p>Forgot Your Password?</p>
            </div>
          </div>
          <button
            className="bg-[#318bd4] rounded py-6 px-6 text-white text-2xl font-weight"
            onClick={(e) => handleSignup(e)}
          >
            Sign Up
          </button>
        </form>
        <p className="my-6">OR</p>
        <div className="flex items-center gap-8 my-8 justify-center">
          <div>
            <img src="" alt="" />
          </div>
          <button
            className="text-3xl text-blue-500 font-bold"
            onClick={handleGoogleAuth}
          >
            Sign In With Google
          </button>
        </div>
        <p className="my-6">
          Already have an account yet?
          <Link to="/login">
            {" "}
            <button className="text-blue-400">Sign In</button>
          </Link>
        </p>
      </div>
      <div className="bg-[url('assets/images/signup.png')] bg-no-repeat bg-left bg-cover flex-1"></div>
    </div>
  );
}
export default SignUp;
