// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDLzpV_iauyxUS7DwQ0aiPNDQqjI-4KiAw",
    authDomain: "email-password-9ea94.firebaseapp.com",
    projectId: "email-password-9ea94",
    storageBucket: "email-password-9ea94.firebasestorage.app",
    messagingSenderId: "935080058059",
    appId: "1:935080058059:web:19da32afc466a0dc388f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth