import firebase from 'firebase/app';
import './firebase/auth'
import './firebase/database'



var firebaseConfig = {
    apiKey: "AIzaSyCwDSLn1bfcvsjWgXxeqEGPEVvvowohPdo",
    authDomain: "assignment8-473a4.firebaseapp.com",
    databaseURL: "https://assignment8-473a4-default-rtdb.firebaseio.com",
    projectId: "assignment8-473a4",
    storageBucket: "assignment8-473a4.appspot.com",
    messagingSenderId: "738028186750",
    appId: "1:738028186750:web:45dc76797cf5a3f2b4fc2f",
    measurementId: "G-2DYJ7JLYS2"
  };
  // Initialize Firebase
  export default firebase.initializeApp(firebaseConfig);