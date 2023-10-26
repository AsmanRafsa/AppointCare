import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/state";
import DoctorDetails from "./DoctorsDetails";
import Notifications from "./Notifications";
import HospitalLogin from "./HospitalLogin";
import { Link } from "react-router-dom";
import axios from "axios";
function HospitalDashboard() {
  const { isLogin, setIsLogin } = useContext(StateContext);
  const [hospitals, setHospital] = useState([]);
  //   const [myHospital, setMyHospital] = useState([]);
  const [error, setError] = useState(null);
  const hospitalUrl = "http://127.0.0.1:8000/api/hospitaldetails/";

  const [formData, setFormData] = useState([]);
  const [addHospital, setAddHospital] = useState({
    hospital:JSON.parse(localStorage.getItem("user")).id,
    hospital_Slogan: "",
    hospital_Location: "",
    hospital_Description: "",
    hospital_Image: null,
  });
  // function handleChange(e) {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // }

  function handleAdd(e) {
    e.preventDefault(e);
    console.log(formData);
    const newFormData = new FormData();
    newFormData.append("hospital", addHospital.hospital);
    newFormData.append("hospital_Slogan", addHospital.hospital_Slogan);
    newFormData.append("hospital_Location", addHospital.hospital_Location);
    newFormData.append(
      "hospital_Description",
      addHospital.hospital_Description
    );
    if (addHospital.hospital_Image != null) {
      newFormData.append = ("hospital_Image", addHospital.hospital_Image);
    }

// newFormData.forEach((key, value)=>{
//   console.log(`${value}: ${key}`)
// })   
// const location=newFormData.get("hospital")
//  console.log(addHospital)
//  console.log(typeof(location))

    axios
      .post(hospitalUrl, newFormData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className=" p-4">
      <div className="flex items-center w-[100%] gap-[5em] justify-center">
        <div className="flex-1 w-[40%] bg- h-[600px] rounded-lg shadow-[0_0_5px_lightgray] flex-col it">
          <p className="text-5xl  ">
            {JSON.parse(localStorage.getItem("user")).name}
          </p>
          <ul className=" ">
            <li className=" border-b-2 mt-[4em]">HospitalDetails</li>
            <Link to={"/doctordetails"}>
              <li className=" border-b-2 my-[6em]">Doctors</li>
            </Link>
            <li className=" border-b-2 py-[2e]">Notifications</li>
          </ul>
          <Link to={'/logouthospital'}><button className="bg-[#318bd4] p-3 mt-[6em] text-white rounded-[5px]">
            LOGOUT
          </button></Link>
        </div>
        <div className=" w-[60%] bg-white shadow-[0_0_5px_lightgray] ">
          <h2 className="text-3xl ">Hospital's Dashboard</h2>

          <p className="outline-none border-2 m-3">
            Name:{JSON.parse(localStorage.getItem("user")).name}
          </p>
          <p className="outline-none border-2 m-3">
            Email{JSON.parse(localStorage.getItem("user")).email}
          </p>
          <p className="outline-none border-2 m-3">
            PhoneNumber:{JSON.parse(localStorage.getItem("user")).phone_number}
          </p>

          {/* <p>Update</p> */}
          <div className="flex flex-col">
            <input
              // onChange={(e) => handleChange(e)}
              onChange={(e) =>
                setAddHospital({
                  ...addHospital,
                  hospital_Slogan: e.target.value,
                })
              }
              type="text"
              name="hospital_Slogan"
              placeholder="slogan"
              className="outline-none  border-2 m-3"
            />
            <input
              type="file"
              name="hospital_Image"
              id=""
              // onChange={(e) => handleChange(e)}
              onChange={(e) =>
                setAddHospital({
                  ...addHospital,
                  hospital_Image: e.target.files[0],
                })
              }
              className="outline-none border-2 m-3"
            />
            <input
              type="text"
              name="hospital_Location"
              placeholder="location"
              className="outline-none border-2 m-3"
              // onChange={(e) => handleChange(e)}
              onChange={(e) =>
                setAddHospital({
                  ...addHospital,
                  hospital_Location: e.target.value,
                })
              }
            />
            <textarea
              type="text"
              name="hospital_Description"
              placeholder="Description"
              className="outline-none border-2 m-3"
              rows="7"
              // onChange={(e) => handleChange(e)}
              onChange={(e) =>
                setAddHospital({
                  ...addHospital,
                  hospital_Description: e.target.value,
                })
              }
            ></textarea>
            <button
              onClick={(e) => handleAdd(e)}
              type="submit"
              className="bg-blue-600 m-3 text-black  py-4 px-4 rounded-lg hover:bg-blue-600"
            >
              update Hospital
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HospitalDashboard;
