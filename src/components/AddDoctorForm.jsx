import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StateContext } from "../context/state";

const AddDoctorForm = () => {
  const { doctors, setDoctors } = useContext(StateContext);
  const [doctorDetails, setDoctorDetails] = useState([]);

  const [doctorData, setDoctorData] = useState({
    hospital: JSON.parse(localStorage.getItem("user")).id,
    doctorName: "",
    doctorSpeciality: "",
    doctorImage: null,
  });

  const doctorsUrl = "http://127.0.0.1:8000/api/doctors/add/"; // Your API endpoint
  function handleChange(e) {
    setDoctorData({ ...doctorData, [e.target.name]: e.target.value });
  }

  function handleAdd(e) {
    e.preventDefault(e);
    // console.log(doctorData);
    setDoctors(prev=>[...prev,doctorData])
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
    <div className="   p-7 mx-auto rounded-lg  shadow-[0_0_5px_lightgray]">
      <h2 className="text-2xl text-center font-bold mb-4">Add A Doctor</h2>
      <form>
        <div className=" ">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="image"
          >
            Image:
          </label>
          <div className="border-2  border-gray-300 w-[680px] rounded-lg">
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
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="name"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="doctorName"
            onChange={(e) =>
              setDoctorData({ ...doctorData, doctorName: e.target.value })
            }
            className="border-2  border-gray-300 w-[680px]   rounded-lg py-3 px-3 outline-none"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="speciality"
          >
            Speciality:
          </label>
          <select
            className="border-2  border-gray-300 w-[680px] rounded-lg py-3 px-3 outline-none"
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
          </select>
        </div>
        <button
          onClick={handleAdd}
          type="submit"
          className="bg-blue-600 text-black w-[680px] py-4 px-4 rounded-lg hover:bg-blue-600"
        >
          Add Doctor
        </button>
      </form>
    </div>
  );
};

export default AddDoctorForm;
