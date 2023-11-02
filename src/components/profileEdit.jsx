import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import loaderImage from "../../src/assets/images/loader.gif";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Profileedit() {
  const navigate = useNavigate();
  //   const url = "http://127.0.0.1:8000/api/user/profile/";
  //   const imageUrl = "http://127.0.0.1:8000/api/";
  //   const [formErrors, setFormErrors] = useState({});
  //   const [userData, setUserdata] = useState({
  //     profilePic: null,
  //     phoneNumber: "",
  //     user: JSON.parse(localStorage.getItem("user")).id,
  //   });

  //   function handleProfile(e) {
  //     e.preventDefault();
  //     console.log(userData);
  //     const newUserData = new FormData();
  //     newUserData.append("user", userData.user);
  //     newUserData.append("phoneNumber", userData.phoneNumber);
  //     if (userData.profilePic != null) {
  //       newUserData.append = ("profilePic", userData.profilePic);
  //     }

  //     axios.put(url, newUserData).then((response) => {
  //       console.log(response.data);
  //       localStorage.setItem("userprofile", JSON.stringify(response.data));
  //       navigate("/profile");
  //       // if (response.status === 200) {
  //       // //   return (
  //       // //     <div className="shadow shadow-gray-500 w-[10vw] h-[10vw]">
  //       // //       <p>Successfully Updated Your Profile</p>
  //       // //     </div>
  //       // //   );
  //       // }
  //     });
  //   }
  const user = JSON.parse(localStorage.getItem("userprofile"));
  return (
    <div>
      <Nav className="flex flex-1" />

      <div className=" w-[] flex justify-center items-center">
        <h1 className="text-[4rem] font-bold text-blue-400 font-[poppins]">
          Update Your Profile
        </h1>
      </div>
      <div className="bg-[url('assets/images/signin.png')] bg-no-repeat bg-contain bg-center h-[100vh] mx-auto container">
        <form
          action=""
          className="container mx-auto flex flex-col my-[3em] shadow-2xl justify-center items-center h-[100vh]"
        >
          <div className="">
            <label className="my-[1em] font-[raleway] font-medium text-[1.5rem] text-left">
              First Name:
            </label>
            {/* {formErrors.file && (
              <p className="text-red-500">{formErrors.file}</p>
            )} */}
            <input
              value={user.related_data.first_name}
              type="text"
              name="firstname"
              id=""
              placeholder="Add An Image Of The Hospital"
              className="text-left font-[raleway] bg-red  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400 "
            />
          </div>
          <div className="">
            <label className="my-[1em] font-[raleway] font-medium text-[1.5rem] text-left">
              Last Name:
            </label>
            {/* {formErrors.file && (
              <p className="text-red-500">{formErrors.file}</p>
            )} */}
            <input
              value={user.related_data.last_name}
              type="text"
              name="lastname"
              id=""
              placeholder="Add An Image Of The Hospital"
              className="text-left bg-red font-[raleway] p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400 "
            />
          </div>
          <div className="">
            <label className="my-[1em] font-[raleway] font-medium text-[1.5rem] text-left">
              Username:
            </label>
            {/* {formErrors.file && (
              <p className="text-red-500">{formErrors.file}</p>
            )} */}
            <input
              value={user.related_data.username}
              type="text"
              name="username"
              id=""
              placeholder="Add An Image Of The Hospital"
              className="text-left bg-red font-[raleway]  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400 "
            />
          </div>
          {/* <div className="">
            <label className="my-[1em] font-medium text-[1.5rem] text-left">
              Profile Picture
            </label> */}
          {/* {formErrors.file && (
              <p className="text-red-500">{formErrors.file}</p>
            )} */}
          {/* <input
             value={user.profilePic}
              type="file"
              name="file"
              id=""
              placeholder="Add An Image Of The Hospital"
              className="text-left bg-red  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400 "
            />
          </div> */}

          <div className="">
            <div>
              {/* {formErrors.phoneNumber && (
                <p className="text-red-500">{formErrors.phoneNumber}</p>
              )} */}
              <label className="my-[1em] font-[raleway] font-medium text-[1.5rem] text-left">
                Phone Number:
              </label>
              <input
                value={user.phoneNumber}
                type="text"
                placeholder="Enter You Phone Number"
                className="text-left bg-red font-[raleway]  p-4  border-2 w-[30vw] border-gray-300 rounded-full flex outline-blue-400"
              />
            </div>
          </div>

          <button
            onClick={(e) => handleProfile(e)}
            className="bg-[#3ba0f3] p-4 my-[1em] font-[raleway] rounded-full text-white shadow font-medium"
          >
            Update
          </button>
        </form>
      </div>

      <Footer className="flex flex-1" />
    </div>
  );
}
