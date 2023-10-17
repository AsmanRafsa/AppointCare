import { AiFillCheckCircle } from "react-icons/ai";

export default function Main() {
  return (
    <div className="container mx-auto w-[100%]">
      <div className="flex gap-10 my-[5em] w-[100%]">
        <div className="bg-[url('src/assets/images/main.jpeg')] h-[40vh] w-[50%] bg-no-repeat bg-contain bg-right"></div>
        <div className="w-[50%]">
          <p className="text-center text-[#3ba0f3] font-medium text-[1.5rem]">
            10+ years of experience
          </p>
          <h2 className="font-bold text-[3rem]">
            We Will Always Ensure{" "}
            <span className="text-[#3ba0f3]">Best Medical Treatment</span> For
            Your Health !
          </h2>
          <p>
            There are many individuals that undergo variation of passages ,but
            majority have suffered from alteration in some form,by injected
            humour.We are the startup studio for the best treatment.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center text-1xl">
        <div>
          <div className="text-center">
            <h2 className="text-5xl font-bold text-center">
              Affordable Health Care Solutions
            </h2>
            <p>
              We value your <span>time</span> so we set up all your accounts
              billing and costs through one payment that we take out of the box.{" "}
            </p>
          </div>
          <div className="flex-col gap-5 justify-between items-center">
            <div className="flex gap-5 justify-center my-4">
              <AiFillCheckCircle style={{ color: "#3ba0f3" }} size={30} />
              <p className="text-xl font-medium">Happy Patients</p>
            </div>
            <div className="flex gap-5 justify-center my-4">
              <AiFillCheckCircle style={{ color: "#3ba0f3" }} size={30} />
              <p className="text-xl font-medium">Affordable Pricing</p>
            </div>
            <div className="flex gap-5 justify-center my-4">
              <AiFillCheckCircle style={{ color: "#3ba0f3" }} size={30} />
              <p className="text-xl font-medium">Expert Doctors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
