// Import the functions you need from the SDKs you need
import { getAuth} from "firebase/auth";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7uBEfJaf8UlaDiBFiaP6A8xmoDEM59c0",
    authDomain: "donation-campaign-auth.firebaseapp.com",
    projectId: "donation-campaign-auth",
    storageBucket: "donation-campaign-auth.appspot.com",
    messagingSenderId: "512741540952",
    appId: "1:512741540952:web:e02ee7e30a48d6cf96362d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;