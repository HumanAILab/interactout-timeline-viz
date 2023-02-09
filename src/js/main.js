// Import our custom CSS
import '../scss/styles.scss'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getFirestore, collection, getDoc, getDocs, doc, onSnapshot } from "firebase/firestore";

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
const app = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);



import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'

var uiConfig = {
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
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(app.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);



import { Timeline, DataSet } from "vis-timeline/standalone"; // esnext
import { data } from 'autoprefixer';
// DOM element where the Timeline will be attached
var container = $('#visualization')[0];

// Create a DataSet (allows two way data-binding)
var items = new DataSet([]);

// Configuration for the Timeline
var options = {
  // configure: true,
  // start: new Date(),
  end: new Date(),
  loadingScreenTemplate: function () {
    return "<h3>Loading...</h3>";
  },
  stack: false,
};

// Create a Timeline
var timeline = new Timeline(container, items, options);



const logsSnap = await getDocs(collection(db, "users", "test user 3", "logs_user_gestures"));
logsSnap.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  data = doc.data();
  items.add({
    start: new Date(data.timestamp.seconds*1000),
    type: "point",
    className: data.info.toLowerCase(),
  });
});

