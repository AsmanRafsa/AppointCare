import { createContext, useState } from "react";
export const StateContext = createContext();
export default function StateProvider({ children }) {
  const [book, setBook] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [isLogin, setIsLogin] = useState({
    is_loggedin: localStorage.getItem("user") ? true : false,
    name: "",
    email: "",
    phone_number: "",
  });
  const [doctors, setDoctors] = useState([]);
  return (
    <StateContext.Provider
      value={{
        book,
        setBook,
        isLogin,
        setIsLogin,
        hospitals,
        setHospitals,
        currentUser,
        setCurrentUser,
        doctors,
        setDoctors,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
