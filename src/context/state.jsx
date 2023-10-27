import { createContext, useState } from "react";
export const StateContext = createContext();
export default function StateProvider({ children }) {
  const [book, setBook] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [isLogin, setIsLogin] = useState([]);
  const [isLogIn, setIsLogIn] = useState({
    is_loggedIn : localStorage.getItem("access_token") ? true : false,
    username: "",
     email: "",
  });

  return (
    <StateContext.Provider value={{ book, setBook,isLogIn,setIsLogIn, isLogin,setIsLogin,hospitals, setHospitals,currentUser,setCurrentUser }}>
      {children}
    </StateContext.Provider>
  );
}
