import { FaHeartbeat, FaStethoscope } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { GiSpectacles } from "react-icons/gi";
export default function Service() {
  return (
    <div className="container mx-auto">
      <p className="text-center text-[#3ba0f3] font-medium text-[1.5em]">
        Our Services
      </p>
      <h1 className="text-center text-3xl font-bold">
        Services For Your Health
      </h1>
      <div className="flex w-[100%] gap-10 my-5">
        <div className="w-[20%] h-[30vh] shadow-2xl border-2 px-5 rounded-[5px]">
          <FaHeartbeat
            className="w-[100%] h-[20%]"
            style={{ color: "#42A5F5" }}
          />
          <h2 className="text-center my-3 text-[#3ba0f3] font-bold text-[1.5rem] ">
            Cardiology
          </h2>
          <p>
            The heart is a very critical organ.Welcome and get diagnosed and
            treated disoders and diseases on your cardiovascular system.
          </p>
          {/* <p>Explore Now</p> */}
        </div>
        <div className="w-[20%] h-[30vh] shadow-2xl border-2  p-5 rounded-[5px]">
          <FaStethoscope
            className="w-[100%] h-[20%]"
            style={{ color: " #FFA400" }}
          />
          <h2 className="text-center my-3 text-[#3ba0f3] font-bold text-[1.5rem]">
            Monthly Check-up
          </h2>
          <p>
            Ensure you are in a good condition twelve times a year through the
            monthly checkup.
          </p>
          {/* <p>Explore Now</p> */}
        </div>
        <div className="w-[20%] h-[30vh] shadow-2xl border-2 p-5 rounded-[5px]">
          <TbDental
            className="w-[100%] h-[20%]"
            style={{ color: " #66BB6A" }}
          />
          <h2 className="text-center my-3 text-[#3ba0f3] font-bold text-[1.5rem]">
            Dental Care
          </h2>
          <p>
            The goal to the best dental care is always to prevent complications
            and to maintain the overall health of the mouth.To achieve this you
            can book an appointment based on your schedule.
          </p>
          {/* <p>Explore Now</p> */}
        </div>
        <div className="w-[20%] h-[30vh] shadow-2xl border-2 p-5 rounded-[5px]">
          <GiSpectacles
            className="w-[100%] h-[20%]"
            style={{ color: " #FFC200" }}
          />
          <h2 className="text-center my-3 text-[#3ba0f3] font-bold text-[1.5rem]">
            Ophthalmology
          </h2>
          <p>
            A good sight is everything!Make a reservation for your eye and
            realise how much you care!
          </p>
          {/* <p>Explore Now</p> */}
        </div>
      </div>
    </div>
  );
}
