import React, { useState } from 'react';
import Nav from './Nav';
import Footer from './Footer';

const Notifications = () => {
  
  // const [bookingNotifications, setBookingNotifications] = useState([]);

  // const addBookingNotification = (booking) => {
  //   setBookingNotifications([booking, ...bookingNotifications]);
  // };
  return (
    <div className=" p-4 rounded-lg mt-[15vh]">
      
      <div className="bg-blue-200 border border-blue-600 rounded p-3 my-2">
      <div className="text-blue-800">
        New Booking Received
      </div>
      <div>
        <strong>Patient:</strong> John Doe
      </div>
      <div>
        <strong>Date:</strong> 5/6/2023
      </div>
      <button
        
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Receive Booking
      </button>
      <div className="mt-4">
        
      </div>
    </div>
    
    </div>
  );
};

export default Notifications;
