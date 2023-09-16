// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpqNWdvTx0nuVWEuukODPH2_jy_MTmrjI",
  authDomain: "pomodro-timer-44ede.firebaseapp.com",
  projectId: "pomodro-timer-44ede",
  storageBucket: "pomodro-timer-44ede.appspot.com",
  messagingSenderId: "540566806057",
  appId: "1:540566806057:web:5a8bd3cabc30e551318638",
  measurementId: "G-5LNGN6D6YV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
