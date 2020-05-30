import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBN7s-b9baZUDKxvQIpzn1aIXrEfUGk7dE",
  authDomain: "coronatesting-7e867.firebaseapp.com",
  databaseURL: "https://coronatesting-7e867.firebaseio.com",
  projectId: "coronatesting-7e867",
  storageBucket: "coronatesting-7e867.appspot.com",
  messagingSenderId: "318813992596",
  appId: "1:318813992596:web:cbe09827e11c590f236681",
  measurementId: "G-WK9PXGRZTH"
};

firebase.initializeApp(firebaseConfig);

const firebaseDatabase = firebase.database();

export default {
  firebaseDatabase,
};
