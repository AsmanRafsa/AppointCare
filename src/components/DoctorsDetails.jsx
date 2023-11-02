import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import AddDoctorForm from "./AddDoctorForm";
import { StateContext } from "../context/state";
import axios from "axios";

const DoctorDetails = () => {
 
  const { doctors, setDoctors } = useContext(StateContext);
  // const [doctors, setDoctors] = useState([]);
  const [singleDoctor, setSingleDoctor] = useState({});
  
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [newDoctor, setNewDoctor] = useState({
    doctorName: "",
    doctorImage: "", // You can store the image URL or file as needed
  });
  const hospitalId = JSON.parse(localStorage.getItem("hospital")).id;

  const doctorsUrl = "http://127.0.0.1:8000/api/doctors/add/"; // Your API endpoint
  let imageUrl = "http://127.0.0.1:8000/api";
  const singleDoctorUrl=`http://127.0.0.1:8000/api/doctorsdetail/7/`

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
  }, [doctors]);

  

  


  function handleDelete() {

    axios.delete(singleDoctorUrl,singleDoctor).then((response) => {
      console.log(response);
    });
  }




  return (
    <div className="mt-[15vh] flex items-center gap-2 ">
      {/* <h2 className="text-xl text-red-600 font-bold">Doctor List</h2> */}

      <div className="flex-1 w-60%  items-center  gap-7 ">
      <div className="w-[40vw] h-[60vh]  p-[16px] overflow-y-auto">
        <ul className=" space-y-2">
          {doctors.length===0?(
            <p className="shadow-[0_0_5px_lightgray] h-[200px] flex text-white text-2xl bg-blue-500 m-[5em] items-center w-[300px] justify-center">No Doctors Added</p>
          ):(
            <>
            {doctors.map((doctor, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 bg-gray-100 text-gray-800  shadow-[0_0_5px_lightgray]"
            >
              {selectedDoctor === index ? (
                <div>
                  <input
                    type="text"
                    value={doctor.doctorName}
                    onChange={(e) =>
                      editDoctor(index, {
                        ...doctor,
                        doctorName: e.target.value,
                      })
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
                <div >
                  <img
                    src={`${imageUrl}${doctor.doctorImage}`}
                    alt={doctor.doctorName}
                    className="rounded-full bg-slate-600 w-20 h-20  "
                  />
                  <h3>Dr. {doctor.doctorName}</h3>
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
                    // onClick={() => setSelectedDoctor(index)}
                    // className="bg-blue-500 text-white p-2 rounded-lg mr-2"
                  >
                    {/* Edit */}
                  </button>
                )}
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white p-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
            </>
          )}
          
        </ul>
        </div>

      </div>

      <AddDoctorForm className="flex-1 w-[40%]" />
    </div>
  );
};

export default DoctorDetails;
