// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-60d0b.firebaseapp.com",
  projectId: "real-estate-60d0b",
  storageBucket: "real-estate-60d0b.appspot.com",
  messagingSenderId: "774997768253",
  appId: "1:774997768253:web:406128f20503ea7c98d254"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app};