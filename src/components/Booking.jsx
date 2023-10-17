import { BiSearch } from "react-icons/bi";
// import { Institutions } from "../data";
import { AiOutlineHeart } from "react-icons/ai";
import { StateContext } from "../context/state";
import { useState, useContext, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Nav from "./Nav";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function Booking() {
  const { book, setBook, hospitals, setHospitals } = useContext(StateContext);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    setHospitals([]);
    (async function () {
      const q = query(collection(db, "hospitals"));

      const querySnapshot = await getDocs();
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setHospitals((prev) => [...prev, doc.data()]);
        console.log(doc.id, " => ", doc.data());
      });
    })();
  }, []);
  return (
    <div className="text-xl">
      {console.log(hospitals)}
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
        {hospitals &&
          hospitals.map((item) => {
            if (item.hospitalName) {
              return (
                <div className=" flex bg-blue-100  flex-col  w-[30%] items-center rounded-lg">
                  {console.log(searchTerm)}
                  <img
                    src={item.file}
                    alt=""
                    className="h-[30vh] w-[30vh] object-contain flex justify-center "
                    width={500}
                    height={500}
                  />
                  <div className="flex flex-col items-center">
                    <div className="flex justify-between text-blue-400">
                      <p className="text-3xl">{item.hospitalName}</p>
                    </div>
                    <p className="text-2xl text-center w-[80%]">
                      {item.hospitalLocation}
                    </p>
                    <Link
                      to={`/hospital/${item.hospitalName
                        .split(" ")
                        .join("-")
                        .toLowerCase()}`}
                    >
                      <button className="bg-[#3ba0f3] rounded-full py-3 my-4 text-white px-10">
                        Book Now
                      </button>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
      </div>
      <Footer />
    </div>
  );
}

export default Booking;
