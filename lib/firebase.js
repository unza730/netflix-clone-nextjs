// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPe2yCzRMHyKi8cimv-5Pzm5BnQ_vVa_A",
  authDomain: "netflix-nextjs-yt-e6921.firebaseapp.com",
  projectId: "netflix-nextjs-yt-e6921",
  storageBucket: "netflix-nextjs-yt-e6921.appspot.com",
  messagingSenderId: "229601712592",
  appId: "1:229601712592:web:fddba33b52f4bcb818c1d5",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const auth = getAuth();
export { app, db, auth };