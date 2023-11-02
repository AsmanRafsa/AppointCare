import { BiSearch } from "react-icons/bi";
import { StateContext } from "../context/state";
import { useState, useContext, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import axios from "axios";
// import Ratings from "./Ratings";

function Booking() {
  // const { book, setBook, hospitals, setHospitals } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState("");
  const { isLogin, setIsLogin } = useContext(StateContext);
  const [filterOption, setFilterOption] = useState('all');
  const [items, setItems] = useState([]);
  const { isLogIn, setIsLogIn } = useContext(StateContext);
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
    <div>
    <div className="text-xl mt-[15vh] container mx-auto">
      {console.log(hospitals)}
      <Nav />
      <div className="border-2 flex border-blue-400 rounded-full p-6 my-8 mx-auto">
        <BiSearch size={40} />
        <input
          type="text"
          placeholder="Search"
          className="border-none font-[raleway] outline-none w-[100%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex gap-6 items-center flex-wrap my-[2em]">
        {hospitals.map((hospital) => {
          return (
            <div className=" flex flex-col  rounded-lg shadow-[0_0_5px_lightgray]">
              {/* {console.log(searchTerm)} */}
              <img
                src={`${imageUrl}${hospital.hospital_Image}`}
                alt=""
                className="h-[150px] w-[250px]  "
                
              />
              <div className="flex flex-col items-center mt-2">
                <div className="flex justify-between text-blue-400">
                  <p className="text-[1.3rem] font-[raleway]"> {hospital.related_data.name}</p>
                </div>

                <p className="text-[1rem] font-[raleway] text-center w-[80%]">
                  Location: {hospital.hospital_Location}
                </p>
                {isLogin.is_loggedin ?(
                //   <Link to={`/hospital/${hospital.id}`} className="w-[100%]">
                //   <button className="bg-[#3ba0f3] rounded py-3 mt-4 text-white w-[100%]  ">
                //     Book Now
                //   </button>
                // </Link>
                 <Link to={`/hospital/${hospital.id}`}>
                 <button className="bg-[#3ba0f3] rounded font-[raleway] py-3 mt-4 text-white px-10 my-2 ">
                   Book Now
                 </button>
               </Link>
                ):(
                  <Link to={`/login`}>
                  <button className="bg-[#3ba0f3] rounded font-[raleway] py-3 my-4 text-white px-10">
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
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
