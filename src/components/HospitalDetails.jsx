import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/state";
import DoctorDetails from "./DoctorsDetails";
import Notifications from "./Notifications";
import HospitalLogin from "./HospitalLogin";
import { Link } from "react-router-dom";
import axios from "axios";
import SideBar from "./SideBar";
function HospitalDetails() {
  const { isLogin, setIsLogin } = useContext(StateContext);
  const [details, setDetails] = useState([]);
  //   const [myHospital, setMyHospital] = useState([]);
  const [error, setError] = useState(null);
  const hospitalId = JSON.parse(localStorage.getItem("hospital")).id;
  const hospitalDetailsUrl = "http://127.0.0.1:8000/api/hospitaldetails/";
  const getHospitalDetailsUrl = `http://127.0.0.1:8000/api/hospitaldetails/`;
  // const getHospitalDetailsUrl = `http://127.0.0.1:8000/api/hospitaldetails/${hospitalId}`;
  // console.log(getHospitalDetailsUrl);

  const [formData, setFormData] = useState([]);
  const [addHospital, setAddHospital] = useState({
    hospital: JSON.parse(localStorage.getItem("hospital")).id,
    hospital_Slogan: "",
    hospital_Location: "",
    hospital_Description: "",
    hospital_Image: null,
  });

  useEffect(() => {
    fetch(getHospitalDetailsUrl).then((res) =>
      res.json().then((data) => {
        data.forEach(element => {
          if(element.hospital===hospitalId){
            // console.log(element)
            setDetails(element)
          }
        });
        // setDetails(data)
      })
    );
  }, []);

  // console.log(details)

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

    axios
      .post(hospitalDetailsUrl, newFormData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className=" mt-[15vh] p-4 overflow-y-auto h-[600px] ">
      <div className="flex items-center bg-gray-200 w-[100%] gap-[5em] ">
       
        <div className=" w-[100%] bg-white ">
          <h2 className="text-3xl font-[poppins]">Hospital's Details</h2>


          <div className="flex flex-col">
            
            <p className="my-2 text-blue-600 text-2xl font-[raleway]">Hospital Name:</p>
          <input
              
              value={JSON.parse(localStorage.getItem("hospital")).name}
              type="text"
              className="outline-none font-[raleway] text-xl p-2 shadow-[0_0_4px_lightgray]"
            />
            <p className="my-2 text-blue-600 text-2xl font-[raleway]">Email Address:</p>
            <input
              
              value={JSON.parse(localStorage.getItem("hospital")).email}
              type="text"
              className="outline-none text-xl font-[raleway] p-2 shadow-[0_0_4px_lightgray]"
            />
            <p className="my-2 text-blue-600 text-2xl font-[raleway]">Phone Number:</p>
            <input
              
              value={JSON.parse(localStorage.getItem("hospital")).phone_number}
              type="text"
              className="outline-none text-xl p-2 font-[raleway] shadow-[0_0_4px_lightgray]"
            />
            <p className="my-2 text-blue-600 text-2xl font-[raleway]">Hospital Slogan:</p>
            <input
              onChange={(e) =>
                setAddHospital({
                  ...addHospital,
                  hospital_Slogan: e.target.value,
                })
              }
              value={details.hospital_Slogan}
              type="text"
              name="hospital_Slogan"
              placeholder="slogan"
              className="outline-none text-xl p-2 font-[raleway] shadow-[0_0_4px_lightgray]"
            />
            <p className="my-2 text-blue-600 text-2xl font-[raleway]">Upload Image:</p>
            <input
              type="file"
              name="hospital_Image"
              id=""
              onChange={(e) =>
                setAddHospital({
                  ...addHospital,
                  hospital_Image: e.target.files[0],
                })
              }
             
              className="outline-none text-xl p-2 shadow-[0_0_4px_lightgray] font-[raleway]"
            />
            <p className="my-2 text-blue-600 text-2xl font-[raleway]">Location:</p>
            <input
              type="text"
              name="hospital_Location"
              placeholder="location"
              className="outline-none p-2 shadow-[0_0_4px_lightgray] font-[raleway]" 
              onChange={(e) =>
                setAddHospital({
                  ...addHospital,
                  hospital_Location: e.target.value,
                })
              }
              value={details.hospital_Location}
            />
            <p className="my-2 text-blue-600 text-2xl font-[raleway]">Brief Hospital Description:</p>
            <textarea
              type="text"
              name="hospital_Description"
              placeholder="Description"
              className="outline-none text-xl p-2 font-[raleway] shadow-[0_0_4px_lightgray]"
              rows="3"
              value={details.hospital_Description}
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
              className="bg-blue-600 font-[raleway] m-3 text-black  py-4 px-4 rounded-lg hover:bg-blue-600"
            >
              update Hospital
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HospitalDetails;
