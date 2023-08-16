// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";                  // NEW
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5g2lhwI5rJidftaiw2Awm9D664EKVZpM",
  authDomain: "awaas-vishwa.firebaseapp.com",
  projectId: "awaas-vishwa",
  storageBucket: "awaas-vishwa.appspot.com",
  messagingSenderId: "642355190611",
  appId: "1:642355190611:web:cb35d0dece646369921fa6",
  measurementId: "G-VHD396FF74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);                          // NEW