import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-[#3ba0f3] mt-[15vh] ">
      <div className="container mx-auto  h-[70vh] mb-[2em]">
        <div className="w-[90%] mx-auto flex items-center justify-center">
          <div className="mt-5 w-[50%] p-10">
          <div className="flex items-center gap-4">
              <div className="w-[60px] h-[3px] bg-[#3ba0f3]"></div>
              <p className=" text-[#3ba0f3] font-medium text-[1.2rem] font-[poppins]">
                COMMITED TO SUCCESS
              </p>
            </div>
            <h1 className="font-semibold text-6xl w-[120%] my-[0.4em] font-[poppins]">
              Your Health Is Our Top Priority
            </h1>
            <p className="text-[1.5rem]  mb-[0.8em] font-[raleway]">
              Are you a{" "}
              <span className="text-[#3ba0f3] text-[1.5rem] font-medium">
                hospital
              </span>{" "}
              looking for where you can present your hospital? Are you a{" "}
              <span className="text-[#3ba0f3] text-[1.5rem] font-medium ">
                patient
              </span>{" "}
              who needs urgent treatment via set appointment? Appoint Care{" "}
              <span className="text-[#3ba0f3]">Solves It All!</span>
            </p>
            <div className="flex items-center gap-5">
              <Link to="/booking">
                <button className="bg-[#3ba0f3] text-white p-4 rounded shadow my-5 object-center font-[raleway]">
                  Book An Appointment
                </button>
              </Link>
              <Link to="/hospitalregister">
                <button className="bg-[#3ba0f3] text-white py-4 px-6 rounded shadow my-5 object-center font-[raleway]">
                 Add A Hospital
                </button>
              </Link>
            </div>
          </div>
          <div className=" bg-[url('src/assets/images/doctor-pointing.png')] w-[60%] h-[70vh] bg-no-repeat bg-cover bg-center"></div>
        </div>
      </div>
    </div>
  );
}
