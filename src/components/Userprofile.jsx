import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import axios from "axios";

export default function Userprofile() {
  // const url = "http://127.0.0.1:8000/api/user/profile/";
  const imageUrl = "http://127.0.0.1:8000/api";
  const user = JSON.parse(localStorage.getItem("userprofile"));
  console.log(user);

  return (
    <div className="flex justify-center items-center p-3 mx-auto container mt-[15em] mb-[5em] w-[30vw] h-[48vh] shadow shadow-gray-600 ">
      <div className="flex flex-col">
        <div className="flex">
          {/* <p className="font-bold text-black mr-10">Profile P:</p> */}
          <img
            src={`${imageUrl}${user.profilePic}`}
            alt=""
            className="w-[8vw] h-[16vh] mt-[-7em]"
          />
        </div>
        <div className="flex">
          <p className="font-bold text-black mr-5 my-[1em]">Name:</p>
          <p className="my-[1em]">
            {user.related_data.first_name} {user.related_data.last_name}
          </p>
        </div>
        <div className="flex">
          <p className="font-bold text-black mr-5 my-[1em]">Username:</p>
          <p className="my-[1em]">{user.related_data.username}</p>
        </div>
        <div className="flex">
          <p className="font-bold text-black mr-5 my-[1em]">Email:</p>
          <p className="my-[1em]">{user.related_data.email}</p>
        </div>
        <div className="flex">
          <p className="font-bold text-black mr-5 my-[1em]">Phone Number:</p>
          <p className="my-[1em]">{user.phoneNumber}</p>
        </div>
        <div className="">
          <Link to="/edit">
            <button className="bg-[#3ba0f3] rounded-full py-3  text-white px-10">
              Update Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
