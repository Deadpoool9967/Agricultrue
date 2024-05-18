import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyANqCN1EuWNH9hexLT2rAONCdazA706TEI",
    authDomain: "web-notifere.firebaseapp.com",
    databaseURL: "https://web-notifere-default-rtdb.firebaseio.com",
    projectId: "web-notifere",
    storageBucket: "web-notifere.appspot.com",
    messagingSenderId: "94448209735",
    appId: "1:94448209735:web:0fd1b0df9ae2830d460662",
    measurementId: "G-4FT7X7QD15"
});

var db = firebaseApp.firestore();

export { db };
