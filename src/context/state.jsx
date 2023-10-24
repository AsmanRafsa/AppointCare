import { createContext, useState } from "react";
export const StateContext = createContext();
export default function StateProvider({ children }) {
  const [book, setBook] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);
  const [isLogin, setIsLogin] = useState([]);

  return (
    <StateContext.Provider value={{ book, setBook,isLogin,setIsLogin, hospitals, setHospitals,currentUser,setCurrentUser }}>
      {children}
    </StateContext.Provider>
  );
}
