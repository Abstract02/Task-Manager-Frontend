// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_1K7vRisUO8TvOdnJq-tnjssEs_mHutI",
  authDomain: "task-manager-a0f71.firebaseapp.com",
  projectId: "task-manager-a0f71",
  storageBucket: "task-manager-a0f71.appspot.com",
  messagingSenderId: "858900674545",
  appId: "1:858900674545:web:d801509b4edf47e86b7650",
  measurementId: "G-RBC1MJE5H0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);