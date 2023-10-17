import Booking from "../components/Booking";
import { StateContext } from "../context/state";
import { useEffect, useContext, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

import { getFirestore } from "firebase/firestore";
import { db } from "../firebase";



function BookingPage() {
  const [book, setBook] = useContext(StateContext);
  useEffect(()=>{
    (async function () {
      const q = query(collection(db, "hospitals"));

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    })()

    });
  },[])
  return (
    <div>
      <Booking />
    </div>
  );
}

export default BookingPage;
