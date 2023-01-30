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
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);





import { Timeline, DataSet } from "vis-timeline/standalone";
import { data } from 'autoprefixer';
// DOM element where the Timeline will be attached
var container = document.getElementById('visualization');

// Create a DataSet (allows two way data-binding)
var items = new DataSet([
  // {id: 1, content: 'item 1', start: '2014-04-20'},
  // {id: 2, content: 'item 2', start: '2014-04-14'},
  // {id: 3, content: 'item 3', start: '2014-04-18'},
  // {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
  // {id: 5, content: 'item 5', start: '2014-04-25'},
  // {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
]);

// Configuration for the Timeline
var options = {};

// Create a Timeline
var timeline = new Timeline(container, items, options);

// const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   console.log(doc.id, " => ", doc.data());
// });

const logsSnap = await getDocs(collection(db, "users", "test user 2", "logs"));
logsSnap.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  data = doc.data();
  console.log(doc.id, " => ", data);
  timeline.itemsData.add({content: data.type, start: new Date(data.timestamp.seconds*1000), type: 'point'});
});
