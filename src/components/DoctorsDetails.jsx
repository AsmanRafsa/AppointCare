import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AddDoctorForm from "../pages/AddDoctorForm";

const DoctorDetails = () => {
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [newDoctor, setNewDoctor] = useState({
    doctorName: "",
    doctorImage: "", // You can store the image URL or file as needed
  });

  const doctorsUrl = "http://127.0.0.1:8000/api/doctors/add/"; // Your API endpoint
  let imageUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    fetch(doctorsUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setDoctors(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const addDoctor = () => {
    setDoctors([...doctors, newDoctor]);
    setNewDoctor({ doctorName: "", DoctorImage: "" });
  };

  const editDoctor = (index, updatedDoctor) => {
    const updatedDoctors = [...doctors];
    updatedDoctors[index] = updatedDoctor;
    setDoctors(updatedDoctors);
    setSelectedDoctor(null);
  };

  const deleteDoctor = (index) => {
    const updatedDoctors = [...doctors];
    updatedDoctors.splice(index, 1);
    setDoctors(updatedDoctors);
  };

  return (
    <div className="bg-slate-400 p-4 flex rounded-lg w-[100%]">
      <h2 className="text-xl text-red-600 font-bold">Doctor Details</h2>
      {/* <input
        type="text"
        value={newDoctor.name}
        onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
        placeholder="Doctor's Name"
        className="border p-2 rounded-lg  mt-2"
      />
      <input
        type="file"
        value={newDoctor.doctorImage}
        onChange={(e) => setNewDoctor({ ...newDoctor, image: e.target.value })}
        placeholder="Image URL"
        className="border p-2 rounded-lg  mt-2"
      /> */}
      {/* <button
        onClick={addDoctor}
        className="bg-blue-500 text-white p-2 rounded-lg mt-2"
      >
        Add Doctor
      </button> */}
      <div className="flex-1 w-60% items-center gap-7 ">

      
      <ul className="mt-4 space-y-2">
        {doctors.map((doctor, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-100 text-gray-800 rounded-lg shadow-md"
          >
            {selectedDoctor === index ? (
              <div>
                <input
                  type="text"
                  value={doctor.doctorName}
                  onChange={(e) =>
                    editDoctor(index, { ...doctor, doctorName: e.target.value })
                  }
                />
                <input
                  type="file"
                  value={doctor.doctorImage}
                  onChange={(e) =>
                    editDoctor(index, {
                      ...doctor,
                      doctorImage: e.target.Filename[0],
                    })
                  }
                />
              </div>
            ) : (
              <div>
                <img
                  src={`${imageUrl}${doctor.doctorImage}`}
                  alt={doctor.doctorName}
                  className="rounded-full bg-slate-600 w-20 h-20  "
                />
                <h3>{doctor.doctorName}</h3>
                <p>{doctor.doctorSpeciality}</p>
              </div>
            )}
            <div>
              {selectedDoctor === index ? (
                <button
                  onClick={() => setSelectedDoctor(null)}
                  className="bg-gray-400 text-white p-2 rounded-lg"
                >
                  Cancel
                </button>
              ) : (
                <button
                  onClick={() => setSelectedDoctor(index)}
                  className="bg-blue-500 text-white p-2 rounded-lg mr-2"
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => deleteDoctor(index)}
                className="bg-red-500 text-white p-2 rounded-lg"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul></div>

      <AddDoctorForm className="flex-1 w-[40%]"/>
    </div>
  );
};

export default DoctorDetails;
