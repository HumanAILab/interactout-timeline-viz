import '../scss/styles.scss'

// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuH1mxL0uvrNdLyxl6BUz2927dtoypxlw",
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

import 'firebase/compat/app-check';

// self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
const appCheck = firebase.appCheck();
// Pass your reCAPTCHA v3 site key (public key) to activate(). Make sure this
// key is the counterpart to the secret key you set in the Firebase console.
appCheck.activate(
  '6LcyXW4kAAAAAE2HEDggTzdHb4_3zgrL4mNeLsdW',

  // Optional argument. If true, the SDK automatically refreshes App Check
  // tokens as needed.
  true);

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


