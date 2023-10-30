import { Link } from "react-router-dom";
export default function Hero() {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-[#3ba0f3] mt-[15vh] ">
      <div className="container mx-auto flex items-center justify-center w-[100%] h-[70vh]  mb-[2em]">
        <div className="mt-5 w-[50%] p-10">
          <h1 className="font-bold text-6xl w-[120%]">
            Your Health Is A Top Priority
          </h1>
          <p className="text-[1.5rem] font-medium text-center mb-[1em]">
            AppointCare considers everyone in the medical world.
          </p>
          <p className="text-[1.2rem]  w-[120%]">
            Are you a <span className="text-[#3ba0f3] text-[1.8rem] font-bold ">HOSPITAL</span> looking for where you can present your hospital ?
          </p>
          <p className="text-center font-bold text-[2rem]">OR</p>
          <p className="text-[1.2rem]  w-[120%]">
            Are you a <span className="text-[#3ba0f3] text-[1.8rem] font-bold ">PATIENT</span>  who needs urgent treatment via set appointment ?
          </p>
          <p className=" text-[3rem] mb-3 text-center font-bold">
            Appoint Care <span className="text-[#3ba0f3]">Solves It All!</span>
          </p>
          <div className="flex justify-center items-center">
            <Link to="/booking">
              <button className="bg-[#3ba0f3] text-white p-4 rounded shadow my-5 mx-auto object-center">
                Book An Appointment
              </button>
            </Link>
          </div>
        </div>
        <div className=" bg-[url('src/assets/images/doctor-pointing.png')] w-[50%] h-[60vh] bg-no-repeat bg-contain bg-right"></div>
      </div>
    </div>
  );
}
