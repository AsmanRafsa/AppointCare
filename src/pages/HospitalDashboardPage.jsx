import { useContext, useEffect, useState } from "react";
import Footer from "../components/Footer";
import HospitalDetails from "../components/HospitalDetails";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import DoctorDetails from "../components/DoctorsDetails";
import Notifications from "../components/Notifications";
import { StateContext } from "../context/state";

export default function HospitalDashboardPage() {
  const [selectedContent, setSelectedContent] = useState("hospitaldetails");
  const allAppointmentsUrl = "http://127.0.0.1:8000/api/booking/";
  const hospitalId = JSON.parse(localStorage.getItem("hospital")).id;
  const { hospitalAppointments, setHospitalAppointments } =
    useContext(StateContext);
  const { notifications, setNotifications } = useContext(StateContext);

  useEffect(() => {
    console.log(hospitalAppointments);
    const uniqueAuthors = hospitalAppointments.reduce(
      (accumulator, current) => {
        if (!accumulator.find((item) => item.id === current.id)) {
          accumulator.push(current);
        }
        return accumulator;
      },
      []
    );
    setNotifications(uniqueAuthors);
    // console.log(uniqueAuthors)
  }, []);

  const renderContent = () => {
    switch (selectedContent) {
      case "hospitaldetails":
        return <HospitalDetails />;
      case "doctors":
        return <DoctorDetails />;
      case "notifications":
        return <Notifications />;
      default:
        <HospitalDetails />;
    }
  };
  return (
    <div className="flex flex-col h-[100vh]">
      <Nav className="flex-1" />
      <SideBar setSelectedContent={setSelectedContent} />
      <div className=" ml-[20vw] flex-1 ">{renderContent()}</div>
      {/* <HospitalDashboard/> */}
      <Footer className="flex-1" />
    </div>
  );
}
