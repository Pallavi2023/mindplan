import firebase from 'firebase/compat';
import 'firebase/compat/firestore';
import 'firebase/auth';
//import { initializeApp } from "firebase/app";

// Replace this with your own config details
const firebaseConfig = {
  apiKey: "AIzaSyApjPEENdANGYnqeqtn_uSGhdmTuDFkCxM",
  authDomain: "mindplan-350a2.firebaseapp.com",
  projectId: "mindplan-350a2",
  storageBucket: "mindplan-350a2.appspot.com",
  messagingSenderId: "644456556532",
  appId: "1:644456556532:web:f7faa767605a149db33ba1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase


/* firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase  */