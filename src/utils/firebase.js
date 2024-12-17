// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOtlSG6Utwfsrws5seNLTV1JNbNLHF3Gk",
  authDomain: "netflixgpt-b603c.firebaseapp.com",
  projectId: "netflixgpt-b603c",
  storageBucket: "netflixgpt-b603c.firebasestorage.app",
  messagingSenderId: "954167149629",
  appId: "1:954167149629:web:d518311b997453ca035654",
  measurementId: "G-X76XKD019E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);