import '../scss/styles.scss'

// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnvaGus3OMtoQKFBqxpRg1td299dvFflM",
  authDomain: "endless-tractor-360801.firebaseapp.com",
  databaseURL: "https://endless-tractor-360801-default-rtdb.firebaseio.com",
  projectId: "endless-tractor-360801",
  storageBucket: "endless-tractor-360801.appspot.com",
  messagingSenderId: "780571359166",
  appId: "1:780571359166:web:a4e90d6331f724e89aabef",
  measurementId: "G-LEHJVNSLT5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



import 'firebaseui/dist/firebaseui.css'

export function getUiConfig() {
  return {
    signInFlow: 'popup',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    ],
    // tosUrl and privacyPolicyUrl accept either url string or a callback
    // function.
    // Terms of service url/callback.
    tosUrl: 'https://www.google.com',
    // Privacy policy url/callback.
    privacyPolicyUrl: function() {
        window.location.assign('https://www.google.com');
    },
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
  }
};


