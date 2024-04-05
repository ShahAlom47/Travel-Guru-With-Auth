// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8Nx16L5522cLitMJpRe_bKKWqbUb9cpQ",
  authDomain: "travel-guru-with-auth-ae505.firebaseapp.com",
  projectId: "travel-guru-with-auth-ae505",
  storageBucket: "travel-guru-with-auth-ae505.appspot.com",
  messagingSenderId: "415778172968",
  appId: "1:415778172968:web:548151927b3494bc8e451d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;