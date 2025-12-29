import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDBIjfQosivxHJ4CsGRb_tgLrCHkEeZnsQ",
  authDomain: "jerushaline-appointments.firebaseapp.com",
  projectId: "jerushaline-appointments",
  storageBucket: "jerushaline-appointments.firebasestorage.app",
  messagingSenderId: "911204088408",
  appId: "1:911204088408:web:e6a96af6a91c7305f7282d",
  measurementId: "G-8NS2VLLVCR"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
