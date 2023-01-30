// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Util, Dropdown, Offcanvas, Popover } from 'bootstrap';


// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, onSnapshot } from "firebase/firestore";

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
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
