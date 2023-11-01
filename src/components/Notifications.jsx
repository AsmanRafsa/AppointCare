import { useEffect, useState } from "react";
import axios from "axios";

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const hospitalId = JSON.parse(localStorage.getItem("user")).id;
  const notificationUrl = "http://127.0.0.1:8000/api/hospital-notifications";

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(notificationUrl);
        setNotifications(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notifications:", error);
        setLoading(false);
      }
    };
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 60000);
    return () => clearInterval(interval);
  }, []);


const ReceivedNotification=(e)=>{
  e.preventDefault()
  axios
      .get(notificationUrl)
      .then((response) => {
        console.log("Received Notifications:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching notifications:", error);
      });
}


  return (
    <div className=" p-4 rounded-lg mt-[15vh]">
      <h1 className="text-2xl  font-semibold mb-4">Hospital Notifications</h1>

      <div className="bg-blue-200 border border-blue-600 rounded p-3 my-2">
        {loading ? (
          <p>Loading notifications...</p>
        ) : (
          <ul className="text-white">
            {notifications.length === 0 ? (
              <p>No notifications at the moment.</p>
            ) : (
              notifications.map((notification) => (
                <li  className="mb-2">
                  <strong>{notification.user}:</strong> {notification.message}
                </li>
              ))
            )}
          </ul>
        )}
        <button onClick={(e)=>ReceivedNotification(e)} className="bg-blue-500 text-white px-4 py-2 rounded">ReceivedNotification</button>
      </div>
    </div>
  );
}

export default Notifications;
