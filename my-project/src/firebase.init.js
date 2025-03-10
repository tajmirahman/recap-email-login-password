// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeuf1g4Bp2THSOO-rrIVoAJl1k05qoPG4",
  authDomain: "recap-email-password-login.firebaseapp.com",
  projectId: "recap-email-password-login",
  storageBucket: "recap-email-password-login.firebasestorage.app",
  messagingSenderId: "325733446899",
  appId: "1:325733446899:web:7f4f6b84418b4defdeb386"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;