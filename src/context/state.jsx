import { createContext, useState } from "react";
export const StateContext = createContext();
export default function StateProvider({ children }) {
  const [book, setBook] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  return (
    <StateContext.Provider value={{ book, setBook, hospitals, setHospitals }}>
      {children}
    </StateContext.Provider>
  );
}
