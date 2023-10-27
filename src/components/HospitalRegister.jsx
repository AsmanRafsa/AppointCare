import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { StateContext } from "../context/state";
import axios from "axios";
// import {  } from 'react-router-dom'; // Import useHistory

function HospitalRegister() {
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
        console.log(formData)

        axios.post(hospitalRegisterUrl, {
          email:formData.email,
          phone_number:formData.phone_number,
          name:formData.name,
          password:formData.password,
        })
        .then((response) =>{
          console.log(response);
          // if (response.status === 200) {
          // }
          navigate('/hospitallogin'); // Redirect to a success page
        }
          
        )
        .catch( (error) =>{
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
    return(
        <div className="flex text-xl bg-[url('assets/images/signin.png')] bg-no-repeat bg-contain bg-center w-[100%] ">
        <div className="flex flex-col text-center  mx-auto w-[100%] mt-[5em] mb-[7em]">
          <h1 className="text-4xl font-bold my-8 ">Create Hospital Account</h1>
          <form action="" className="flex flex-col  mx-auto">
            
            <div className="flex flex-col gap-8">
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
              <input
                type="email"
                placeholder="Email Address"
                className="rounded py-4 px-6 border-2 border-gray-300 outline-blue-400"
                name="email"
                onChange={(e) => handleChange(e)}
              />
              {formErrors.phone_number && (
                <p className="text-red-500">{formErrors.phone_number}</p>
              )}
              <input
                type="text"
                placeholder="Phone Number"
                className="rounded py-4 px-6 border-2 border-gray-300 outline-blue-400"
                name="phone_number"
                onChange={(e) => handleChange(e)}
              />


                {formErrors.name && (
                  <p className="text-red-500">{formErrors.name}</p>
                )}
                <input
                  type="text"
                  placeholder="Hospital Name"
                  className="flex-1 rounded py-4 px-6 border-2 border-gray-300 outline-blue-400"
                  name="name"
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
              {/* {formErrors.confirmPassword && (
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
              </div> */}
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
              onClick={(e) => handleHospitalRegister(e)}
            >
              Sign Up
            </button>
          </form>
          
          <div className="flex items-center gap-8 my-8 justify-center">
            <div>
              <img src="" alt="" />
            </div>
            
          </div>
          <p className="my-6">
            Already have an account yet?
            <Link to="/hospitallogin">
              <button className="text-blue-400">Sign In</button>
            </Link>
          </p>
        </div>
        {/* <div className="bg-[url('assets/images/signup.png')] bg-no-repeat bg-left bg-cover flex-1"></div> */}
      </div>
    )
    
}
export default HospitalRegister