// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCnCYYF6jmGJnX6Qm1H2XeYp4nAH0iAvMg",
  authDomain: "react-projectwithfirebase.firebaseapp.com",
  projectId: "react-projectwithfirebase",
  storageBucket: "react-projectwithfirebase.appspot.com",
  messagingSenderId: "514346317522",
  appId: "1:514346317522:web:1275bc7c8461f866b75f0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;