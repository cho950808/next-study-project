// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXZuT8DtRBhQ56OrCleVn6oU9uq-_lyq8",
  authDomain: "next-study-project.firebaseapp.com",
  projectId: "next-study-project",
  storageBucket: "next-study-project.appspot.com",
  messagingSenderId: "70765769104",
  appId: "1:70765769104:web:354506d58eb878f09ec315",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
