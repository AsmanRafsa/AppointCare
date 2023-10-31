import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Notification() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const notificationUrl = "http://127.0.0.1:8000/api/hospital-notifications";
  
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(notificationUrl);
        setNotifications(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching notifications:', error);
        setLoading(false);
      }
    };

    // Fetch notifications when the component mounts
    fetchNotifications();

    // Poll for new notifications every 1 minute
    const interval = setInterval(fetchNotifications, 60000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Hospital Notifications</h1>
      {loading ? (
        <p>Loading notifications...</p>
      ) : (
        <ul>
          {notifications.length === 0 ? (
            <p>No notifications at the moment.</p>
          ) : (
            notifications.map((notification, index) => (
              <li key={index} className="mb-2">
                <strong>{notification.patient_name}:</strong> {notification.message}
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default Notification;
