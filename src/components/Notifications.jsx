import { useEffect, useState } from "react";
import axios from "axios";
import { FaStoreAltSlash } from "react-icons/fa";
import { useContext } from "react";
import { StateContext } from "../context/state";

function Notifications() {
  const { notifications, setNotifications } = useContext(StateContext);
  const [loading, setLoading] = useState(true);
  const hospitalId = JSON.parse(localStorage.getItem("hospital")).id;
  const appointments = "http://127.0.0.1:8000/api/booking/";
  const { hospitalAppointments, setHospitalAppointments } =
    useContext(StateContext);

  console.log(notifications);
  notifications.forEach((element) => {
    const date = new Date(element.timeBooked);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });
    const day = date.getDate();
    const time=date.toLocaleString([], {
      hour: '2-digit',
      minute: '2-digit'
  })
    const formatted_date = `${day} ${month} ${year}, ${time}`;
    console.log(formatted_date);
  });

  return (
    <div className=" p-4 rounded-lg mt-[15vh]">
      <h1 className="text-2xl  font-semibold mb-4 font-[poppins]">Hospital Notifications</h1>

      <div>
        {/* {loading ? (
          <p>Loading notifications...</p>
        ) : ( */}
        <ul className="text-white">
          {notifications.length === 0 ? (
            <p className="font-[raleway] shadow-[0_0_5px_lightgray] w-[200p] h-[200px]">No notifications at the moment.</p>
          ) : (
            notifications.map((notification) => {
              const date = new Date(notification.timeBooked);
              const year = date.getFullYear();
              const month = date.toLocaleString("default", { month: "long" });
              const day = date.getDate();
              const time=date.toLocaleString([], {
                hour: '2-digit',
                minute: '2-digit'
            })
              const formatted_date = `${day} ${month} at ${time}`;
              return (
                <div className="mb-2 bg-blue-200 border border-blue-600 rounded p-3 my-2">
                  <p >
                    {notification.related_userdata.first_name}{" "}
                    {notification.related_userdata.last_name} has booked an
                    appointment for {notification.patientDisease} services on {formatted_date}
                  </p>
                </div>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}

export default Notifications;
