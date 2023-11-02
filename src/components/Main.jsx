import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="container mx-auto w-[100%]">
      <div className="w-[90%] mx-auto">
        <div className="flex gap-10 my-[5em] w-[100%]">
          <div className="w-[50%]">
            <div className="flex items-center gap-3">
              <div className="w-[60px] h-[3px] bg-[#3ba0f3]"></div>
              <p className=" text-[#3ba0f3] font-medium text-[1.2rem] font-[poppins]">
                ABOUT US
              </p>
            </div>

            <h2 className="font-medium text-[3rem] font-[poppins]">
              Welcome to our Platform 
              
            </h2>
            <p className="text-[1.2rem] my-2 font-[raleway]">
              There are many individuals that undergo variation of passages ,but
              majority have suffered from alteration in some form,by injected
              humour.We are the startup studio for the best treatment.
            </p>
            <div className="flex items-center">
              <Link to="/booking">
                <button className="bg-[#3ba0f3] text-white rounded shadow my-5 py-4 px-8 object-center font-[raleway]">
                  Book With Us
                </button>
              </Link>
            </div>
          </div>
          <div className="bg-[url('src/assets/images/main.jpeg')] h-[40vh] w-[50%] bg-no-repeat bg-contain bg-left"></div>
        </div>
        <div className="flex justify-center items-center text-1xl">
          <div>
            <div className="text-center">
              <h2 className="text-5xl font-bold text-center font-[poppins]">
                Affordable Health Care Solutions
              </h2>
              <p className="font-[raleway]">
                We value your <span>time</span> so we set up all your accounts
                billing and costs through one payment that we take out of the
                box.{" "}
              </p>
            </div>
            <div className="flex-col  gap-5 justify-between items-center">
              <div className="flex gap-5 justify-center my-4">
                <AiFillCheckCircle style={{ color: "#3ba0f3" }} size={30} />
                <p className="text-xl font-medium font-[raleway]">Happy Patients</p>
              </div>
              <div className="flex gap-5 justify-center my-4">
                <AiFillCheckCircle style={{ color: "#3ba0f3" }} size={30} />
                <p className="text-xl font-medium font-[raleway]">Affordable Pricing</p>
              </div>
              <div className="flex gap-5  justify-center my-4">
                <AiFillCheckCircle style={{ color: "#3ba0f3" }} size={30} />
                <p className="text-xl font-medium font-[raleway]">Expert Doctors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
