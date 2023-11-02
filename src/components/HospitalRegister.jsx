import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StateContext } from "../context/state";
import axios from "axios";
// import PaymentForm from "../components/PaymentForm";

export default function HospitalRegister() {
  const navigate = useNavigate(); // Access the history object

  const { currentUser, setCurrentUser } = useContext(StateContext);
  const hospitalRegisterUrl = "http://127.0.0.1:8000/api/hospital/register";

  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState([]);
  const [formErrors, setFormErrors] = useState({});

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleHospitalRegister(e) {
    e.preventDefault();
    console.log(formData);

    axios
      .post(hospitalRegisterUrl, {
        email: formData.email,
        phone_number: formData.phone_number,
        name: formData.name,
        password: formData.password,
      })
      .then((response) => {
        console.log(response);
        // if (response.status === 200) {
        // }
        navigate("/hospitallogin"); // Redirect to a success page
      })
      .catch((error) => {
        console.log(error);
      });

    const errors = {};
    (formData.email === undefined || formData.email === "") &&
      (errors.email = "Please enter your Email");
    (formData.phone_number === undefined || formData.phone_number === "") &&
      (errors.phone_number = "Please enter your Phone Number");
    (formData.name === undefined || formData.name === "") &&
      (errors.name = "Please enter your Hospital Name");
    (formData.password === undefined || formData.password === "") &&
      (errors.password = "Please enter your Password");
    // (formData.confirmPassword === undefined ||
    //   formData.confirmPassword === "") &&
    //   (errors.confirmPassword = "Please confirm your password");

    setFormErrors(errors);
    console.log(errors);
    console.log(formData);
  }
  return (
    <div className="flex mt-[15vh] md:bg-cover bg-[url('assets/images/signin.png')] bg-no-repeat bg-contain bg-center w-[100%] ">
      <div className="flex flex-col text-center mx-auto w-[100%] mt-[3em] mb-[2em] ">
        <h1 className="text-4xl font-bold mb-8 font-[poppins]">Register Your hospital</h1>
        <form action="" className="flex flex-col mx-auto w-[35%]">
          <div className="flex flex-col gap-8">
            {formErrors.name && (
              <p className="text-red-500 font-[raleway]">{formErrors.name}</p>
            )}
            <input
              type="text"
              placeholder="Hospital Name"
              className="flex-1 rounded py-5 px-6 shadow-[0_0_6px_lightgray] font-[raleway] outline-none"
              name="name"
              onChange={(e) => handleChange(e)}
            />

            {formErrors.email && (
              <p className="text-red-500 font-[raleway]">{formErrors.email}</p>
            )}
            <input
              type="email"
              placeholder="Email Address"
              className="rounded py-5 px-6 font-[raleway] shadow-[0_0_6px_lightgray] outline-none"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            {formErrors.phone_number && (
              <p className="text-red-500">{formErrors.phone_number}</p>
            )}
            <input
              type="text"
              placeholder="Phone Number"
              className="rounded py-5 px-6 font-[raleway] shadow-[0_0_6px_lightgray] outline-none"
              name="phone_number"
              onChange={(e) => handleChange(e)}
            />

            {formErrors.password && (
              <p className="text-red-500 font-[raleway]">{formErrors.password}</p>
            )}
            <div className="rounded py-5 px-6 shadow-[0_0_6px_lightgray] outline-none flex items-center">
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
          
          <button
            className="bg-[#318bd4] font-[raleway] rounded py-5 mt-8 text-white text-[1.4rem]"
            onClick={(e) => handleHospitalRegister(e)}
          >
            Register Hospital
          </button>
        </form>
        <div className="flex items-center my-8 justify-center">
          <p className="text-[1.1rem] font-[raleway]">
            Already have an account? <span>
              <Link to="/hospitallogin">
                <button className="text-blue-400 font-[raleway]">Log In</button>
              </Link>
            </span>
          </p>
        </div>
      </div>
      {/* <div className="bg-[url('assets/images/signup.png')] bg-no-repeat bg-left bg-cover flex-1"></div> */}
      {/* <PaymentForm/> */}
    </div>
  );
}
// export default HospitalRegister
