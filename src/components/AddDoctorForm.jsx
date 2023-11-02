import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StateContext } from "../context/state";

const AddDoctorForm = () => {
  const { doctors, setDoctors } = useContext(StateContext);
  const [doctorDetails, setDoctorDetails] = useState([]);
  const doctorsUrl = "http://127.0.0.1:8000/api/doctors/add/"; // Your API endpoint

  const [doctorData, setDoctorData] = useState({
    hospital: JSON.parse(localStorage.getItem("hospital")).id,
    doctorName: "",
    doctorSpeciality: "",
    doctorImage: null,
  });

  

  function handleAdd(e) {
    e.preventDefault(e);
    // console.log(doctorData);
    setDoctors((prev) => [...prev, doctorData]);
    const newFormData = new FormData();
    newFormData.append("hospital", doctorData.hospital);
    newFormData.append("doctorName", doctorData.doctorName);
    newFormData.append("doctorSpeciality", doctorData.doctorSpeciality);
    if (doctorData.doctorImage != null) {
      newFormData.append("doctorImage", doctorData.doctorImage);
    }

    let image = newFormData.get("doctorImage");
    console.log(image);

    axios
      .post(doctorsUrl, newFormData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="    p-7 mx-auto  shadow-[0_0_5px_lightgray]">
      <h2 className="text-2xl text-center font-bold mb-4 font-[poppins]">Add A Doctor</h2>
      <form className=" h-[fit-content]">
        <div className="mb-4">
          <label
            className="block font-[raleway] text-gray-700 text-lg font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="doctorName"
            placeholder="Full Name"
            onChange={(e) =>
              setDoctorData({ ...doctorData, doctorName: e.target.value })
            }
            className="shadow-[0_0_5px_lightgray] font-[raleway]  w-[680px]   rounded-lg py-3 px-3 outline-none"
            required
          />
        </div>
        <div className=" ">
          <label
            className="block text-gray-700 text-lg font-[raleway] font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <div className=" shadow-[0_0_5px_lightgray] font-[raleway] w-[680px] rounded-lg">
            <input
              type="file"
              id="image"
              name="doctorImage"
              onChange={(e) =>
                setDoctorData({ ...doctorData, doctorImage: e.target.files[0] })
              }
              className="py-3 px-3 outline-none  "
            />
          </div>
        </div>

        <div className="mb-4">
          <label
            className="block font-[raleway] text-gray-700 text-lg font-bold mb-2"
            htmlFor="speciality"
          >
            Speciality:
          </label>
          <select
            className="shadow-[0_0_5px_lightgray]  font-[raleway]  w-[680px] rounded-lg py-3 px-3 outline-none"
            name="doctorSpeciality"
            onChange={(e) =>
              setDoctorData({ ...doctorData, doctorSpeciality: e.target.value })
            }
          >
            <option>general</option>
            <option>cardiologist</option>
            <option>dermatologist</option>
            <option>neurologist</option>
            <option>pediatric</option>
            <option>dentistry</option>
            <option>surgery</option>
            <option>pharmacy</option>
            <option>ct-scan</option>
            <option>ultrasound</option>
            <option>physiotherapy</option>
            <option>orthopaedics</option>
            <option>antenatal&postanalservices</option>
            <option>counselling</option>
            <option>babywellclinics</option>
            <option>tBclinics</option>
            <option>laboratoryservices</option>
            <option>curativeservices</option>
            <option>occupationalsevices</option>
            <option>maternity in-patient services with a word</option>
          </select>
        </div>
        <button
          onClick={handleAdd}
          type="submit"
          className="bg-blue-600 font-[raleway] text-black w-[300px] py-4 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
