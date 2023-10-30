import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Booking from "./Booking";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import InstitutionPage from "../pages/InstitutionPage";
import HospitalRegisterpage from "../pages/HospitalRegisterPage";
import HospitalLoginPage from "../pages/HospitalLoginPage";
import HospitalDashboardPage from "../pages/HospitalDashboardPage";
import DoctorDetails from "../components/DoctorsDetails";
import LogoutHospital from "../components/LogoutHospital";
import AddDoctorForm from "./AddDoctorForm";
import Notifications from "./Notifications";
import Logout from "./Logout";
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/hospitalregister" element={<HospitalRegisterpage/>} />
        <Route path="/hospitallogin" element={<HospitalLoginPage/>} />
        <Route path="/addform" element={<AddDoctorForm/>} />
        <Route path="/hospitaldashboard" element={<HospitalDashboardPage/>} />
        <Route path="/doctordetails" element={<DoctorDetails/>} />
        <Route path="/logouthospital" element={<LogoutHospital/>} />
        <Route path="/hospital/:id" element={<InstitutionPage />} />
        <Route path="/notification" element={<Notifications />} />
        <Route path="/logout" element={<Logout />} />

        

      </Routes>
    </BrowserRouter>
  );
}
