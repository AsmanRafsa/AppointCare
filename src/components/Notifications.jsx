import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = `New notification at ${new Date().toLocaleTimeString()}`;
    setNotifications([...notifications, newNotification]);
  };

  return (
    <div className=" p-4 rounded-lg">
      <h2 className="text-xl font-bold">Notifications</h2>
      
      <ul className="mt-4 space-y-2">
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="p-2 bg-white text-gray-800 rounded-lg shadow-md"
          >
            Notification 1
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
