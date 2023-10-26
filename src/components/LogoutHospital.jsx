import Footer from "./Footer";
import Nav from "./Nav";

export default function LogoutHospital() {
  return (
    <div className="flex flex-col h-[100vh]">
      <Nav className="flex-1"/>
      <div className="container mx-auto shadow flex-1 shadow-gray-500 w-[40vw] h-[30vh] my-[8em] flex flex-col justify-center items-center">
        <h1 className="text-[2rem] font-semibold text-center my-[2em]">
          ARE YOU SURE YOU WANT TO LOG OUT?
        </h1>
        <div className="flex gap-[3em] justify-center items-center mb-[3em]">
          <button className="text-[#fff] bg-red-600 p-3 shadow  border rounded-[5px] font-semibold text-[1.2rem]">
            Log Out
          </button>
          <button className="text-[#0775c3] bg-white p-3 shadow shadow-gray-500 border rounded-[5px] font-semibold text-[1.2rem]">
            Cancel
          </button>
        </div>
      </div>
      <Footer className="flex-1"/>
    </div>
  );
}
