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
  const hospitalUrl="http://127.0.0.1:8000/api/hospitaldetails/"
//   useEffect(() => {
//     fetch(hospitalUrl)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         setHospital(data);
//         console.log(hospitals);
//       });
//   }, []);

// Function to update hospital details
const updateHospital = async ( updatedData) => {
  try {
    const response = await axios.put(`/api/hospitaldetails/`, updatedData);
    if (response.status === 200) {
      console.log('Hospital details updated successfully');
    } else {
      console.error('Failed to update hospital details');
    }
  } catch (error) {
    console.error( error);
  }
};


const updatedData = {
  hospita_Location: 'Updated Hospital Location',
  hospita_Slogan: 'Updated Hospital Logan',
  hospita_Description: 'Updated Hospital Description',
  hospita_Image: 'Updated Hospital Image',
};

updateHospital(updatedData);


useEffect(() => {
    const hospitalDetails = async () => {
      try {
        const response = await axios.get('/api/hospitaldetails/');

        if (response.status === 200) {
          const data = response.data;
          setHospital(data);
          console.log(data.data)
        } else if (response.status === 401) {
          setError('Authentication is required. Please log in.');
        } else if (response.status === 404) {
          setError('You do not have an associated hospital.');
        } else {
          setError('An error occurred. Please try again later.');
        }
      } catch (error) {
        setError('Error fetching hospital details. Please check your internet connection.');
      }
    };
    hospitalDetails();
  }, []);




  return (
    <div className="bg-rose-200 p-4">
        <div className="flex items-center w-[100%] gap-[5em] justify-center">
      <div className="flex-1 w-[40%] bg-white shadow-[0_0_5px_lightgray] flex-col it">
        
        <p className="text-5xl  "> {hospitals.name}</p>
        <ul className=" border-b-2">
          <li className=" border-b-2">HospitalDetails</li>
          <Link to={'/doctordetails'}><li className=" border-b-2">Doctors</li></Link>
          <li className=" border-b-2">Notifications</li>
        </ul>
      </div>
      <div className=" w-[60%] bg-white shadow-[0_0_5px_lightgray] gap-4 ">
        <h2 className="text-3xl ">
          Hospital's Dashboard

        </h2>
        
                
<p className="outline-none border-2 m-3">Name:{hospitals.name}</p>
<p className="outline-none border-2 m-3">Email{hospitals.email}</p>
<p className="outline-none border-2 m-3">PhoneNumber{hospitals.phone_number}</p>
                
                
          
<p>Update</p>
<div className="flex flex-col">
    <input type="file" name="hospital_Image" id="" className="outline-none border-2 m-3" />
    <input type="text"  name="hospital_Location" placeholder="location" className="outline-none border-2 m-3"/>
    <input type="text"  name="hospital_Slogan" placeholder="slogan" className="outline-none  border-2 m-3"/>
    <input type="text"  name="hospital_Description" placeholder="Description" className="outline-none border-2 m-3"/>
    <button
        
          type="submit"
          className="bg-blue-600 m-3 text-black  py-4 px-4 rounded-lg hover:bg-blue-600"
        >
        update Hospital
        </button>
</div>
        
        {/* <Notifications /> */} 
      </div>
      </div>
    </div>
  );
}
export default HospitalDashboard;