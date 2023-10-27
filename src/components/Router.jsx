import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Booking from "./Booking";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
import InstitutionPage from "../pages/InstitutionPage";
import HospitalRegisterpage from "../pages/HospitalRegisterPage";
import Post from "../pages/Post";
import HospitalLoginPage from "../pages/HospitalLoginPage";
import Userprofile from "./Userprofile";
import Logout from "./Logout";
import Profileupdate from "./Profileupdate";
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
        <Route path="/post" element={<Post/>} />
        <Route path="/hospital/:name" element={<InstitutionPage />} />
        <Route path="/profile" element={<Userprofile/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/profileupdate" element={<Profileupdate/>} />
        
      </Routes>
    </BrowserRouter>
  );
}
