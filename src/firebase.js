// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkVCvOPzP51_uoArgZfwmIlWtHt2lrnpY",
  authDomain: "appoint-care.firebaseapp.com",
  projectId: "appoint-care",
  storageBucket: "appoint-care.appspot.com",
  messagingSenderId: "302203003461",
  appId: "1:302203003461:web:2b9b44096e567f2a83392c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
