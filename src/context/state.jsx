import { createContext, useState } from "react";
export const StateContext = createContext();
export default function StateProvider({ children }) {
  const [book, setBook] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [isLogin, setIsLogin] = useState({
    is_loggedin: localStorage.getItem("user") ? true : false,
  });
  const [hospitalLogggedin, setHospitalLogggedin] = useState({
    hospital_loggedin: localStorage.getItem("hospital") ? true : false,
  });
  const [doctors, setDoctors] = useState([]);
  const [hospitalAppointments, setHospitalAppointments] = useState([]);
  const [notifications, setNotifications] = useState([]);

  return (
    <StateContext.Provider
      value={{
        book,
        setBook,
        isLogin,
        setIsLogin,
        hospitals,
        setHospitals,
        hospitalLogggedin,
        setHospitalLogggedin,
        currentUser,
        setCurrentUser,
        doctors,
        setDoctors,
        hospitalAppointments,
        setHospitalAppointments,
        notifications,
        setNotifications,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
