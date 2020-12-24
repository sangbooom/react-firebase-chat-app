import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCeVmOt8YL0ERgzHVczGiFY21vIftp7uC8",
  authDomain: "react-firebase-chat-app-4463f.firebaseapp.com",
  projectId: "react-firebase-chat-app-4463f",
  storageBucket: "react-firebase-chat-app-4463f.appspot.com",
  messagingSenderId: "710087723416",
  appId: "1:710087723416:web:68f4e4e87a8351007cc3ed",
  measurementId: "G-8YLVC2B0LW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;