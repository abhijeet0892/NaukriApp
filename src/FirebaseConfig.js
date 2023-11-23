// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsNqcbHYEe3OBzMfYmk0B7pIYfZW3wNfY",
  authDomain: "naukri-app-44f83.firebaseapp.com",
  projectId: "naukri-app-44f83",
  storageBucket: "naukri-app-44f83.appspot.com",
  messagingSenderId: "171225867437",
  appId: "1:171225867437:web:ced4a326893b70091fd224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
