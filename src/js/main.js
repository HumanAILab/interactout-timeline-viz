import {getUiConfig} from "./config.js";
import firebase from 'firebase/compat/app';
import * as firebaseui from 'firebaseui'
import { getFirestore, collection, onSnapshot, query } from "firebase/firestore";
import { Timeline, DataSet } from "vis-timeline/standalone"; // esnext

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(firebase.app());
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());



// DOM element where the Timeline will be attached
var container = $('#visualization')[0];
// Create a DataSet (allows two way data-binding)
var items = new DataSet([]);
var groups = ([
  {
    id: "logs_user_gestures",
    content: 'User Gestures'
  },
  {
    id: "logs_user_actions",
    content: 'User Actions'
  }
]);
// Configuration for the Timeline
var options = {
  // configure: function (option, path) {
  //   return option === 'stack';
  // },
  // start: new Date(),
  end: new Date(),
  loadingScreenTemplate: function () {
    return "<h3>Loading...</h3>";
  },
  // stack: false,
};
var timeline =  new Timeline(container, items, groups, options);
var selectedItem = $('#selected-item')[0];
timeline.on('itemover', function (properties) {
  let item = items.get(properties.item);
  selectedItem.textContent = `Selected item:\n\tid:\t\t${item.id}\n\tgroup:\t${item.group}\n\tstart:\t${item.start}\n\tclass:\t${item.className}`;
});

async function getLogs(logsRef, addItem) {
  const q = query(logsRef);
  const unsubscribe = onSnapshot(q, (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      if (change.type === "added") {
        // console.log("New log: ", change.doc.data());
        addItem(change.doc);
      }
    });
  });
}

function getUserGestures(user) {
  getLogs(
    collection(db, "users", user, "logs_user_gestures"),
    function (doc) {
      let data = doc.data();
      items.add({
        id: doc.id,
        start: new Date(data.timestamp.seconds*1000),
        type: "point",
        group: "logs_user_gestures",
        className: data.info.toLowerCase(),
        title: data.info.toLowerCase(),
      });
    }
  );
}

function getUserActions(user) {
  getLogs(
    collection(db, "users", user, "logs_user_actions"),
    function (doc) {
      let data = doc.data();
      items.add({
        id: doc.id,
        start: new Date(data.timestamp.seconds*1000),
        type: "box",
        group: "logs_user_actions",
        className: data.info.toLowerCase(),
        content: data.info.toLowerCase(),
        title: data.info.toLowerCase(),
      });
    }
  );
}

function getSystemEvents(user) {
  getLogs(
    collection(db, "users", user, "logs_system_events"),
    function (doc) {
      let data = doc.data();
      timeline.addCustomTime(
        new Date(data.timestamp.seconds*1000),
        doc.id
      );
      timeline.setCustomTimeMarker(data.info.toLowerCase(), doc.id);
    }
  );
}



/**
 * Displays the UI for a signed in user.
 * @param {!firebase.User} user
 */
var handleSignedInUser = function(user) {
  console.log('user signed in');
  $("#user-signed-in").show();
  $("#user-signed-out").hide();
  $("#user-name").text(`Hi, ${user.displayName}`);

  getUserGestures("test user 3");
  getUserActions("test user 3");
  getSystemEvents("test user 3");
};

// Displays the UI for a signed out user.
var handleSignedOutUser = function() {
  console.log('user signed out');
  $("#user-signed-in").hide();
  $("#user-signed-out").show();
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

  $("#sign-out").on("click", function () {
    console.log('sign out');
    firebase.auth().signOut();
  });

  $("#checkbox-stack").on("change", function () {
    console.log('stack changed');
    timeline.setOptions({
      stack: $(this).is(":checked")
    });
  })
};

initApp();
// window.addEventListener('DOMContentLoaded', initApp);
