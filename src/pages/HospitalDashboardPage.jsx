import { useState } from "react";
import Footer from "../components/Footer";
import HospitalDetails from "../components/HospitalDetails";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import DoctorDetails from "../components/DoctorsDetails";
import Notifications from "../components/Notifications";
import LogoutHospital from "../components/LogoutHospital";

function HospitalDashboardPage() {
    const [selectedContent,setSelectedContent] =useState("hospitaldetails")

    const renderContent=()=>{
        switch(selectedContent){
            case "hospitaldetails":
                return <HospitalDetails/>
            case "doctors":
                return <DoctorDetails/>
            case "notifications":
                return <Notifications/>
            case "logouthospital":
                return <LogoutHospital/>
            default:
                <HospitalDetails/>
        }
    }
    return(
        <div className="flex flex-col h-[100vh]">
            <Nav className="flex-1"/>
            <SideBar setSelectedContent={setSelectedContent}/>
            <div className=" ml-[20vw] flex-1 ">
            {renderContent()}
            </div>
            <Footer className="flex-1"/>
        </div>
    )
}
export default HospitalDashboardPage