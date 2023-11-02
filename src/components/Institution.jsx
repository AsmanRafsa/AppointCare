import React, { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { StateContext } from "../context/state";
import { useParams } from "react-router-dom";
import Userprofile from "./Userprofile";

export default function Institution() {
  const [hospital, setHospital] = useState(null);
  const [users, setUsers] = useState([]);
  const { isLogIn, setIsLogIn } = useContext(StateContext);
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formErrors, setFormErrors] = useState({});
  // const id = JSON.parse(localStorage.getItem("userprofile"));
  const [bookingData, setBookingdata] = useState(null);

  const hid = useParams();
  console.log(hid)

  const [error, setError] = useState(null);
  // const hospitalId=JSON.parse(localStorage.getItem("user")).id;
  const url = `http://127.0.0.1:8000/api/hospitaldetails/${hid.id}`;
  const bookingUrl = "http://127.0.0.1:8000/api/booking/";
  const userprofileUrl = "http://127.0.0.1:8000/api/user/profile/";
  const imageUrl = "http://127.0.0.1:8000/api";
  function handleChange(e) {
    setBookingdata({ ...bookingData, [e.target.name]: e.target.value });
  }

  // if (isLogIn.is_loggedIn) {
  //   isLogIn.username = localStorage.getItem("username");
  //   isLogIn.email = localStorage.getItem("email");
  // }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setHospital(response.data);
        // console.log(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });

    axios.get(userprofileUrl).then((response) => {
      // console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  function handleBooking(e) {
    e.preventDefault();
    const hospitalId = parseInt(hid.id);
    const id = JSON.parse(localStorage.getItem("userprofile")).user;
    console.log(id)

    const dataUpdate = {...bookingData, hospital:hospitalId, user:id}
    console.log(dataUpdate)
    axios.post(bookingUrl, dataUpdate).then((response) => {
      console.log(response);
      // if (response.status === 200) {
      //   return(
      //     <div className="shadow shadow-gray-500 w-[10vw] h-[10vw]">
      //       <p>Booking Done Successfully</p>
      //     </div>
      //   )
      // }
    });

    // console.log(bookingData);

    // const errors = {};
    // (formData.patientAge === undefined || formData.patientAge === "") &&
    //   (errors.patientAge = "Please enter your age");
    // (formData.patientDisease === undefined || formData.patientDisease === "") &&
    //   (errors.patientDisease = "Please enter you problem");
    // (formData.timeBooked === undefined || formData.timeBooked === "") &&
    //   (errors.timeBooked = "Please enter the time you want to book");

    // setFormErrors(errors);
    // console.log(errors);
    // console.log(formData);


   



  }
  return (
    // <div className="">

    <div className=" bg-[url('assets/images/bg.jpeg')] bg-no-repeat bg-cover py-[5em]">
      <div className="flex container mx-auto justify-between items-center">
        <div className="flex flex-col flex-1 ">
          <div className="w-[500px] h-[500px] rounded-s-lg flex-1 mt-[2.5em] p-[3em]">
            <img
              src={`${imageUrl}${hospital && hospital.hospital_Image}`}
              alt=""
              className="h-[100%] w-[100%] object-contain flex justify-center rounded-s-lg"
            />
          </div>

          <div className="py-3 flex-1 flex-col ">
            <p className="text-2xl">
              <span className="text-4xl font-[raleway]">|</span>{" "}
              {hospital && hospital.hospital_Slogan}
            </p>
            <h1 className="text-5xl pt-4 text-blue-400 font-[poppins]">
              {hospital && hospital.related_data.name}
            </h1>
            <p className="text-2xl py-4 text-blue-400 font-[raleway]">
              {hospital && hospital.hospital_Location}
            </p>
            {/* <p className="text-2xl">{`${hospital.workingHours} Hours`}</p> */}
            <p className="w-[80%] text-xl pt-4 font-[raleway]">
              {hospital && hospital.hospital_Description}
            </p>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <h1 className="text-center text-5xl my-6 font-[poppins]">BOOK NOW</h1>
          <form action="" className="text-xl flex flex-col ">
            <div className="flex flex-col flex-1 items-center gap-6">
              <div className="w-[90%] ml-[1em] flex items-center gap-4 border-2 border-blue-400 rounded-full p-3 bg-white">
                <p className="font-[raleway]">Age:</p>{" "}
                <input
                  name="patientAge"
                  type="number"
                  min={10}
                  max={100}
                  onChange={(e) => handleChange(e)}
                  className="bg-white outline-none "
                />
              </div>

              <select
                name="patientDisease"
                id=""
                placeholder="Choose medical service"
                className="w-[90%] font-[raleway] rounded-full p-3 outline-gray-200 bg-white border-2 border-blue-400"
                onChange={(e) => handleChange(e)}
              >
                <option value="">Type Of Service</option>
                <option value="Ultrasound">Ultrasound</option>
                <option value="CT-Scan">CT-Scan</option>
                <option value="Surgery">Surgery</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="Orthopaedics">Orthopaedics</option>
                <option value="Occupational Therapy">
                  Occupational Therapy
                </option>
                <option value="Maternity in-patient services with a ward">
                  Maternity in-patient services with a ward
                </option>
                <option value="Curative services">Curative services</option>
                <option value="Laboratory Services">Laboratory Services</option>
                <option value="Dental">Dental</option>
                <option value="Counselling">Counselling</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="TB Clinics">TB Clinics</option>
                <option value="Diabetes & hypertension clinics">
                  Diabetes & hypertension clinics
                </option>
                <option value="Comprehensive care clinics for patients living with HIV">
                  Comprehensive care clinics for patients living with HIV
                </option>
                <option value="Baby well clinics">Baby well clinics</option>
                <option value="Antenatal and Postnatal Services">
                  Antenatal and Postnatal Services
                </option>
              </select>
              <div className="w-[90%] ml-[1em] flex items-center gap-4 border-2 border-blue-400 rounded-full p-3 bg-white">
                <p>Date:</p>

                <input
                  type="datetime-local"
                  name="timeBooked"
                  onChange={(e) => handleChange(e)}
                  className="bg-white font-[raleway] outline-none "
                />
              </div>
            </div>
          </form>
          <div className="w-[100%] flex ">
            <button
              className="my-10 py-6 font-[raleway] text-xl w-[40%] mx-auto bg-blue-500 rounded-full text-white"
              onClick={(e) => {
                handleBooking(e);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>

    // </div>
  );
}
