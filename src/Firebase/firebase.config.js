// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};

// const firebaseConfig = {
//   apiKey: "AIzaSyAusv_W2uSIKw1i2Uc5oc3UflK5YlrRSM0",
//   authDomain: "eshop-3786e.firebaseapp.com",
//   projectId: "eshop-3786e",
//   storageBucket: "eshop-3786e.appspot.com",
//   messagingSenderId: "615637246056",
//   appId: "1:615637246056:web:a473e6033729b11490dbdd"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;