import coptic from "../assets/images/coptic.jpeg";
import React, { useRef, useState, useEffect, useContext } from "react";
import { StateContext } from "../context/state";
import { useParams } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../firebase";
const DatePicker = () => {
  const [date, setDate] = useState("");
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };
};
function Institution() {
  const { hospitals, setHospitals } = useContext(StateContext);
  useEffect(() => {
    setHospitals([]);
    (async function () {
      const q = query(collection(db, "hospitals"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setHospitals((prev) => [...prev, doc.data()]);
        // console.log(doc.id, " => ", doc.data());
      });
    })();
  }, []);
  const { name } = useParams();
  const nameWithSpace = name.split("-").join(" ");
  console.log(nameWithSpace);
  return (
    <div className="">
      {hospitals &&
        hospitals.map((item) => {
          {
            item.hospitalName && console.log(item.hospitalName.toLowerCase());
          }
          if (
            item.hospitalName &&
            item.hospitalName.toLowerCase() === nameWithSpace
          ) {
            return (
              <div className=" bg-[url('assets/images/bg.jpeg')] bg-no-repeat bg-cover py-[5em]">
                <div className="flex container mx-auto justify-between ">
                  <div className="flex flex-col flex-1">
                    <div className="w-[400px] h-400px] rounded-s-lg flex-1">
                      <img
                        src={item.file}
                        alt=""
                        className="h-[100%] w-[100%] object-contain flex justify-center rounded-s-lg"
                      />
                    </div>

                    <div className="py-3 flex-1 flex-col ">
                      <p className="text-2xl">
                        <span className="text-4xl">|</span> {item.slogan}
                      </p>
                      <h1 className="text-5xl pt-4 text-blue-400">
                        {item.hospitalName}
                      </h1>
                      <p className="text-2xl py-4 text-blue-400">
                        {item.hospitalLocation}
                      </p>
                      <p className="text-2xl">{`${item.workingHours} Hours`}</p>
                      <p className="w-[80%] text-xl pt-4">
                        {item.hospitalDetails}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col flex-1">
                    <h1 className="text-center text-5xl my-6">BOOK NOW</h1>
                    <form action="" className="text-xl flex flex-col ">
                      <div className="flex flex-col flex-1 items-center gap-6">
                        <div className="flex gap-8">
                          <input
                            type="text"
                            placeholder="First Name"
                            className="border-2 border-grey rounded-full p-3 text-xl outline-blue-400"
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="border-2 border-grey rounded-full p-3 text-xl outline-blue-400"
                          />
                        </div>
                        <input
                          type="text"
                          placeholder="Phone Number"
                          className="border-2 border-grey rounded-full p-3 text-xl w-[90%] outline-blue-400"
                        />
                        <select
                          name=""
                          id=""
                          className="w-[90%] rounded-full p-3 outline-gray-200 bg-blue-200"
                        >
                          <option value="">Appointment Type</option>
                          <option value="">Virtual Appointment</option>
                          <option value="">Physical Appointment</option>
                        </select>
                        <div>
                          <select
                            name=""
                            id=""
                            placeholder="Choose medical service"
                            className="w-[90%] rounded-full p-3 outline-gray-200 bg-blue-200"
                          >
                            <option value="">Type Of Service</option>
                            <option value="">Ultrasound</option>
                            <option value="">CT-Scan</option>
                            <option value="">Surgery</option>
                            <option value="">Pharmacy</option>
                            <option value="">Physiotherapy</option>
                            <option value="">Orthopaedics</option>
                            <option value="">Occupational Therapy</option>
                            <option value="">
                              Maternity in-patient services with a ward
                            </option>
                            <option value="">Curative services</option>
                            <option value="">Laboratory Services</option>
                            <option value="">Dental</option>
                            <option value="">Counselling</option>
                            <option value="">Pharmacy</option>
                            <option value="">TB Clinics</option>
                            <option value="">
                              Diabetes & hypertension clinics
                            </option>
                            <option value="">
                              Comprehensive care clinics for patients living
                              with HIV
                            </option>
                            <option value="">Baby well clinics</option>
                            <option value="">
                              Antenatal and Postnatal Services
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="flex-1 pt-12">
                        <p>Date:</p>

                        <input
                          type="datetime-local"
                          onChange={(e) => handleChange(e)}
                          className="p-4 rounded-full border-2 border-blue-400"
                        />
                      </div>
                    </form>
                    <div className="w-[100%] flex ">
                      <button className="my-10 py-6 text-xl w-[40%] mx-auto bg-blue-500 rounded-full text-white">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        })}
    </div>
  );
}

export default Institution;
