import {getUiConfig} from "./config.js";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import { getFirestore, collection, getDoc, getDocs, doc, onSnapshot } from "firebase/firestore";

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase.app());
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
ui.disableAutoSignIn();

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



// const logsSnap = await getDocs(collection(db, "users", "test user 3", "logs_user_gestures"));
// logsSnap.forEach((doc) => {
//   // doc.data() is never undefined for query doc snapshots
//   data = doc.data();
//   items.add({
//     start: new Date(data.timestamp.seconds*1000),
//     type: "point",
//     className: data.info.toLowerCase(),
//   });
// });

/**
 * Displays the UI for a signed in user.
 * @param {!firebase.User} user
 */
var handleSignedInUser = function(user) {
  console.log('user signed in');
  document.getElementById('user-signed-in').style.display = 'block';
  document.getElementById('user-signed-out').style.display = 'none';
  document.getElementById('name').textContent = `Hi, ${user.displayName}`;
};

// Displays the UI for a signed out user.
var handleSignedOutUser = function() {
  console.log('user signed out');
  document.getElementById('user-signed-in').style.display = 'none';
  document.getElementById('user-signed-out').style.display = 'block';
  // The start method will wait until the DOM is loaded.
  ui.start('#firebaseui-auth-container', getUiConfig());
};

// Listen to change in auth state so it displays the correct UI for when
// the user is signed in or not.
firebase.auth().onAuthStateChanged(function(user) {
  user ? handleSignedInUser(user) : handleSignedOutUser();
});

var initApp = function() {
  console.log('init app');

  document.getElementById('sign-out').addEventListener('click', function() {
    console.log('sign out');
    firebase.auth().signOut();
  });
};

initApp();
// window.addEventListener('DOMContentLoaded', initApp);
