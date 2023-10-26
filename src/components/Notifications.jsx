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
      <button
        onClick={addNotification}
        className="bg-red-500 text-white p-2 rounded-lg mt-2"
      >
        Add Notification
      </button>
      <ul className="mt-4 space-y-2">
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="p-2 bg-white text-gray-800 rounded-lg shadow-md"
          >
            {notification}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
