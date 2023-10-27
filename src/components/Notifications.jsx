import React, { useState } from 'react';
import Nav from './Nav';

const Notifications = () => {
  

  return (
    <div className=" p-4 rounded-lg mt-[15vh]">
      <Nav/>
      <h2 className="text-xl text-red-500 font-bold">Notifications</h2>
      
      <ul className="mt-4 space-y-2">
          <li
            
            className="p-2 bg-white text-gray-800 rounded-lg shadow-md"
          >
            Notification1
          </li>
      </ul>
    </div>
  );
};

export default Notifications;
