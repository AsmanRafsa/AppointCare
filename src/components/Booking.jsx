import { BiSearch } from "react-icons/bi";
import { StateContext } from "../context/state";
import { useState, useContext, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import Ratings from "./Ratings";

function Booking() {
  // const { book, setBook, hospitals, setHospitals } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { isLogin, setIsLogin } = useContext(StateContext);
  const [hospitals, setHospitals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const url = "http://127.0.0.1:8000/api/hospitaldetails/";
  const imageUrl = "http://127.0.0.1:8000/api";

  useEffect(() => {
    // console.log(isLogin.is_loggedin)
    axios
      .get(url, {})
      .then((response) => {
        setHospitals(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="text-xl mt-[15vh]">
      {/* {console.log(hospitals)} */}
      <Nav />
      <div className="border-2 flex border-blue-400 rounded-full p-6 container my-8 mx-auto">
        <BiSearch size={40} />
        <input
          type="text"
          placeholder="Search"
          className="border-none outline-none w-[100%]"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex justify-center gap-6 items-center flex-wrap my-[2em]">
        {hospitals.map((hospital) => {
          return (
            <div className=" flex bg-blue-100  flex-col  w-[30%] items-center rounded-lg">
              {console.log(searchTerm)}
              <img
                src={`${imageUrl}${hospital.hospital_Image}`}
                alt=""
                className="h-[30vh] w-[30vh] object-contain flex justify-center "
                width={500}
                height={500}
              />
              <div className="flex flex-col items-center">
                <div className="flex justify-between text-blue-400">
                  <p className="text-3xl"> {hospital.related_data.name}</p>
                </div>

                <p className="text-2xl text-center w-[80%]">
                  {hospital.hospital_Location}
                </p>
                {isLogin.is_loggedin ?(
                  <Link to={`/hospital/${hospital.id}`}>
                  <button className="bg-[#3ba0f3] rounded-full py-3 my-4 text-white px-10">
                    Book Now
                  </button>
                </Link>
                ):(
                  <Link to={`/login`}>
                  <button className="bg-[#3ba0f3] rounded-full py-3 my-4 text-white px-10">
                    Book Now
                  </button>
                </Link>
                )}
                {/* <Link to={`/hospital/${hospital.id}`}>
                  <button className="bg-[#3ba0f3] rounded-full py-3 my-4 text-white px-10">
                    Book Now
                  </button>
                </Link> */}
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
