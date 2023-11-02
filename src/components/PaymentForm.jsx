import axios from "axios";
import React, { useState } from "react";
import saf from "../assets/images/safaricom.png";
// import { encode } from 'base-64';

const PaymentForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

const handlePayment = async (phoneNumber, amount) => {
  // Replace with your actual Consumer Key and Consumer Secret
  const consumerKey = '5b5X6R3pWOud6JXhCeMjfojollkuAAFw';
  const consumerSecret = 'Gk4ei0JZVKzOBP7r';
  // const base64 = require('base-64');

  // Base64 encode the consumer key and secret
  // const base64Credentials = Buffer.from(`${consumerKey}:${consumerSecret}`).toString('base64');
  // const base64Credentials = btoa(`${consumerKey}:${consumerSecret}`);
  // const base64Credentials = base64.encode(`${consumerKey}:${consumerSecret}`);
  const base64Credentials = encode(`${consumerKey}:${consumerSecret}`);


  // Request an access token from Safaricom's OAuth API
  const oauthUrl = 'https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials';
  
  try {
    const oauthResponse = await axios.get(oauthUrl, null, {
      headers: {
        'Authorization': `Basic ${base64Credentials}`
      }
    });

    const accessToken = oauthResponse.data.access_token;

    // Now that you have the access token, you can initiate the payment
    const paymentUrl = '';

    const payload =  {
      "BusinessShortCode": 174379,
      "Password": "MTc0Mzc5YmZiMjc5ZjlhYTliZGJjZjE1OGU5N2RkNzFhNDY3Y2QyZTBjODkzMDU5YjEwZjc4ZTZiNzJhZGExZWQyYzkxOTIwMjMxMDMxMTUwMTEw",
      "Timestamp": "20231031150110",
      "TransactionType": "CustomerPayBillOnline",
      "Amount": 100,
      "PartyA": 254740550356,
      "PartyB": 174379,
      "PhoneNumber": 254740550356,
      "CallBackURL": "https://mydomain.com/path",
      "AccountReference": "AppointCare",
      "TransactionDesc": "consultation Payment of X" 
    }
    try {
      const paymentResponse = await axios.post(paymentUrl, payload, {
        headers: {
          'Authorization': `Bearer ${accessToken}`
        }
      });

      console.log('Payment Response:', paymentResponse.data);

      // Handle the payment response as needed
    } catch (paymentError) {
      console.error('Payment Error:', paymentError);
      // Handle payment error
    }
  } catch (oauthError) {
  oauthError = "Your error message goes here"; // Replace this with your actual error message

    console.log( oauthError);
    // Handle OAuth error
  }
};


  return (
    <div className="shadow-[0_0_5px_lightgray] mx-auto w-[20%] p-9 h-[40vh] my-[2em] flex flex-col">
      <img src={saf} alt="" srcset="" className="w-[150px] my-2 inline-block" />
      <h1 className="text-start">M-Pesa Payment Form</h1>
      <input
        type="text"
        placeholder="Phone Number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="p-2 my-3 border outline-none"
      />
      <input
        className="p-2 my-3 border outline-none"
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handlePayment} className="bg-green-500 p-3 my-3">
        Make Payment
      </button>
    </div>
  );
};

export default PaymentForm;
