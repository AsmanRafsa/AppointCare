import { FaHeartbeat, FaStethoscope } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { GiSpectacles } from "react-icons/gi";
export default function Service() {
  return (
    <div className="container mx-auto ">
      <div className="flex items-center gap-3 justify-center">
        <div className="w-[60px] h-[3px] bg-[#3ba0f3] "></div>
        <p className=" text-[#3ba0f3] font-medium text-[1.2rem] font-[poppins]">
          OUR SERVICES
        </p>
      </div>
      <h2 className="font-medium text-center text-[3rem] font-[poppins]">
        What We Do
      </h2>
      <div className="flex w-[90%] flex-row  items-center justify-between my-5 mx-auto">
        <div className="w-[23%] h-[30vh] shadow-2xl border-2 px-5 py-5  ">
          <FaHeartbeat
            className="w-[100%] h-[20%]"
            style={{ color: "#42A5F5" }}
          />
          <h2 className="text-center my-3 text-[#3ba0f3] text-[1.3rem] font-medium font-[poppins] ">
            Apointment Scheduling
          </h2>
          <p className="font-[raleway]">
            Choose a suitable date and time for your appointment, with consideration to your own schedule.
          </p>
          {/* <p>Explore Now</p> */}
        </div>
        <div className="w-[23%] h-[30vh] shadow-2xl border-2  p-5 rounded-[5px]">
          <FaStethoscope
            className="w-[100%] h-[20%]"
            style={{ color: " #FFA400" }}
          />
          <h2 className="text-center my-3 text-[#3ba0f3] text-[1.3rem] font-medium font-[poppins]">
            Multi-Hospital Access
          </h2>
          <p className="font-[raleway]">
            Free access to multiple hospitals and fre will to book with the one within your location.
          </p>
          {/* <p>Explore Now</p> */}
        </div>
        <div className="w-[23%] h-[30vh] shadow-2xl border-2 p-5 rounded-[5px]">
          <TbDental
            className="w-[100%] h-[20%]"
            style={{ color: " #66BB6A" }}
          />
          <h2 className="text-center my-3 text-[#3ba0f3] text-[1.3rem] font-medium font-[poppins]]">
           Information Availability
          </h2>
          <p className="font-[raleway]">
            Get real-time information about availability of doctors, specialists and various services at different hospitals. 
          </p>
          {/* <p>Explore Now</p> */}
        </div>
        <div className="w-[23%] h-[30vh] shadow-2xl border-2 p-5 rounded-[5px]">
          <GiSpectacles
            className="w-[100%] h-[20%]"
            style={{ color: " #FFC200" }}
          />
          <h2 className="text-center my-3 text-[#3ba0f3] text-[1.3rem] font-medium font-[poppins]">
          Data Security
          </h2>
          <p className="font-[raleway]">
            We prioritize the security of your data and ensure that your personal and medical information is protected.
          </p>
          {/* <p>Explore Now</p> */}
        </div>
      </div>
    </div>
  );
}
