// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "friends-blog-b4dd6.firebaseapp.com",
  projectId: "friends-blog-b4dd6",
  storageBucket: "friends-blog-b4dd6.appspot.com",
  messagingSenderId: "492721777024",
  appId: "1:492721777024:web:685fd246035d722d62b965"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);