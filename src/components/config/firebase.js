// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "@firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  const firebaseConfig = {
    apiKey: "AIzaSyBWC2np6s_Ma30ZypwsWIfvhJsLlrRTIv4",
    authDomain: "medapp-f45ed.firebaseapp.com",
    databaseURL: "https://medapp-f45ed-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "medapp-f45ed",
    storageBucket: "medapp-f45ed.appspot.com",
    messagingSenderId: "1044938090380",
    appId: "1:1044938090380:web:05239eb444ac76a36b18a9",
    measurementId: "G-ZSXJK6K21D"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
   

export const auth = getAuth(app);
export const db = getDatabase(app);
