
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXrUOqQuMWPEJBSScD6uNcm2NG2R850oo",
  authDomain: "genius-car-services-b5106.firebaseapp.com",
  projectId: "genius-car-services-b5106",
  storageBucket: "genius-car-services-b5106.appspot.com",
  messagingSenderId: "942914254899",
  appId: "1:942914254899:web:fe51374ba8703870ff0b46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

